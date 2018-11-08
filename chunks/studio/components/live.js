import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import { Icon, notification, Input, Select } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
import SetupCloud from './setupCloud'
import Shell from './shell'
import Progress from './progress'
import { shell } from 'electron'
import { TextField, TextFieldIcon, TextFieldHelperText } from '@rmwc/textfield'
import { Chip, ChipText, ChipIcon, ChipSet } from '@rmwc/chip'
const {clipboard} = require('electron')
import { Snackbar } from '@rmwc/snackbar'
import merge from 'deepmerge'

const Option = Select.Option

export default class Live extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._shell = new Shell()
    this._deploy = this.deploy.bind(this)
    this._setup = this.setup.bind(this)
    this._save = this.save.bind(this)
    this._cancelSetup = this.cancelSetup.bind(this)
    this._cloudSetupDone = this.cloudSetupDone.bind(this)
    this._external = this.external.bind(this)
    this._nsRecordSelected = (record) => this.nsRecordSelected.bind(this, record)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  external() {
    console.log(this.liveUrl)
    shell.openExternal(this.liveUrl)
  }

  get shell () {
    return this._shell
  }

  get settings () {
    return this.state.settings || this.props.settings
  }

  get isCloudSetup () {
    return this.settings.cloud ? true : false
  }

  cloudSetupDone() {
    this.props.onCloudSetupDone && this.props.onCloudSetupDone()
  }

  nsRecordSelected(record) {
    clipboard.writeText(record)
    this.setState({ snack: `Copied ${record} to your clipboard`})
  }

  save() {
    const settings = merge.all([this.settings, {
      cloud: {
        products: {
          [this.props.productId]: {
            domain: this.state.domainTemp,
            nsRecords: false,
            timestamp: `${Date.now()}`
          }
        }
      }
    }])

    this.setState({ domain: this.state.domainTemp, setup: false, nsRecords: [] })
    this.shell.cache('settings', settings)
  }

  saveNsRecords(records) {
    const settings = merge.all([this.settings, {
      cloud: {
        products: {
          [this.props.productId]: {
            domain: this.domain,
            nsRecords: records,
            timestamp: `${Date.now()}`
          }
        }
      }
    }])

    this.shell.cache('settings', settings)
  }

  deploy() {
    this.setState({ deploying: true, progressMessage: "Getting ready to package" })
    this.shell.exec('publishProduct', { id: this.productId, domain: this.domain }, ({ status, data }) => {
      if (data && data.records) {
        this.saveNsRecords(data.records)
      }
      this.setState({ progressMessage: status, nsRecords: (data ? data.records : undefined) })
    })
    .then((data) => {
      notification.open({
        icon: <Icon type='smile' style={{ color: '#4CAF50' }} />,
        message: "Awesome! Your new site is now live!"
      })
      this.setState({ deploying: false, deployed: true, deployTimpestamp: `${Date.now()}` })
    })
    .catch((error) => {
      console.log(error.message)
      notification.open({
        icon: <Icon type='frown' style={{ color: '#e53935' }} />,
        message: "Sorry, something went wrong, try again"
      })
      this.setState({ deploying: false, deployed: false, error })
    })
  }

  renderSetupPrompt() {
    return  <div style={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        <img src={'../../../../assets/chunky-logo.gif'} style={{
          display: 'block',
          alignSelf: 'center',
          width: '200px',
          height: '200px',
          marginBottom: "30px"
        }} />
        <Typography use='headline5' tag='div' style={{ color: '#263238', textAlign: 'center' }}>
          {`Before going live, let's setup your Private Cloud`}
        </Typography>
        <Button
          onClick={this._setup}
          style={{
            color: '#ffffff',
            margin: "20px",
            backgroundColor: '#00bcd4'
          }}>
          {`Continue`}
          <ButtonIcon icon="arrow_forward" />
        </Button>
        </div>
  }

  renderDeploying() {
    return <div style={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        <Progress message={this.state.progressMessage}/>
    </div>
  }

  get productId() {
    return this.props.productId
  }

  get domain() {
    return this.state.domain || (this.productCloudSettings ? this.productCloudSettings.domain : '')
  }

  get nsRecords() {
    return this.state.nsRecords || (this.productCloudSettings ? this.productCloudSettings.nsRecords : false)
  }

  get liveUrl() {
    return `http://${this.domain}.s3-website-us-east-1.amazonaws.com`
  }

  get productCloudSettings() {
    return (this.settings.cloud && this.settings.cloud.products ? this.settings.cloud.products[this.productId] : {})
  }

  setup() {
    this.setState({ setup: true })
  }

  cancelSetup() {
    this.setState({ setup: false })
  }

  renderCancelEdit() {
    if (!this.domain) {
      return <div/>
    }

    return <Button key="cancel" onClick={this._cancelSetup} style={{
      color: '#81D4FA',
      margin: "20px"
    }}>
      Cancel
    </Button>
  }

  renderEditDomain() {
    return <div style={{ marginTop: '60px', textAlign: 'center' }}>
      <Input
        ref={(ref) => this._domainInput = ref }
        onChange={(e) => this.setState({ domainTemp: e.target.value })}
        addonBefore="http://"
        defaultValue={this.domain}
        addonAfter={<Button onClick={this._save} style={{ color: '#00bcd4', height: "20px" }}> SAVE </Button>}/>
        { this.renderCancelEdit() }
    </div>
  }

  renderNsRecords() {
    if (!this.nsRecords || this.nsRecords.length === 0) {
      return <div/>
    }

    return [<Typography key="prompt" use='headline7' tag='div' style={{
      color: '#B0BEC5',
      textAlign: 'center',
      margin: "30px 0px 10px 0px",
      borderTop: "1px #F5F5F5 solid",
      padding: '20px 0px 0px 0px'
    }}>
    <Icon type='check-circle' key="icon" style={{ marginRight: "10px", fontSize: "20px", color: '#B0BEC5' }}/>
    Your website is live but in order to see it at <strong>{ this.domain }</strong>,
    copy these <strong> NS Records </strong> below to your <strong> Domain Registrar </strong>.
    </Typography>,
    <Typography key="records" use='headline5' tag='div' style={{
      color: '#90A4AE',
      textAlign: 'center',
      padding: 0
    }}>
      <ChipSet style={{ margin: '0px' }}>
        {
          this.nsRecords.map(record => <Chip
            onClick={this._nsRecordSelected(record)}
            style={{ backgroundColor: '#F5F5F5', color: '#B0BEC5'}}
            key={record}>
            <ChipText> { record } </ChipText>
          </Chip>)
        }
      </ChipSet>
    </Typography>]
  }

  renderDomain(current) {
    if (!current || this.state.setup) {
      return this.renderEditDomain()
   }

   return <Typography use='title' tag='h2' style={{ marginTop: '10px', textAlign: 'center' }}>
     <Button key="edit" onClick={this._setup} style={{
       color: '#81D4FA',
       margin: "20px",
    }}>
     <ButtonIcon icon="create" />
       Edit domain
     </Button>
      <Button onClick={this._external} style={{
        color: '#81D4FA',
        margin: "20px"
      }}>
       <ButtonIcon icon="launch" />
        See it live
      </Button>
    </Typography>
  }

  renderAction() {
    return <Button
      key="main"
      onClick={this._deploy}
      disabled={!this.domain}
      style={{
        color: '#ffffff',
        margin: "20px",
        backgroundColor: '#00bcd4'
      }}>
      {`Publish Now`}
      <ButtonIcon icon="arrow_forward" />
    </Button>
  }

  renderSnack () {
    if (!this.state.snack) {
      return <div />
    }

    return <Snackbar
      key='alert'
      show
      message={this.state.snack}
      onHide={() => this.setState({ snack: false })} / >
  }

  render() {
    if (!this.isCloudSetup) {
      return <SetupCloud
      settings={this.props.settings}
      onDone={this._cloudSetupDone}/>
    }

    if (this.state.deploying) {
      return this.renderDeploying()
    }

    const domain = this.domain

    var title = `Choose a domain for your website`

    if (domain) {
      title = `Let's publish your website to ${domain}`
    }

    return <div style={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        <img src={'../../../../assets/chunky-logo.gif'} style={{
          display: 'block',
          alignSelf: 'center',
          width: '200px',
          height: '200px',
          marginBottom: "30px"
        }} />
        <Typography use='headline5' tag='div' style={{ color: '#263238', textAlign: 'center' }}>
          { title }
        </Typography>
        { domain && this.renderAction() }
        { this.renderDomain(domain) }
        { this.renderNsRecords() }
        { this.renderSnack() }
        </div>
  }
}
