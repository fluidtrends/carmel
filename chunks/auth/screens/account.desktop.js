import React from 'react'
import Screen from './account.web'
import { Components } from 'react-dom-chunky'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
import { Data } from 'react-chunky'
import Shell from '../../studio/components/shell'

const AWS_ROOT_URL = () => 'https://console.aws.amazon.com/'
const AWS_CONSOLE_URL = () => `${AWS_ROOT_URL()}console/home`
const AWS_NEWUSER_URL = () => `${AWS_ROOT_URL()}iam/home?#/users$new?step=review`
const AWS_SECRET_URL = () => `${AWS_ROOT_URL()}iam/home?#/users$new?step=final`
const AWS_SETUP_URL = (username) => `${AWS_NEWUSER_URL()}&accessKey&userNames=${username}&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess`

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
    this._back = this.back.bind(this)
    this._shell = new Shell()
    this._browserLoaded = this.browserLoaded.bind(this)
  }

  get shell () {
    return this._shell
  }

  get settings () {
    return this.state.settings || this.props.session.settings
  }

  get isCloudSetup () {
    return this.settings.cloud ? true : false
  }

  componentDidMount () {
    super.componentDidMount()
    this.checkPendingPurchase()
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

  get browser () {
    return this._browser
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

  browserLoaded (ref) {
    this._browser = ref

    if (!this.browser) {
      return
    }

    const self = this

    this.browser.addEventListener('did-navigate-in-page', (page) => {
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
      if (page.url.startsWith(AWS_CONSOLE_URL())) {
        this.browser.loadURL(AWS_SETUP_URL(this.state.awsUsername))
      }
    })
  }

  back () {
    if (this.state.browse) {
      this.setState({ browse: false })
      return
    }

    this.triggerRedirect('/workspace')
  }

  onProfileItemEdit (item) {
    switch (item.id) {
      case 'cloud':
        this.handleCloud()
        break
      default:
    }
  }

  handleCloud () {
    if (!this.isCloudSetup) {
      // Connect to AWS
      this.setState({ browse: true, awsUsername: `Carmel${Date.now()}`, browserUrl: AWS_CONSOLE_URL() })
      return
    }

    // Let's disconnect the cloud
    const settings = Object.assign({}, this.settings, { cloud: false })
    this.shell.cache('settings', settings)
    this.setState({ settings })
  }

  get profileData () {
    return [{
      id: 'email',
      title: 'Email Address',
      value: this.account.user.email
    }, {
      id: 'cloud',
      title: 'Private Cloud',
      value: this.settings.cloud ? this.settings.cloud.summary : 'Not connected',
      action: this.settings.cloud ? 'Disconnect' : 'Connect'
    }]
  }

  checkPendingPurchase () {
    Data.Cache.retrieveCachedItem('pendingPurchase')
              .then((pendingPurchase) => {
                // this.setState({ inProgress: false })
                this.triggerRedirect('/wallet')
              })
              .catch(error => {
                // this.setState({ inProgress: false })
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

  renderActiveContent () {
    if (this.state.browse) {
      return this.renderBrowser()
    }
    return super.renderActiveContent()
  }

  get formWidth () {
    return '600px'
  }

  get formPadding () {
    return '30px'
  }

  get containerStyle () {
    return {
      display: 'flex',
      flex: 1,
      height: '100vh',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  get cardStyle () {
    if (!this.state.browse || this.state.awsCreatedUser) {
      return super.cardStyle
    }

    const width = '100vw'
    const padding = '10px'
    const margin = '0px'
    const height = '90vh'

    return { width, padding, margin, height }
  }

  renderMainContentFooter () {
    if (this.state.browse && this.state.awsCreatedUser) {
      return <div />
    }

    return <div style={{
      display: 'flex',
      marginTop: '5px',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Button onClick={this._back} style={{
        color: '#81D4FA',
        backgroundColor: '#ECEFF1'
      }}>
      Back to Workspace
    </Button>

    </div>
  }

}
