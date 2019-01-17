import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { List, notification, Icon, Input, Button } from 'antd'

import UserInfo from '../components/userInfo'

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, inProgress: true, data: null, updatingUser: false }
    this._renderProfileItem = this.renderProfileItem.bind(this)
    this._onProfileItemEdit = (item) => this.onProfileItemEdit.bind(this, item)
    this._logout = this.logout.bind(this)
    this._submitUpdateUser = this.submitUpdateUser.bind(this)
  }

  componentWillMount () {
    if (!this.isLoggedIn) {
      this.triggerRedirect('/login')
    }

  }

  componentDidMount () {
    super.componentDidMount()

    this.verifyTwitterCallback()
    this.setState({profileData: this.profileData, initialData: this.profileData})
  }

  refreshWallet () {
    const userId = this.account.user.uid
    this.props.refreshWallet({ userId })
  }

  failedToRefreshWallet (error) {
    this.refreshWallet()
  }

  updateUserOk(data) {
    this.setState({updatingUser: false})
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

  updateUser () {
    const updatedData = this.state.profileData
    for(let i =0; i<updatedData.length; i++) {
      if (updatedData[i].id === this.state.editId && this.state.editValue !== updatedData[i].value) {
        updatedData[i].value = this.state.editValue
      }
    }

    this.setState({editId: null, profileData: updatedData})
  }

  submitUpdateUser() {
    this.setState({updatingUser: true})
    if(JSON.stringify(this.state.profileData) === JSON.stringify(this.state.initialData)) {
      this.setState({updatingUser: false})
      return false
    }
    const data = {}
    for (let key in this.state.initialData) {
      if (this.state.initialData[key].value !== this.state.profileData[key].value) {
        data[this.state.initialData[key].id] = this.state.profileData[key].value
      }
    }

    setTimeout(() => {
      this.props.updateUser(data)
    }, 300)
  }

  showInput (item) {
    this.setState({editId: item.id, editValue: item.value})

    setTimeout(() => {
      this.input.focus()
    }, 100);
  }

  onValueChanged (item, event) {
    const value = event.target.value
    if (item.id == 'eosAddress' && value.length > 12) {
      return
    }
    this.setState({editValue: value}) 
  }

  renderProfileItem (item) {

    const width = this.isSmallScreen? '75vw' : 500

    const description = <div style={{height: 32, padding: '5px 12px', width, overflow: 'hidden',  whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>{item.value || ''}</div>
    let value = item.value || ''
    
    if (item.id == this.state.editId) {
      value = this.state.editValue
    }

    const content = this.state.editId == item.id ? <Input
                                                      ref={(input) => { this.input = input }} 
                                                      placeholder={item.title}
                                                      value={ value }
                                                      style={{ width: '100%' }}
                                                      onChange={this.onValueChanged.bind(this, item)} 
                                                    /> : description

    const icon = this.state.editId == item.id ? 
                                      <div style={{display: 'flex'}}>
                                        <Icon className="icon" type="check" onClick={this.updateUser.bind(this)} style={{cursor: 'pointer', fontSize: 20, paddingTop: 33, paddingLeft: 20}} />
                                        <Icon className="icon" type="close" onClick={() => {this.setState({editId: null})}} style={{cursor: 'pointer', fontSize: 20, paddingTop: 33, paddingLeft: 10}} />
                                        </div>
                                        :
                                        <Icon className="icon" type="edit" onClick={this.showInput.bind(this, item)} style={{cursor: 'pointer', fontSize: 20, paddingTop: 33, paddingLeft: 20}} />

    return <List.Item actions={this.renderProfileItemActions(item)}>
      <List.Item.Meta
        title={item.title} 
        description={content}
      />
      <style jsx>{`
              div :global(.icon) {
                color: ${'#546E7A'}
              }
              div :global(.icon):hover {
                color: ${'#00bfa5'}
              }
            `}
          </style>
      {item.id != 'email' && icon}
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
        title: 'PUBLIC EOS Address',
        value: this.account.user.eosAddress
      },
      {
        id: 'bio',
        title: 'Bio',
        value: this.account.user.bio
      },
      {
        id: 'pic',
        title: 'Profile pic link',
        value: this.account.user.pic
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
      dataSource={this.state.profileData}
      renderItem={this._renderProfileItem} />,
      <CardActions style={{ justifyContent: 'center', marginTop: '20px' }} key='active-actions'>
        <CardActionButtons style={{ marginLeft: '10px', flexDirection: 'column' }}>
        <Button
            style={{ color: '#00bcd4', borderColor: '#00bcd4', margin: '20px' }}
            onClick={this._submitUpdateUser}>
              Update Profile
              {this.state.updatingUser ? <Icon type="loading" /> : null}
          </Button>
          <Button
            style={{ color: '#f44336', borderColor: '#f44336', bottom: -50 }}
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
