import React from 'react'
import { Component } from 'react-dom-chunky'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Icon } from 'rmwc/Icon'
import { CardActions, CardActionButtons } from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { Steps } from 'antd'
const Step = Steps.Step

export default class UserInfoComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, verification: 0, verificationMessage: 'We sent you a Verification Email. Please check your inbox.' }
    this._verify = this.verify.bind(this)
  }

  get tokens () {
    return (this.props.wallet ? this.props.wallet.carmel : 0) + (this.props.account.user.tokens || 0)
  }

  get name () {
    return this.props.account.user.name
  }

  get xp () {
    return 0
  }

  verify () {
    const user = firebase.auth().currentUser
    if (!user) {
      return
    }

    user.sendEmailVerification().then(() => {
      console.log('email sent')
    }).catch((error) => {
      console.log(error)
    })
  }

  renderMainAction () {
    // if (this.props.account.user.emailVerified) {
    //   return <div />
    // }

    return <Typography use='subheading1' tag='h1'>
      We sent you a Verification Email. Please check your Inbox.
      <Button onClick={this._verify}>
        Resend Verification Email
      </Button>
    </Typography>
  }

  renderVerificationProgress () {
    return <div style={{ marginTop: '10px', marginBottom: '30px' }}>
      <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px' }}>
        Please verify your Carmel Account
      </Typography>
      <Steps progressDot current={this.state.verification}>
        <Step title='Step 1' description='Email Verification' />
        <Step title='Step 2' description='Twitter Verification' />
        <Step title='Step 3' description='Telegram Verification' />
      </Steps>
    </div>
  }

  renderVerification () {
    return <Typography use='caption' tag='h1' style={{
      textAlign: 'left'
    }}>
      <ChipSet>
        <Chip style={{ backgroundColor: '#ef5350' }}>
          <ChipText style={{ color: '#ffffff' }}>
              UNVERIFIED
            </ChipText>
        </Chip>
      </ChipSet>
    </Typography>
  }

  renderTokens () {
    if (this.props.skipWallet) {
      return <div style={{
        marginBottom: '20px',
        paddingBottom: '20px',
        borderBottom: '1px solid #EEEEEE'
      }} />
    }

    return <div style={{
      textAlign: 'left',
      marginBottom: '20px',
      paddingBottom: '20px',
      borderBottom: '1px solid #EEEEEE'
    }}>
      <Typography use='subheading1' tag='h1' style={{ textAlign: 'left' }}>
        <ChipSet>
          <Chip style={{ backgroundColor: '#F5F5F5' }}>
            <ChipIcon style={{ color: '#66BB6A' }} leading use={`stars`} />
            <ChipText>
              {this.tokens.toLocaleString('en')} CARMEL
                </ChipText>
          </Chip>
          <Chip style={{ backgroundColor: '#ffffff' }}>
            <ChipIcon style={{ color: '#1E88E5' }} leading use={`terrain`} />
            <ChipText style={{ color: '#1E88E5' }}>
              {this.xp.toLocaleString('en')} CARMEL XP
                </ChipText>
          </Chip>
        </ChipSet>
      </Typography>
    </div>
  }

  render () {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            paddingTop: '0px',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottom: '0px solid #EEEEEE',
            paddingBottom: '00px',
            marginBottom: '00px'
          }}>
          <Typography
            use='headline'
            tag='h1'
            style={{
              display: 'flex',
              flex: 1,
              marginBottom: '10px',
              justifyContent: 'flex-start'
            }}>
            <Icon style={{ fontSize: '50px' }} strategy='ligature'>
            account_circle
          </Icon>
          </Typography>
          <div style={{
            display: 'flex',
            flex: 10,
            paddingTop: '0px',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'left'
          }}>
            <Typography
              use='title'
              tag='h1'
              style={{
                display: 'flex',
                flex: 6,
                marginLeft: '5px',
                justifyContent: 'flex-start'
              }}>
              {this.name}
            </Typography>
          </div>
          { this.renderVerification() }
        </div>
        { this.renderTokens() }
        { this.renderVerificationProgress() }
        { this.renderMainAction() }
      </div>)
  }
}
