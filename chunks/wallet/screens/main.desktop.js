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

  renderWalletContent () {
    const challenge = this.challenge

    if (!challenge) {
      return <div />
    }

    const { title, level, author, id } = challenge
    const price = this.calculatePrice(level)

    return <div style={{
      display: 'flex',
      padding: '30px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography use='headline5' key='active-prompt' style={{
        textAlign: 'center',
        margin: '20px',
        color: '#00bcd4'
      }}>
      To start the <strong> { title } </strong> Challenge
    </Typography>
      <Button onClick={() => this.transfer(price, author.id, id)}
        style={{
          color: '#ffffff',
          fontSize: '12px',
          backgroundColor: '#00bcd4'
        }}>
        <Icon
          icon={'verified_user'}
          style={{ marginRight: '5px' }} />
        <Typography use='overline' key='active-prompt' style={{
          textAlign: 'center'
        }}>
            Send <strong> { price.toLocaleString('en') } </strong> CARMEL
          </Typography>
      </Button>

      <Typography use='overline' key='active-footer' style={{
        textAlign: 'center'
      }}>
      to <strong> { author.name } </strong>
      </Typography>
    </div>
  }

  renderScreenContents () {
    return this.renderScreenContentsContainer(<div>
      <UserInfo
        wallet={this.account.user.wallet}
        redirect={this.triggerRawRedirect}
        account={this.account} />
      { this.renderWalletContent() }
    </div>)
  }
}
