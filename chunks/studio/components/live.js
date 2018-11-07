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
    this._external = this.external.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  external() {
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

  save() {

    // const settings = Object.assign({}, settings, {
    //
    // })
    this.setState({ domain: this.state.domainTemp, setup: false })
    // self.shell.cache('settings', settings)
  }

  deploy() {
    this.setState({ deploying: true, progressMessage: "Getting ready to package" })
    this.shell.exec('publishProduct', { id: this.productId, domain: this.domain }, ({ status }) => {
      this.setState({ progressMessage: status })
    })
    .then((data) => {
      notification.open({
        icon: <Icon type='smile' style={{ color: '#4CAF50' }} />,
        message: "Awesome! Your new site is now live!"
      })
      this.setState({ deploying: false, deployed: true, deployTimpestamp: `${Date.now()}` })
    })
    .catch((error) => {
      notification.open({
        icon: <Icon type='smile' style={{ color: '#4CAF50' }} />,
        message: "Sorry, something went wrong"
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
    return this.state.domain || (this.props.settings && this.props.settings.domains ? this.props.settings.domains[this.productId] : undefined)
  }

  get liveUrl() {
    return `http://www.${this.domain}.s3-website-us-east-1.amazonaws.com`
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
        onChange={(e) => this.setState({ domainTemp: e.target.value })}
        addonBefore="http://"
        defaultValue={this.domain}
        addonAfter={<Button onClick={this._save} style={{ color: '#00bcd4', height: "20px" }}> SAVE </Button>}/>
        { this.renderCancelEdit() }
    </div>
  }

  renderDomain(current) {
    if (!current || this.state.setup) {
      return this.renderEditDomain()
   }

   return <Typography use='title' tag='h2' style={{ marginTop: '60px', textAlign: 'center' }}>
     <Button key="edit" onClick={this._setup} style={{
       color: '#81D4FA',
       margin: "20px"
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
      disabled={!this.state.domain}
      style={{
        color: '#ffffff',
        margin: "20px",
        backgroundColor: '#00bcd4'
      }}>
      {`Publish Now`}
      <ButtonIcon icon="arrow_forward" />
    </Button>
  }

  render() {
    if (!this.isCloudSetup) {
      return <SetupCloud settings={this.props.settings}/>
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
        </div>
  }
}
