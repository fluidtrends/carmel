import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { List, notification } from 'antd'

import UserInfo from '../components/userInfo'

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, inProgress: false }
    this._renderProfileItem = this.renderProfileItem.bind(this)
    this._onProfileItemEdit = (item) => this.onProfileItemEdit.bind(this, item)
    this._logout = this.logout.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    this.verifyTwitterCallback()
  }

  verifyTwitterCallback () {
    if (!this.props.location.search) {
      return
    }

    var twitterOAuth = '{ "' + this.props.location.search.substring(1).replace(/&/g, '", "').replace(/=/g, '": "') + '"}'
    twitterOAuth = JSON.parse(twitterOAuth)

    if (!twitterOAuth.oauth_verifier || !twitterOAuth.oauth_token) {
      return
    }

    this.setState({ twitterOAuth })
    setTimeout(() => {
      this.props.twitterVerify({ oauthTokens: twitterOAuth })
    }, 300)
    this.props.history.push(this.props.location.pathname)
  }

  subscriptionArgs (subscription) {
    if (!subscription || !this.account) {
      return {}
    }

    return { userId: this.account.user.uid }
  }

  getAccountSuccess (acc) {
    const account = Object.assign({}, this.account.user, acc)
    this.login(account)
  }

  getProfileSuccess (profile) {
    const account = Object.assign({}, this.account.user, profile[0])
    this.login(account)
  }

  onProfileItemEdit (item) {
    console.log(item)
  }

  renderProfileItemActions (item) {
    if (!item.action) {
      return []
    }

    return ([<Button
      onClick={this._onProfileItemEdit(item)}>
      {item.action}
    </Button>])
  }

  renderProfileItem (item) {
    return <List.Item actions={this.renderProfileItemActions(item)}>
      <List.Item.Meta
        description={item.value || 'Not verified yet'}
        title={item.title} />
    </List.Item>
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
    }]
  }

  twitterOk (twitter) {
    notification.success({
      message: 'Twitter Verification Successful',
      description: 'Thanks for verifying your Twitter identity'
    })

    this.setState({ twitter })
  }

  twitterError (error) {
    this.setState({ twitterError: error.message })
  }

  telegramOk (telegram) {
    notification.success({
      message: 'Telegram Verification Pending',
      description: 'Complete verification coming soon'
    })

    this.setState({ telegram })
  }

  telegramError (error) {
    this.setState({ telegramError: error.message })
  }

  twitterAuthOk (twitter) {
    const authUrl = `https://api.twitter.com/oauth/authenticate?oauth_token=${twitter.data.token.oauth_token}`
    window && window.location.replace(authUrl)
  }

  get twitterUrl () {
    return `${this.restUrl}auth/twitter`
  }

  renderMainContentFooter () {
    return <div />
  }

  get skipWallet () {
    return true
  }

  get containerStyle () {
    return {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  get formWidth () {
    return this.isSmallScreen ? '95vw' : '600px'
  }

  get formPadding () {
    return this.isSmallScreen ? '10px' : '30px'
  }

  renderUserInfo () {
    return <UserInfo
      skipWallet={this.skipWallet}
      twitterOAuth={this.state.twitterOAuth}
      twitterUrl={this.twitterUrl}
      twitter={this.state.twitter}
      twitterError={this.state.twitterError}
      twitterVerify={this.props.twitterVerify}
      telegramVerify={this.props.telegramVerify}
      twitterAuth={this.props.twitterAuth}
      redirect={this.triggerRawRedirect}
      account={this.account} />
  }

  renderActiveContent () {
    return [<List
      key='active-list'
      style={{ marginTop: '20px' }}
      itemLayout='horizontal'
      dataSource={this.profileData}
      renderItem={this._renderProfileItem} />,
      <CardActions style={{ justifyContent: 'center', marginTop: '20px' }} key='active-actions'>
        <CardActionButtons style={{ marginLeft: '10px' }}>
          <Button
            style={{backgroundColor: '#f44336', color: '#ffffff'}}
            onClick={this._logout}>
          Sign Out
          </Button>
        </CardActionButtons>
      </CardActions>]
  }

  get cardStyle () {
    const width = this.formWidth
    const padding = this.formPadding
    const margin = this.isSmallScreen ? '50px 0px' : '0'

    return { width, padding, margin }
  }

  renderMainContent () {
    if (this.state.inProgress) {
      return (<div style={this.containerStyle}>
        <Card style={this.cardStyle}>
          { this.renderUserInfo() }
          <Components.Loading message='Just a minute, please ...' />
        </Card>
      </div>)
    }

    return (<div style={this.containerStyle}>
      <Card style={this.cardStyle}>
        { this.renderUserInfo() }
        { this.renderActiveContent() }
      </Card>
      { this.renderMainContentFooter() }
    </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
