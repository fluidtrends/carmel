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
    this.state = { ...super.state, verification: 2 }
    this._verify = this.verify.bind(this)
    this._joinTelegram = this.joinTelegram.bind(this)
    this._followOnTwitter = this.followOnTwitter.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
    this.checkVerificationState()
  }

  checkVerificationState () {
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
      return
    }

    if (this.props.twitter && this.state.verification === 2) {
      this.setState({ verification: 3, twitterVerify: false })
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

  joinTelegram () {
    this.props.redirect('https://t.me/carmelplatform')
  }

  followOnTwitter () {
    const provider = new firebase.auth.TwitterAuthProvider()

    this.setState({ twitterLoading: true })

    const self = this
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const accessToken = result.credential.accessToken
      const tokenSecret = result.credential.secret
      self.props.twitterVerify({ tokenSecret, accessToken, userId: self.props.account.user.uid })
    }).catch(function (error) {
      notification.error({
        message: 'Twitter Verification Failed',
        description: error.message
      })
    })
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
    return this.state.verification >= 3
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

  renderTwitterAction () {
    if (this.state.twitterLoading && !this.props.twitter) {
      return <Components.Loading message='Tweeting and following on your behalf, one sec please ...' />
    }

    return <div style={{ marginTop: '10px', marginBottom: '30px' }}>
      <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px' }}>
        Sign in with Twitter to follow and tweet automatically
      </Typography>
      <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px' }}>
        <Button raised onClick={this._followOnTwitter}>
          Press To Follow & Tweet
        </Button>
      </Typography>
    </div>
  }

  renderTelegramAction () {
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
        Then join the Carmel Telegram Channel and type <strong> /verifyme </strong>
      </Typography>
      <Typography use='subheading2' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px' }}>
        <Button raised onClick={this._joinTelegram}>
        Join us on Telegram
        </Button>
      </Typography>
    </div>
  }

  renderMainAction () {
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
