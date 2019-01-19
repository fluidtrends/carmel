  import React from 'react'
  import { Component } from 'react-dom-chunky'
  import { Typography } from '@rmwc/typography'
  import { Chip, ChipText, ChipIcon, ChipSet } from '@rmwc/chip'
  import { Button } from '@rmwc/button'
  import { notification, Tooltip } from 'antd'
  import Meta from './meta'

  const ReservedMessage = `Congrats on your reserved CARMEL tokens! To transfer them to your Carmel Wallet, please complete the claiming process below.`

  export default class UserInfoComponent extends Component {
    constructor (props) {
      super(props)
      this.state = { ...super.state }
      this._verify = this.verify.bind(this)
    }

    componentDidMount () {
      super.componentDidMount()

      this.checkVerificationState()
    }

    checkVerificationState () {
      const user = firebase.auth().currentUser

      if (user && user.emailVerified) {
        this.setState({ emailVerified: true })
        return
      }

      firebase.auth().onAuthStateChanged((u) => {
        if (u && u.emailVerified) {
          this.setState({ emailVerified: true })
        }
      })
    }

    get tokens () {
      return (this.props.wallet ? (this.props.wallet.carmel || 0) : 0)
    }

    get name () {
      return this.props.account.user.name
    }

    get claimed () {
      return (this.props.claimed || 0)
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
      return this.state.emailVerified
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

    renderMainAction () {
      if (this.isVerified) {
        return <div />
      }

      return <div>
        <Typography use='subheading2' tag='h2' style={{ color: '#90A4AE' }}>
          Please check your email for the verification link
        </Typography>
        <Typography use='subheading2' tag='h2' style={{ color: '#90A4AE' }}>
          <Button onClick={this._verify}>
          Resend Verification Email
        </Button>
        </Typography>
      </div>
    }

    renderVerification () {
      const title = (this.isVerified ? 'Verified Email' : 'Unverified Email')
      const color = (this.isVerified ? '#006A4E' : '#ef5350')
      const icon = (this.isVerified ? 'check_circle' : 'remove_circle')

      return <Typography use='caption' tag='h2' style={{
        textAlign: 'left'
      }}>
        <ChipSet>
          <Chip style={{ backgroundColor: '#ffffff', border: `2px solid ${color}` }}>
            <ChipText style={{ color }}>
              <strong> { title } </strong>
            </ChipText>
            <ChipIcon style={{ color, marginLeft: '10px' }} icon={icon} />
          </Chip>
        </ChipSet>
      </Typography>
    }

    renderClaimed () {
      if (this.claimed === 0) {
        return <div />
      }

      return <Tooltip placement='rightTop' title={ReservedMessage}>
        <Chip style={{ backgroundColor: '#ffffff', border: '1px solid #FFA000', marginLeft: '10px' }}>
          <ChipText style={{ color: '#FFA000' }}>
            <strong> {this.claimed.toLocaleString('en')} CARMEL </strong> (RESERVED)
        </ChipText>
        </Chip>
      </Tooltip>
    }

    renderLiveTokens () {
      if (!this.props.tokens || !this.props.tokens.carmel) {
        return <div/>
      }

      return <div style={{
        textAlign: 'left',
        marginBottom: '20px',
        paddingBottom: '20px'
      }}>
        <Typography use='subheading1' tag='h2' style={{ textAlign: 'left' }}>
          <ChipSet>
            <Chip style={{ backgroundColor: (this.tokens > 0 ? '#006A4E' : '#CFD8DC'), marginLeft: 0 }}>
              <ChipText style={{ color: (this.tokens > 0 ? '#ffffff' : '#B0BEC5') }}>
                <strong> {this.props.tokens.carmel.toLocaleString('en')} </strong>
              </ChipText>
            </Chip>
            { this.renderClaimed() }
          </ChipSet>
        </Typography>
      </div>
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
        paddingBottom: '20px'
      }}>
        <Typography use='subheading1' tag='h2' style={{ textAlign: 'left' }}>
          <ChipSet>
            <Chip style={{ backgroundColor: (this.tokens > 0 ? '#607D8B' : '#CFD8DC'), marginLeft: 0 }}>
              <ChipText style={{ color: (this.tokens > 0 ? '#ffffff' : '#B0BEC5') }}>
                <strong> {this.tokens.toLocaleString('en')} unclaimed </strong>
              </ChipText>
            </Chip>
          </ChipSet>
        </Typography>
      </div>
    }

    render () {

      const user = this.props.account.user

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

            <div style={{
              display: 'flex',
              flex: 10,
              paddingTop: '0px',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'left'
            }}>
             <Meta user={user} />
            </div>
          </div>
          <div style={{display: 'flex'}}>
            { this.renderLiveTokens() }
            { this.renderTokens() }
            { this.renderVerification() }
          </div>
          { this.renderMainAction() }
        </div>)
    }
}
