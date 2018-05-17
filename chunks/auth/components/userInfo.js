import React from 'react'
import { Component } from 'react-dom-chunky'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Icon } from 'rmwc/Icon'
import { CardActions, CardActionButtons } from 'rmwc/Card'
import { Button } from 'rmwc/Button'

export default class UserInfoComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
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
    if (this.props.account.user.emailVerified) {
      return <div />
    }
    return <Typography use='subheading1' tag='h1'>
      <Button onClick={this._verify}>
        Resend Verification Email
      </Button>
    </Typography>
  }

  renderVerification () {
    if (!this.props.account.user.emailVerified) {
      return <Typography use='caption' tag='h1' style={{
        textAlign: 'left'
      }}>
        <ChipSet>
          <Chip style={{ backgroundColor: '#F5F5F5' }}>
            <ChipIcon style={{ color: '#e53935' }} leading use={`info`} />
            <ChipText>
              Not Verified
            </ChipText>
          </Chip>
        </ChipSet>
      </Typography>
    }

    return <Typography use='caption' tag='h1' style={{
      textAlign: 'left'}}>
      <ChipSet>
        <Chip style={{ backgroundColor: '#F5F5F5' }}>
          <ChipIcon style={{ color: '#66BB6A' }} leading use={`done`} />
          <ChipText>
            Verified
            </ChipText>
        </Chip>
      </ChipSet>
    </Typography>
  }

  renderTokens () {
    if (this.props.skipWallet) {
      return <div />
    }

    return <Typography use='subheading1' tag='h1'>
      <ChipSet>
        <Chip style={{ backgroundColor: '#F5F5F5' }}>
          <ChipIcon style={{ color: '#66BB6A' }} leading use={`stars`} />
          <ChipText>
            {this.tokens.toLocaleString('en')} CARMEL
            </ChipText>
        </Chip>
      </ChipSet>
      <ChipSet>
        <Chip style={{ backgroundColor: '#ffffff' }}>
          <ChipIcon style={{ color: '#1E88E5' }} leading use={`terrain`} />
          <ChipText style={{ color: '#1E88E5' }}>
            {this.xp.toLocaleString('en')} CARMEL XP
            </ChipText>
        </Chip>
      </ChipSet>
    </Typography>
  }

  render () {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            paddingTop: '10px',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center'
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
            { this.renderVerification() }
          </div>
          { this.renderTokens() }
        </div>
        { this.renderMainAction() }
      </div>)
  }
  }
