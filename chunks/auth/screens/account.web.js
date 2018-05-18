import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { List } from 'antd'
import { Typography } from 'rmwc/Typography'

import UserInfo from '../components/userInfo'

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._renderProfileItem = this.renderProfileItem.bind(this)
    this._onProfileItemEdit = (item) => this.onProfileItemEdit.bind(this, item)
    this._logout = this.logout.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  subscriptionArgs (subscription) {
    if (!subscription) {
      return {}
    }

    return { userId: this.account.user.uid }
  }

  getAccountSuccess (account) {
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
      onClick={this._onItemEdit(item)}>
      { item.action }
    </Button>])
  }

  renderProfileItem (item) {
    return <List.Item actions={this.renderProfileItemActions(item)}>
      <List.Item.Meta
        description={item.value}
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

  renderMainContent () {
    const width = this.props.isSmallScreen ? '95vw' : '600px'
    const padding = this.props.isSmallScreen ? '2px' : '30px'

    return (<div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Card style={{ width, margin: '10px', padding }}>
        <UserInfo
          skipWallet
          account={this.account} />
        <List
          style={{ marginTop: '20px' }}
          itemLayout='horizontal'
          dataSource={this.profileData}
          renderItem={this._renderProfileItem} />
        <CardActions style={{ justifyContent: 'center', marginTop: '20px' }}>
          <CardActionButtons style={{ marginLeft: '10px' }}>
            <Button
              onClick={this._logout}>
                Sign Out
              </Button>
          </CardActionButtons>
        </CardActions>
      </Card>
      <Typography use='caption' tag='h1' style={{ color: '#90A4AE', margin: '20px' }}>
        * Please verify your Carmel Account before July 16, 2018 in order to redeem your claimed tokens.
      </Typography>
    </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
