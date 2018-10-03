import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { List, notification } from 'antd'
import UserInfo from '../../auth/components/userInfo'
import { Data } from 'react-chunky'
import { Typography } from 'rmwc/Typography'

export default class MainWalletScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, inProgress: true }
    this._back = this.back.bind(this)
    this._send = this.send.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
    this.refreshWallet()
  }

  refreshWallet () {
    const userId = this.account.user.uid
    this.props.getWallet({ userId })
  }

  send () {
    this.setState({ inProgress: true })
    this.props.sendTokens({
      amount: this.price,
      to: this.author.id,
      type: 'challengePurchase',
      data: {
        challengeId: this.state.pendingPurchase.challenge.id
      }
    })
  }

  tokensSent (response) {
    if (response && response.data && response.data.error) {
      notification.error({ message: response.data.error })
      this.setState({ inProgress: false })
      return
    }

    this.back()
  }

  failedToSendTokens (error) {
    notification.error({ message: error.message })
    this.setState({ inProgress: false })
  }

  back () {
    Data.Cache.clearCachedItem('pendingPurchase')
              .then(() => this.triggerRedirect('/workspace'))
              .catch(error => this.triggerRedirect('/workspace'))
  }

  renderMainContentFooter () {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Button onClick={this._back} style={{
        color: '#81D4FA',
        backgroundColor: '#ECEFF1'
      }}>
        { this.state.pendingPurchase ? 'Cancel' : 'Back to Workspace' }
      </Button>
    </div>
  }

  get containerStyle () {
    return {
      display: 'flex',
      flex: 1,
      height: '100vh',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  get formWidth () {
    return '600px'
  }

  get formPadding () {
    return '30px'
  }

  checkPendingPurchase () {
    Data.Cache.retrieveCachedItem('pendingPurchase')
              .then((pendingPurchase) => {
                this.setState({ inProgress: false, pendingPurchase })
              })
              .catch(error => {
                this.setState({ inProgress: false })
              })
  }

  get price () {
    const level = this.state.pendingPurchase.challenge.level
    const rate = 1
    const factor = 5
    const precision = 2
    const price = (level + 1) * factor * rate
    return price.toFixed(precision)
  }

  get title () {
    return this.state.pendingPurchase.challenge.title
  }

  get author () {
    return this.state.pendingPurchase.challenge.author
  }

  renderContinuePurchase () {
    return [
      <Typography use='title' key='active-prompt' style={{
        textAlign: 'center'
      }}>
          To start the <strong> { this.title } </strong> Challenge
        </Typography>,
      <CardActions style={{ justifyContent: 'center', margin: '10px' }} key='active-actions'>
        <CardActionButtons style={{ marginLeft: '10px' }}>
          <Button
            theme='secondary-bg text-primary-on-secondary'
            onClick={this._send}>
              Send <strong> { this.price.toLocaleString('en') } </strong> CARMEL
            </Button>
        </CardActionButtons>
      </CardActions>,
      <Typography use='body1' key='active-footer' style={{
        textAlign: 'center'
      }}>
        to <strong> { this.author.name } </strong>
      </Typography>
    ]
  }

  renderUserInfo () {
    return <UserInfo
      skipWallet={false}
      wallet={this.state.wallet}
      twitterOAuth={this.state.twitterOAuth}
      twitterUrl={this.twitterUrl}
      twitter={this.state.twitter}
      twitterError={this.state.twitterError}
      twitterVerify={this.props.twitterVerify}
      telegramVerify={this.props.telegramVerify}
      twitterAuth={this.props.twitterAuth}
      redirect={this.triggerRawRedirect}
      account={this.account} />
  }

  get tokens () {
    return `${this.state.wallet.carmel.toLocaleString('en')}`
  }

  failedToGetWallet (error) {
    this.refreshWallet()
  }

  gotWallet (wallets) {
    this.setState({ wallet: wallets[0] })
    this.checkPendingPurchase()
  }

  renderActiveContent () {
    if (!this.state.pendingPurchase) {
      return <Typography use='body1' key='active-main' style={{
        textAlign: 'center'
      }}>
        You have <strong> { this.tokens } </strong> CARMEL available
      </Typography>
    }

    return this.renderContinuePurchase()
  }

  renderMainContent () {
    const width = this.formWidth
    const padding = this.formPadding

    if (this.state.inProgress) {
      return (<div style={this.containerStyle}>
        <Card style={{ width, margin: '10px', padding }}>
          { this.renderUserInfo() }
          <Components.Loading message='Just a minute, please ...' />
        </Card>
      </div>)
    }

    return (<div style={this.containerStyle}>
      <Card style={{ width, margin: '10px', padding }}>
        { this.renderUserInfo() }
        { this.renderActiveContent() }
      </Card>
      { this.renderMainContentFooter() }
    </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
