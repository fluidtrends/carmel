import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card } from 'rmwc/Card'
import UserInfo from '../../auth/components/userInfo'
import { Checkout, ClaimStart, ClaimContinue, ClaimValidate } from '../components'
import { Typography } from 'rmwc/Typography'
import { List, Icon, notification } from 'antd'

import moment from 'moment'

const ClaimPeriod = 'AirDrop'

export default class PrivateTokensScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, transactions: [], purchases: [], claims: [], totalClaimed: 0 }
    this._renderTransactionItem = this.renderTransactionItem.bind(this)
    this._onVerifyAccount = this.onVerifyAccount.bind(this)
    this._onClaimAction = this.onClaimAction.bind(this)
    this._onCancelValidation = this.onCancelValidation.bind(this)
    this._onStartValidation = this.onStartValidation.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    setTimeout(() => {
      this.props.getPeriod()
    }, 300)
  }

  componentWillUnmount () {
    super.componentWillMount()
  }

  onVerifyAccount () {
    this.triggerRedirect('/me')
  }

  transactionVerifiedOk (data) {
    this.setState({ verifying: false })
  }

  transactionVerifiedError (error) {
    this.setState({ verifying: false, verifyingError: error })
  }

  getPurchasesSuccess (purchases) {
    this.setState({ purchases: purchases.filter(p => !Array.isArray(p)) })
  }

  getClaimsSuccess (claims) {
    var totalClaimed = 0
    const all = claims.filter(c => !Array.isArray(c)).filter(c => !c.verified)

    all.forEach(c => {
      if (!c.periodId || c.periodId === ClaimPeriod) {
        totalClaimed = totalClaimed + c.tokens
      }
    })

    this.setState({ claims: all, totalClaimed })
  }

  getProfileSuccess (profile) {
    const account = Object.assign({}, this.account.user, profile[0])
    this.setState({ account })
  }

  getTransactionsSuccess (transactions) {
    this.setState({ transactions: transactions.filter(t => !Array.isArray(t)) })
  }

  getWalletSuccess (wallet) {
    this.setState({ wallet: wallet[0] })
  }

  renderTransactionItem (item) {
    return <List.Item actions={this.renderTransactionItemActions(item)}>
      <List.Item.Meta
        icon={item.icon}
        description={item.details}
        title={item.title} />
    </List.Item>
  }

  renderTransactionItemActions (item) {
    return item.actions.map(action =>
      (<Typography use='caption' tag='h2'
        style={{ color: (action.id === 'verified' ? '#4CAF50' : '#B0BEC5') }}>
        { action.title }
      </Typography>)
    )
  }

  claimData (claim) {
    if (!claim) {
      return
    }

    return Object.assign({}, claim, {
      title: `${claim.tokens.toLocaleString('en')} CARMEL`,
      type: 'claim',
      details: moment(claim.timestamp).format('MMM Do, YYYY h:mm a'),
      actions: [{ id: 'verified', icon: 'report', title: 'Tokens Reserved' }]
    })
  }

  purchaseData (purchase) {
    if (!purchase) {
      return
    }

    return Object.assign({}, purchase, {
      title: `${purchase.tokens.toLocaleString('en')} CARMEL`,
      type: 'purchase',
      details: moment(purchase.timestamp).format('MMM Do, YYYY h:mm a'),
      actions: [{ id: 'unverified', icon: 'exclamation', title: 'Purchase Pending' }]
    })
  }

  transactionData (transaction) {
    if (!transaction) {
      return
    }

    return Object.assign({}, transaction, {
      title: `${transaction.tokens.toLocaleString('en')} CARMEL`,
      type: 'transaction',
      details: moment(transaction.timestamp).format('MMM Do, YYYY h:mm a'),
      actions: [{ id: 'verified', icon: 'check', title: 'Tokens Purchased' }]
    })
  }

  get transactionsData () {
    return this.state.transactions.map(transaction => this.transactionData(transaction))
          .concat(this.state.purchases.map(purchase => this.purchaseData(purchase)))
          .concat(this.state.claims.map(claim => this.claimData(claim)))
          .sort((a, b) => a.timestamp < b.timestamp)
  }

  renderTransactionHistory (width, padding) {
    const data = this.transactionsData

    if (data.length === 0) {
      return <div />
    }

    return <Card style={{ width, margin: '10px', marginTop: '30px', padding }}>
      <Icon type='calendar' style={{
        fontSize: '48px',
        color: '#607D8B',
        padding: '10px'
      }} />
      <Typography use='title' tag='h2'>
          Transactions History
      </Typography>
      <List
        style={{ marginTop: '20px' }}
        itemLayout='horizontal'
        dataSource={data}
        renderItem={this._renderTransactionItem} />
    </Card>
  }

  onCancelValidation () {
    this.setState({ startValidation: false })
  }

  onStartValidation () {
    this.setState({ startValidation: true })
  }

  renderClaimStep () {
    return <div />
  }

  updateProfileOk (data) {
    console.log('updateProfileOk', data)
  }

  updateProfileError (error) {
    console.log('updateProfileError', error)
  }

  onClaimAction (item, data) {
    setTimeout(() => {
      this.props.updateProfile(data)
    }, 300)

    this.triggerRawRedirect(item.url)
  }

  subscriptionArgs (subscription) {
    if (!subscription || !this.account) {
      return {}
    }

    return { userId: this.account.user.uid }
  }

  get isSocialMediaComplete () {
    return (this.state.account && this.state.account.telegram &&
            this.state.account.twitter && this.state.account.youtube &&
            this.state.account.facebook && this.state.account.medium)
  }

  renderClaim () {
    if (!this.state.period || !this.state.account) {
      return <Components.Loading message='Loading claim period details ...' />
    }

    if (!this.state.claim && !this.state.totalClaimed) {
      if (this.state.period && this.state.period.data &&
          this.state.period.data.daysLeft < 0 && this.state.period.data.tokens === 0) {
        return <div />
      }

      return <ClaimStart
        error={this.state.claimError}
        ethereum={this.props.ethereum}
        newClaim={this.props.newClaim}
        account={this.state.account}
        period={this.state.period} />
    }

    if (!this.state.startValidation) {
      return <ClaimContinue
        isSocialMediaComplete={this.isSocialMediaComplete}
        error={this.state.claimError}
        account={this.state.account}
        onContinue={this._onStartValidation}
        period={this.state.period}
        onClaimAction={this._onClaimAction} />
    }

    return <ClaimValidate
      redirect={this.triggerRawRedirect}
      onCancelValidation={this._onCancelValidation}
      account={this.state.account}
      period={this.state.period} />
  }

  renderMainContent () {
    if (this.state.verifying) {
      return <Components.Loading message='Verifying, please hold on a sec ...' />
    }

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
          onVerifyAccount={this._onVerifyAccount}
          redirect={this.triggerRawRedirect}
          claimed={this.state.totalClaimed}
          wallet={this.state.wallet}
          account={this.account} />
      </Card>

      <Checkout
        account={this.account}
        newTransaction={this.props.newTransaction}
        transaction={this.state.transaction}
        triggerRawRedirect={this.triggerRawRedirect} />

      { this.renderClaim(width, padding) }
      { this.renderTransactionHistory(width, padding) }
    </div>)
  }

  transactionOk (transaction) {
    if (transaction.error) {
      this.setState({ error: transaction.error })
      return
    }

    this.setState({ transaction })
  }

  transactionError (error) {
    this.setState({ error: error.message })
  }

  gotPeriod (period) {
    if (period.data.error) {
      this.setState({ periodError: period.data.error })
      return
    }

    this.setState({ period })
  }

  periodError (error) {
    this.setState({ periodError: error.message })
  }

  claimOk (claim) {
    if (claim.data && claim.data.error) {
      notification.error({
        message: 'Your Claim Request Failed',
        description: claim.data.error
      })
      this.setState({ claim: '', claimError: claim.data.error })
      return
    }

    notification.success({
      message: 'Your Reservation Was Successful',
      description: 'Continue the Claiming Process to activate your claim.'
    })

    this.setState({ claim, claimError: '' })
  }

  claimError (error) {
    this.setState({ error: error.message })
  }

  components () {
    return [this.renderMainContent()]
  }
}
