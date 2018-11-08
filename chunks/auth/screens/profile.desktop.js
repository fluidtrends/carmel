import React from 'react'
import { Typography } from '@rmwc/typography'
import Screen from '../../../chunks/studio/screens/base.desktop'
import { Button, ButtonIcon } from '@rmwc/button'
import UserInfo from '../components/userInfo'
import { List, notification } from 'antd'
import { Card, CardActions, CardActionButtons } from '@rmwc/card'
import { Icon } from '@rmwc/icon'
import SetupCloud from '../../../chunks/studio/components/setupCloud'

export default class ProfileScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state, inProgress: false }
    this._renderProfileItem = this.renderProfileItem.bind(this)
    this._cloudSetupDone = this.cloudSetupDone.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get isSecondary () {
    return true
  }

  get screenTitle () {
    return 'Profile'
  }

  get screenIcon () {
    return 'account_circle'
  }

  get profileData () {
    if (!this.account.user.wallet) {
      return []
    }

    return [{
      id: 'name',
      icon: "account_circle",
      title: 'Full Name',
      value: this.account.user.name
    }, {
      id: 'email',
      icon: "email",
      title: 'Email Address',
      value: this.account.user.email
    }, {
      id: 'wallet',
      icon: "monetization_on",
      title: 'Carmel Tokens',
      value: `${this.account.user.wallet.carmel}`
    },
    {
      id: 'xp',
      icon: "stars",
      title: 'Experience Points',
      value: `${this.account.user.wallet.xp}`
    }, {
      id: 'id',
      icon: "verified_user",
      title: 'Carmel ID',
      value: this.account.user.uid
    },
    {
      id: 'cloud',
      icon: "cloud_upload",
      title: 'Private Cloud',
      value: this.hasCloud ? 'Using your AWS account' : 'Not setup yet',
      action: this.hasCloud ? 'Remove' : 'Setup Now'
    }]
  }

  get hasCloud() {
    return (this.props.session.settings && this.props.session.settings.cloud ? true : false)
  }

  cloudSetupDone() {
    this.refreshGlobal()
  }

  onCloudDisconnect() {
    const settings = Object.assign({}, this.props.session.settings)
    delete settings.cloud

    this.shell.cache('settings', settings)
    this.refreshGlobal()
  }

  onCloudConnect() {
    this.setState({ setupCloud: true })
  }

  onProfileItemEdit (item) {
    if (item.id === "cloud") {
      if (this.hasCloud) {
        this.onCloudDisconnect()
        return
      }

      this.onCloudConnect()
    }
  }

  renderProfileItemActions (item) {
    if (!item.action) {
      return []
    }

    return ([<Button
      onClick={() => this.onProfileItemEdit(item)}>
      {item.action}
    </Button>])
  }

  renderProfileItem (item) {
    return <List.Item actions={this.renderProfileItemActions(item)}>
      <List.Item.Meta
        avatar={<Icon icon={item.icon}/>}
        description={item.value || ''}
        title={item.title} />
    </List.Item>
  }

  renderScreenContents () {
    if (this.state.setupCloud) {
      return this.renderScreenContentsContainer(<SetupCloud
        onDone={this._cloudSetupDone}
        settings={this.props.session.settings}/>)
    }

    return this.renderScreenContentsContainer([<UserInfo
        wallet={this.account.user.wallet}
        key="top"
        redirect={this.triggerRawRedirect}
        account={this.account} />,
        <div key="list" style={{
          width: '100%',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
      <List
        key='active-list'
        style={{
          marginTop: '20px',
          textAlign: 'left',
          width: "600px",
        }}
        itemLayout='horizontal'
        dataSource={this.profileData}
        renderItem={this._renderProfileItem} />
        </div>,
      <CardActions key="actions" style={{ justifyContent: 'center', marginTop: '40px' }} key='active-actions'>
        <CardActionButtons style={{ marginLeft: '10px' }}>
          <Button
            style={{backgroundColor: '#f44336', color: '#ffffff'}}
            onClick={() => this.logout()}>
          Sign Out
          </Button>
        </CardActionButtons>
      </CardActions>])
  }
}
