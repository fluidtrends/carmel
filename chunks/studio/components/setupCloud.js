import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import { Icon } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
import Shell from './shell'
import { Data } from 'react-chunky'

const AWS_ROOT_URL = () => 'https://console.aws.amazon.com/'
const AWS_CONSOLE_URL = () => `${AWS_ROOT_URL()}console/home`
const AWS_NEWUSER_URL = () => `${AWS_ROOT_URL()}iam/home?#/users$new?step=review`
const AWS_SECRET_URL = () => `${AWS_ROOT_URL()}iam/home?#/users$new?step=final`
const AWS_SETUP_URL = (username) => `${AWS_NEWUSER_URL()}&accessKey&userNames=${username}&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess`

export default class SetupCloud extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._shell = new Shell()
    this._browserLoaded = this.browserLoaded.bind(this)
    this._setup = this.setup.bind(this)
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

  get browser () {
    return this._browser
  }

  get browserSession () {
    if (!this.browser) {
      return
    }

    const webContents = this.browser.getWebContents()

    if (!webContents) {
      return
    }

    return webContents.session
  }

  setup() {
    this.setState({ setup: true, awsUsername: `Carmel${Date.now()}`, browserUrl: AWS_CONSOLE_URL() })
  }

  onBrowserLogout (data) {
  const self = this
  const session = this.browserSession

  session.clearStorageData({
      storages: ['cookies']
    }, (done) => {
      const settings = Object.assign({}, this.settings, {
        cloud: {
          provider: 'aws',
          summary: 'Connected to your Amazon account',
          username: self.state.awsUsername,
          accessKeyId: data.awsAccessKeyId,
          secretAccessKey: data.awsSecretAccessKey
        }
      })
      self.shell.cache('settings', settings)
      self.setState(Object.assign({}, { settings, browse: false }, data))
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


  browserLoaded (ref) {
    this._browser = ref

    if (!this.browser) {
      return
    }

    const self = this

    this.browser.addEventListener('dom-ready', () => {
      self.browser.openDevTools()
    })

    this.browser.addEventListener('did-navigate-in-page', (page) => {
      console.log(page.url)
      if (page.url.startsWith(AWS_NEWUSER_URL())) {
        if (this.state.awsCreatingUser) {
          return
        }
        this.browser.executeJavaScript(`setTimeout(function() { $('.wizard-next-button').click(); }, 2000);`, false, () => {
          self.setState({ awsCreatingUser: false, awsCreatedUser: true, awsCreatingCredentials: true })
        })
        self.setState({ awsCreatingUser: true })
      } else if (page.url.startsWith(AWS_SECRET_URL())) {
        const js = `angular.element($('.hide-credential a')).triggerHandler('click'); [$('.ng-isolate-scope.access-key-id').text().trim(), $('.secret-access-key .credential').text().trim()];`
        this.browser.executeJavaScript(js, false, (credentials) => {
          if (!credentials[1]) {
            return
          }
          this.onBrowserLogout({ awsAccessKeyId: credentials[0], awsSecretAccessKey: credentials[1], awsCreatingCredentials: false, awsCreatedCredentials: true })
        })
      }
    })

    this.browser.addEventListener('did-navigate', (page) => {
      console.log(page.url)
      if (page.url.startsWith(AWS_CONSOLE_URL())) {
        this.browser.loadURL(AWS_SETUP_URL(this.state.awsUsername))
      }
    })
  }

  renderBrowser () {
    const mask = <div style={{
      backgroundColor: '#ffffff',
      width: '100%',
      height: '100%'
    }}>
      <Components.Loading message='Just a minute, please ...' />
    </div>

    return [<webview
      ref={this._browserLoaded}
      src={this.state.browserUrl} style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        opacity: this.state.awsCreatedUser ? 0 : 1.0,
        flex: 1
      }} />, this.state.awsCreatedUser && mask]
  }

  render() {
    if (!this.state.setup) {
      return this.renderSetupPrompt()
    }

    return  this.renderBrowser()
  }
}
