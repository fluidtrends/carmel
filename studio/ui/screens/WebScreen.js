import React, { Component } from "react"
import BaseScreen from './BaseScreen'
import { Spin, Modal } from 'antd'

const AWS_ROOT_URL = () => 'https://console.aws.amazon.com/'
const AWS_CONSOLE_URL = () => `${AWS_ROOT_URL()}console/home`
const AWS_NEWUSER_URL = () => `${AWS_ROOT_URL()}iam/home?#/users$new?step=review`
const AWS_SECRET_URL = () => `${AWS_ROOT_URL()}iam/home?#/users$new?step=final`
const AWS_SETUP_URL = (username) => `${AWS_NEWUSER_URL()}&accessKey&userNames=${username}&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess`

class WebScreen extends BaseScreen {

  constructor() {
    super()

    this.state = {}
    this._browserLoaded = this.browserLoaded.bind(this)
    this._setup = this.setup.bind(this)
  }

  componentDidMount() {
    this.setup()
  }

  get browserSession () {
    if (!this._browser) {
      return
    }

    const webContents = this._browser.getWebContents()

    if (!webContents) {
      return
    }

    return webContents.session
  }

  setup() {
    this.setState({ 
      setup: true, 
      ready: true,
      awsUsername: `Carmel${Date.now()}`, 
      browserUrl: AWS_CONSOLE_URL() })
  }

  done(data) {
    this.props.done && this.props.done(data)
  }

  onBrowserLogout (data) {
    const self = this
    const session = this.browserSession

    this.done(data)
    
    // session.clearStorageData({
    //     storages: ['cookies']
    //   }, (done) => {
    //     const settings = Object.assign({}, this.settings, {
    //       cloud: {
    //         provider: 'aws',
    //         summary: 'Connected to your Amazon account',
    //         username: self.state.awsUsername,
    //         accessKeyId: data.awsAccessKeyId,
    //         secretAccessKey: data.awsSecretAccessKey
    //       }
    //     })
    //     self.shell.cache('settings', settings)
    //     self.setState(Object.assign({}, { settings, browse: false }, data))
    //     self.props.onDone && self.props.onDone()
    //   })
  }

  browserLoaded (ref) {
    this._browser = ref

    if (!this._browser) {
      return
    }

    const self = this

    this._browser.addEventListener('dom-ready', () => {
      // self.browser.openDevTools()
    })

    this._browser.addEventListener('did-navigate-in-page', (page) => {
      if (page.url.startsWith(AWS_NEWUSER_URL())) {
        if (this.state.awsCreatingUser) {
          return
        }
        this._browser.executeJavaScript(`setTimeout(function() { $('.wizard-next-button').click(); }, 2000);`, false, () => {
          self.setState({ awsCreatingUser: false, awsCreatedUser: true, awsCreatingCredentials: true })
        })
        self.setState({ awsCreatingUser: true })
      } else if (page.url.startsWith(AWS_SECRET_URL())) {
        const js = `angular.element($('.hide-credential a')).triggerHandler('click'); [$('.ng-isolate-scope.access-key-id').text().trim(), $('.secret-access-key .credential').text().trim()];`
        this._browser.executeJavaScript(js, false, (credentials) => {
          if (!credentials[1]) {
            return
          }
          this.onBrowserLogout({ awsAccessKeyId: credentials[0], awsSecretAccessKey: credentials[1], awsCreatingCredentials: false, awsCreatedCredentials: true })
        })
      }
    })

    this._browser.addEventListener('did-navigate', (page) => {
      if (page.url.startsWith(AWS_CONSOLE_URL())) {
        this._browser.loadURL(AWS_SETUP_URL(this.state.awsUsername))
      }
    })
  }

  renderAutoSetup() {
    return <div>
        <webview
          ref={this._browserLoaded}
          src={this.state.browserUrl} style={{
            width: '100%',
            opacity: 0
          }} />
        <div style={{
          display: "flex",
          flex: 1, 
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          justifyContent: "center"
        }}>
          <Spin size="large"/>
        </div>
      </div>
  }

  renderContent() {
    return this.renderAutoSetup()
  }
}

export default WebScreen