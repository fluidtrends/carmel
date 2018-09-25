import React from 'react'
import Screen from './account.web'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
import { Data } from 'react-chunky'
import Shell from '../../studio/components/shell'

const AWS_GUEST_URL = 'https://aws.amazon.com/console'
const AWS_CONSOLE_URL = 'https://console.aws.amazon.com/console/home'
const AWS_LOGOUT_URL = 'https://console.aws.amazon.com/console/logout!doLogout'

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state, inProgress: false }
    this._back = this.back.bind(this)
    this._shell = new Shell()
    this._loaded = this.loaded.bind(this)
  }

  get shell () {
    return this._shell
  }

  get settings () {
    return this.state.settings || this.props.session.settings
  }

  componentDidMount () {
    super.componentDidMount()
    console.log(this.settings)
    this.refreshWallet()
  }

  loaded (ref) {
    this._webview = ref
    if (!this._webview) {
      return
    }

    this._webview.addEventListener('did-navigate', (page) => {
      console.log(page.url)
      if (page.url.startsWith(`${AWS_CONSOLE_URL}?region=`)) {
        const settings = Object.assign({}, this.settings, {
          cloud: {
            service: 'aws',
            summary: 'Using Amazon Web Services'
          }
        })
        this.shell.cache('settings', settings)
        this.setState({ settings })
      } else if (page.url.startsWith(AWS_GUEST_URL)) {
        const settings = Object.assign({}, this.settings, {
          cloud: false
        })
        this.shell.cache('settings', settings)
        this.setState({ settings, browse: false })
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

  refreshWallet () {
    const userId = this.account.user.uid
    this.props.getWallet({ userId })
  }

  failedToGetWallet (error) {
    console.log(error)
    // this.refreshWallet()
  }

  gotWallet (wallets) {
    console.log(wallets)
    // this.setState({ wallet: wallets[0] })
    // this.checkPendingPurchase()
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
    this.setState({ browse: true, browserUrl: AWS_CONSOLE_URL })
  }

  get profileData () {
    return [{
      id: 'name',
      title: 'Full Name',
      value: this.account.user.name
    }, {
      id: 'email',
      title: 'Email Address',
      value: this.account.user.email
    }, {
      id: 'cloud',
      title: 'Private Cloud',
      value: this.settings.cloud ? this.settings.cloud.summary : 'Not available',
      action: this.settings.cloud ? 'Cloud Console' : 'Setup cloud'
    }]
  }

  checkPendingPurchase () {
    Data.Cache.retrieveCachedItem('pendingPurchase')
              .then((pendingPurchase) => {
                this.setState({ inProgress: false })
                this.triggerRedirect('/wallet')
              })
              .catch(error => {
                console.log(error)
                this.setState({ inProgress: false })
              })
  }

  renderBrowser () {
    return <webview
      ref={this._loaded}
      src={this.state.browserUrl} style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1
      }} />
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
    if (!this.state.browse) {
      return super.cardStyle
    }

    const width = '100vw'
    const padding = '10px'
    const margin = '0px'
    const height = '90vh'

    return { width, padding, margin, height }
  }

  renderMainContentFooter () {
    return <div style={{
      display: 'flex',
      marginTop: '5px',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Button onClick={this._back}>
        <ButtonIcon icon={'arrow_back'} />
        { this.state.browse ? 'Cancel' : 'Back to Workspace' }
      </Button>
    </div>
  }

}
