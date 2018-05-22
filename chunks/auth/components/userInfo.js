import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Icon } from 'rmwc/Icon'
import { Button } from 'rmwc/Button'
import { notification, Steps, Tooltip, Form, Input } from 'antd'

const Step = Steps.Step
const FormItem = Form.Item

export default class UserInfoComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, verification: 1 }
    this._verify = this.verify.bind(this)
    this._verifyAccount = this.verifyAccount.bind(this)
    this._joinTelegram = this.joinTelegram.bind(this)
    this._onTwitterError = this.onTwitterError.bind(this)
    this._onTwitterSuccess = this.onTwitterSuccess.bind(this)
    this._verifyTwitter = this.verifyTwitter.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    this.checkVerificationState()
  }

  verifyAccount () {
    this.props.onVerifyAccount && this.props.onVerifyAccount()
  }

  checkVerificationState () {
    if (this.props.account.user.twitterUsername) {
      this.setState({ verification: 3, twitterLoading: false })
      return
    }

    const user = firebase.auth().currentUser

    if (!user) {
      firebase.auth().onAuthStateChanged((u) => {
        if (u && u.emailVerified && this.state.verification === 1) {
          this.setState({ verification: 2 })
        }
      })
      return
    }

    if (this.isEmailVerified && this.state.verification === 1) {
      this.setState({ verification: 2 })
    }
  }

  get tokens () {
    return (this.props.wallet ? this.props.wallet.carmel : 0)
  }

  get name () {
    return this.props.account.user.name
  }

  get claimed () {
    return (this.props.claimed || 0)
  }

  verifyTwitter () {
    this.setState({ twitterLoading: true })
    this.props.twitterAuth()
  }

  joinTelegram () {
    if (!this.state.telegramUsername) {
      notification.error({
        message: 'Telegram Username Required',
        description: 'Please enter your Telegram username.'
      })
      return
    }

    setTimeout(() => {
      this.props.telegramVerify({ username: this.state.telegramUsername })
    }, 300)

    this.props.redirect('https://t.me/carmelplatform')
  }

  verify () {
    const user = firebase.auth().currentUser

    if (!user) {
      return
    }

    user.sendEmailVerification().then(() => {
      this.notifyEmailSent()
    }).catch((error) => {
      this.notifyEmailSent(error)
    })
  }

  get isVerified () {
    return this.state.verification > 3
  }

  get isEmailVerified () {
    return this.props.account.user.emailVerified
  }

  notifyEmailSent (error) {
    if (error) {
      notification.error({
        message: 'Verification Email Was Not Sent',
        description: 'Please try resending the verification email again.'
      })

      return
    }

    notification.success({
      message: 'Verification Email Sent',
      description: 'Please check your email for the verification link.'
    })
  }

  onTwitterSuccess (data) {
    console.log(data)
  }

  onTwitterError (data) {
    console.log(data)
  }

  renderTwitterAction () {
    if ((this.state.twitterLoading && !this.props.twitter) || this.props.twitterOAuth) {
      const message = 'Verifying your Twitter Account ... '
      return <Components.Loading message={message} />
    }

    return <div style={{ marginTop: '10px', marginBottom: '30px' }}>
      <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px' }}>
        Sign in to Twitter to automatically follow us and send a verification tweet
      </Typography>
      <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px' }}>
        <Button raised onClick={this._verifyTwitter}>
          Verify Your Twitter Account
        </Button>
      </Typography>
    </div>
  }

  renderTelegramAction () {
    if (this.props.account.user.telegramUsername) {
      return <div style={{ marginTop: '10px', marginBottom: '30px' }}>
        <Typography use='caption' tag='h1' style={{ color: '#90A4AE', marginBottom: '10px' }}>
        * The complete Telegram verification process is coming soon.
        </Typography>
      </div>
    }

    return <div style={{ marginTop: '10px', marginBottom: '30px' }}>
      <FormItem style={{}}>
        <Input
          style={{ height: '48px' }}
          value={this.state.telegramUsername}
          onChange={val => this.setState({ telegramUsername: val.target.value, error: '' })}
          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={'Enter your Telegram username'} />
      </FormItem>
      <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px' }}>
        <Button raised onClick={this._joinTelegram}>
        Verify Your Telegram Account
        </Button>
      </Typography>
      <Typography use='caption' tag='h1' style={{ color: '#90A4AE', marginBottom: '10px' }}>
      * The complete Telegram verification process is coming soon.
      </Typography>
    </div>
  }

  renderMainAction () {
    if (!this.props.skipWallet) {
      if (this.isVerified) {
        return <div />
      }

      return <div>
        <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE' }}>
          <Button raised onClick={this._verifyAccount} style={{ marginTop: '15px' }}>
              Verify Your Account
          </Button>
        </Typography>
      </div>
    }

    switch (this.state.verification) {
      case 3:
        return this.renderTelegramAction()
      case 2:
        return this.renderTwitterAction()
      default:
        return <div>
          <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE' }}>
          Please check your email for the verification link
        </Typography>
          <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE' }}>
            <Button raised onClick={this._verify}>
          Resend Verification Email
        </Button>
          </Typography>
        </div>
    }
  }

  renderVerificationProgress () {
    if (!this.props.skipWallet) {
      return <div />
    }

    return <div style={{ marginTop: '10px', marginBottom: '30px' }}>
      <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px' }}>
        Please verify your Carmel Account
      </Typography>
      <Steps progressDot current={this.state.verification - 1}>
        <Step title='Step 1' description='Email Verification' />
        <Step title='Step 2' description='Twitter Verification' />
        <Step title='Step 3' description='Telegram Verification' />
      </Steps>
    </div>
  }

  renderVerification () {
    const title = (this.isVerified ? 'VERIFIED' : 'UNVERIFIED')
    const color = (this.isVerified ? '#43A047' : '#ef5350')
    const icon = (this.isVerified ? 'check_circle' : 'remove_circle')

    return <Typography use='caption' tag='h1' style={{
      textAlign: 'left'
    }}>
      <ChipSet>
        <Chip style={{ backgroundColor: '#ffffff', border: `2px solid ${color}` }}>
          <ChipText style={{ color }}>
            <strong> { title } </strong>
          </ChipText>
          <ChipIcon style={{ color, marginLeft: '10px' }} use={icon} />
        </Chip>
      </ChipSet>
    </Typography>
  }

  renderClaimed () {
    if (this.claimed === 0) {
      return <div />
    }

    return <Tooltip placement='rightTop' title={'To verify your claim, please verify your account.'}>
      <Chip style={{ backgroundColor: '#ffffff', border: '1px solid #ef5350', marginLeft: '10px' }}>
        <ChipIcon style={{ color: '#ef5350' }} leading use={`report`} />
        <ChipText style={{ color: '#ef5350' }}>
          <strong> {this.claimed.toLocaleString('en')} CARMEL </strong> (Unverified Claim)
        </ChipText>
      </Chip>
      <ChipIcon style={{ color: '#B0BEC5', marginLeft: '5px', marginTop: '-20px' }} use={`help`} />
    </Tooltip>
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
          <Chip style={{ backgroundColor: '#43A047' }}>
            <ChipIcon style={{ color: '#ffffff', marginRight: '5px' }} leading use={`check_circle`} />
            <ChipText style={{ color: '#ffffff' }}>
              <strong> {this.tokens.toLocaleString('en')} CARMEL </strong>
            </ChipText>
          </Chip>
          { this.renderClaimed() }
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
