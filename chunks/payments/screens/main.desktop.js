import React from 'react'
import { Typography } from '@rmwc/typography'
import Screen from '../../../chunks/studio/screens/base.desktop'
import { Button, ButtonIcon } from '@rmwc/button'
import UserInfo from '../../../chunks/auth/components/userInfo'
import { notification } from 'antd'
import { Icon } from '@rmwc/icon'

export default class ProfileScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get isSecondary () {
    return true
  }

  renderScreenContents () {
    return this.renderScreenContentsContainer(<div>
      <UserInfo
        wallet={this.account.user.wallet}
        redirect={this.triggerRawRedirect}
        account={this.account} />
        {
          this.renderScreenMainMessage({
            message: 'Store coming soon'
          })
        }
    </div>)
  }
}
