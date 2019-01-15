import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { List, notification, Icon, Input } from 'antd'

import UserInfo from '../components/userInfo'

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, inProgress: true }
    this._renderProfileItem = this.renderProfileItem.bind(this)
    this._onProfileItemEdit = (item) => this.onProfileItemEdit.bind(this, item)
    this._logout = this.logout.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    this.verifyTwitterCallback()
  }

  refreshWallet () {
    const userId = this.account.user.uid
    this.props.refreshWallet({ userId })
  }

  failedToRefreshWallet (error) {
    this.refreshWallet()
  }

  refreshedWallet (wallets) {
    this.setState({ wallet: wallets[0], inProgress: false })
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
    this.refreshWallet()
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
    const description = <div style={{height: 32}}>{item.value || ''}</div>

    const content = this.state.editId == item.id ? <Input placeholder={item.title} value={item.value || ''} /> : description

    const icon = this.state.editId == item.id ? 
                                        <Icon type="close" onClick={() => {this.setState({editId: null})}} style={{cursor: 'pointer', paddingTop: 35, paddingLeft: 20}} /> : 
                                        <Icon type="edit" onClick={() => {this.setState({editId: item.id})}} style={{cursor: 'pointer', paddingTop: 35, paddingLeft: 20}} />

    return <List.Item actions={this.renderProfileItemActions(item)}>
      <List.Item.Meta
        title={item.title} 
        description={content}
      />
      {icon}
    </List.Item>
  }

  get profileData () {
    return [
      {
        id: 'email',
        title: 'Email Address',
        value: this.account.user.email
      },
      {
        id: 'name',
        title: 'Name',
        value: this.account.user.name
      },
      {
        id: 'username',
        title: 'Username',
        value: this.account.user.username
      },
      {
        id: 'eosAddress',
        title: 'EOS Address',
        value: this.account.user.eosAddress
      },
      {
        id: 'bio',
        title: 'Bio',
        value: this.account.user.bio
      },
      {
        id: 'image',
        title: 'Profile pic link',
        value: this.account.user.image
      }
    ]
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
    return false
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
      wallet={this.state.wallet}
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
    const margin = this.isSmallScreen ? '50px 0px' : '50px 0'

    return { width, padding, margin }
  }

  renderMainContent () {
    if (this.state.inProgress) {
      return (<div style={this.containerStyle}>
        <div style={this.cardStyle}>
          { this.renderUserInfo() }
          <Components.Loading message='Just a minute, please ...' />
        </div>
      </div>)
    }

    return (<div style={this.containerStyle}>
      <div style={this.cardStyle}>
        { this.renderUserInfo() }
        { this.renderActiveContent() }
      </div>
      { this.renderMainContentFooter() }
    </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
