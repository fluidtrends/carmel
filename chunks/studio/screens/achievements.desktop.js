import React from 'react'
import { Typography } from '@rmwc/typography'
import Screen from './base.desktop'
import { Button, ButtonIcon } from '@rmwc/button'
import UserInfo from '../../../chunks/auth/components/userInfo'

export default class AchivementsScreen extends Screen {
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
          message: 'No achievements yet.'
        })
      }
    </div>)
  }
}
