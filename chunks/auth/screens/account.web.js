import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Data } from 'react-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { List, notification, Icon, Input, Button, Select } from 'antd'

import UserInfo from '../components/userInfo'

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, inProgress: true, data: null, updatingUser: false }
    this._renderProfileItem = this.renderProfileItem.bind(this)
    this._onProfileItemEdit = (item) => this.onProfileItemEdit.bind(this, item)
    this._logout = this.logout.bind(this)
    this._submitUpdateUser = this.submitUpdateUser.bind(this)
    this._dataChanged = this.dataChanged.bind(this)
  }

  componentWillMount () {
    if (!this.isLoggedIn) {
      this.triggerRedirect('/login')
      return
    }

    Data.Cache.retrieveCachedItem("guestSession")
              .then((session) => Data.Cache.clearCachedItem("guestSession")
                .then(() => {
                  if (!session.workspace) {
                    return
                  }
                  Data.Cache.cacheItem("workspace", session.workspace)
                      .then(() => this.triggerRedirect('/me/workspace'))
              }))
  }

  componentWillUnmount() {
    window.ScatterJS = null
  }

  componentDidMount () {
    super.componentDidMount()

    this.setState({profileData: this.profileData, initialData: this.profileData})
  }

  refreshWallet () {
    const userId = this.account.user.uid
    this.props.refreshWallet({ userId })
  }

  failedToRefreshWallet (error) {
  }

  updateUserOk(data) {
    console.log(data)
    this.setState({updatingUser: false, initialData: this.profileData, profileData: this.profileData})
  }

  refreshedWallet (wallets) {
    this.setState({ wallet: wallets[0], inProgress: false })
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

    if (this.state.editId == 'eosAddress' && this.state.editValue.length !== 12) {
      this.setState({error: 'EOS username has to be 12 characters long!'})
      return
    }

    for(let i =0; i<updatedData.length; i++) {
      if (updatedData[i].id === this.state.editId && this.state.editValue !== updatedData[i].value) {
        updatedData[i].value = this.state.editValue
      }
    }
    this.setState({editId: null, profileData: updatedData, error: null})
  }

  dataChanged () {
    return JSON.stringify(this.state.profileData) === JSON.stringify(this.state.initialData)
  }

  submitUpdateUser() {

    console.log("SUBMIT!!!")

    this.setState({updatingUser: true})
    
    if( this._dataChanged() ) {
      this.setState({updatingUser: false})
      return false
    }
    const data = {}
    for (let key in this.state.initialData) {
      if (this.state.initialData[key].value !== this.state.profileData[key].value) {
        data[this.state.initialData[key].id] = this.state.profileData[key].value
      }
    }

    data['userData'] = true

    console.log(data)

    setTimeout(() => {
      this.props.updateUser(data)
    }, 300)

  }

  showInput (item) {
    this.setState({editId: item.id, editValue: item.value})

    if (item.id === 'guild') return
    setTimeout(() => {
      this.input.focus()
    }, 100);
  }

  onValueChanged (item, event) {
    const value = item.id === 'guild' ? event : event.target.value

    if (item.id == 'eosAddress' && value.length > 12) {
      return
    }
    this.setState({editValue: value})
  }

  renderProfileItem (item) {
    const width = this.isSmallScreen? '75vw' : 500
    const { Option } = Select

    const description = <div style={{ height: 32, padding: '5px 12px', width, overflow: 'hidden',  whiteSpace: 'nowrap', textOverflow: 'ellipsis', textTransform: item.id === 'guild' ? 'capitalize' : '' }}>{item.value || ''}</div>
    let value = item.value || ''

    if (item.id == this.state.editId) {
      value = this.state.editValue
    }

    const content = this.state.editId == item.id ?
      item.id === 'guild' ?
        <Select
          defaultValue={value}
          style={{ width: '100%' }}
          placeholder="Select a guild"
          onChange={this.onValueChanged.bind(this, item)}
        >
          <Option value="learner">Learner</Option>
          <Option value="developer">Developer</Option>
          <Option value="entrepreneur">Entrepreneur</Option>
          <Option value="teacher">Teacher</Option>
          <Option value="manager">Manager</Option>
          <Option value="recruiter">Recruiter</Option>
        </Select>
      :
        <Input
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
        id: 'guild',
        title: 'Guild',
        value: this.account.user.guild
      },
      {
        id: 'eosAddress',
        title: 'EOS username',
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

  renderWarning() {
    return !this._dataChanged() && <div>
      <p style={{color: '#f44336', fontSize: '16px'}}>
        ⚠️ You have unsaved data. Click the "Update profile" button below ⬇️ to save your changes.
      </p>
    </div>
  }

  renderActiveContent () {

    const editColor = !this._dataChanged() ? '#00bcd4' : '#546E7A'

    return [this.renderWarning(),
      <List
      key='active-list'
      style={{ marginTop: '20px' }}
      itemLayout='horizontal'
      dataSource={this.state.profileData}
      renderItem={this._renderProfileItem} />,
      <CardActions style={{ justifyContent: 'center', marginTop: '20px' }} key='active-actions'>
        <CardActionButtons style={{ marginLeft: '10px', flexDirection: 'column' }}>
        <Button
            style={{ color: editColor, borderColor: editColor, margin: '20px' }}
            className={'flashing-btn'}
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
          <Components.Loading />
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
