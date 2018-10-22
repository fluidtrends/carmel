import React from 'react'
import { Typography } from '@rmwc/typography'
import Screen from '../../../chunks/studio/screens/base.desktop'
import { Button, ButtonIcon } from '@rmwc/button'
import UserInfo from '../components/userInfo'
import { List, notification } from 'antd'
import { Card, CardActions, CardActionButtons } from '@rmwc/card'

export default class ProfileScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state, inProgress: false }
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
    return [{
      id: 'name',
      title: 'Full Name',
      value: this.account.user.name
    }, {
      id: 'email',
      title: 'Email Address',
      value: this.account.user.email
    },
    {
      id: 'wallet',
      title: 'Carmel Tokens',
      value: `${this.account.user.wallet.carmel}`
    },
    {
      id: 'xp',
      title: 'Experience Points',
      value: `${this.account.user.wallet.xp}`
    }]
  }

  onProfileItemEdit (item) {
    console.log(item)
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
    return <List.Item actions={() => this.renderProfileItemActions(item)}>
      <List.Item.Meta
        description={item.value || 'Not verified yet'}
        title={item.title} />
    </List.Item>
  }

  renderScreenContents () {
    return this.renderScreenContentsContainer(<div>
      <UserInfo
        wallet={this.account.user.wallet}
        redirect={this.triggerRawRedirect}
        account={this.account} />
      <List
        key='active-list'
        style={{ marginTop: '20px', textAlign: 'left', padding: '0px 10px 10px 10px' }}
        itemLayout='horizontal'
        dataSource={this.profileData}
        renderItem={this.renderProfileItem} />
      <CardActions style={{ justifyContent: 'center', marginTop: '20px' }} key='active-actions'>
        <CardActionButtons style={{ marginLeft: '10px' }}>
          <Button
            style={{backgroundColor: '#f44336', color: '#ffffff'}}
            onClick={() => this.logout()}>
          Sign Out
          </Button>
        </CardActionButtons>
      </CardActions>
    </div>)
  }
}
