import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import { Icon } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
import SetupCloud from './setupCloud'
import Shell from './shell'
import Progress from './progress'

export default class Live extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._shell = new Shell()
    this._deploy = this.deploy.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
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

  deploy() {
    this.setState({ deploying: true, progressMessage: "Getting ready to package" })
    this.shell.exec('publishProduct', { id: this.productId, domain: this.domain }, ({ status }) => {
      this.setState({ progressMessage: status })
    })
    .then((data) => {
      this.setState({ deploying: false, deployed: true, deployTimpestamp: `${Date.now()}` })
    })
    .catch((error) => {
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
    return "idancali.com"
  }

  get liveUrl() {
    const domain =
    return `http://www.${this.domain}.s3-website-us-east-1.amazonaws.com`
  }

  render() {
    if (!this.isCloudSetup) {
      return <SetupCloud settings={this.props.settings}/>
    }

    if (this.state.deploying) {
      return this.renderDeploying()
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
          {`Let's publish your website for the whole world to see`}
        </Typography>
        <Button
          onClick={this._deploy}
          style={{
            color: '#ffffff',
            margin: "20px",
            backgroundColor: '#00bcd4'
          }}>
          {`Publish Now`}
          <ButtonIcon icon="arrow_forward" />
        </Button>
        </div>
  }
}
