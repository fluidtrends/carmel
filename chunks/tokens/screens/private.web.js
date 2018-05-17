import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card } from 'rmwc/Card'
import UserInfo from '../../auth/components/userInfo'
import { Checkout, Claim } from '../components'
import { Button } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { List, Icon } from 'antd'

import moment from 'moment'

export default class PrivateTokensScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, transactions: [], purchases: [] }
    this._renderTransactionItem = this.renderTransactionItem.bind(this)
    this._onTransactionsVerify = this.onTransactionsVerify.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
    super.componentWillMount()
  }

  transactionVerifiedOk (data) {
    this.setState({ verifying: false })
  }

  transactionVerifiedError (error) {
    this.setState({ verifying: false, verifyingError: error })
  }

  subscriptionArgs (subscription) {
    if (!subscription) {
      return {}
    }

    return { userId: this.account.user.uid }
  }

  getPurchasesSuccess (purchases) {
    this.setState({ purchases: purchases.filter(p => !Array.isArray(p)) })
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
        description={item.details}
        title={item.title} />
    </List.Item>
  }

  onTransactionsVerify () {
    this.setState({ verifying: true })
    this.props.verifyTransactions()
  }

  renderTransactionItemActions (item) {
    return item.actions.map(action =>
      (<Typography use='caption' tag='h2'
        style={{ color: (action.id === 'verified' ? '#4CAF50' : '#f44336') }}>
        { action.title }
      </Typography>)
    )
  }

  purchaseData (purchase) {
    if (!purchase) {
      return
    }

    return Object.assign({}, purchase, {
      title: `${purchase.tokens.toLocaleString('en')} CARMEL`,
      type: 'purchase',
      details: moment(purchase.timestamp).format('MMM Do, YYYY h:mm a'),
      actions: [{ id: 'unverified', icon: 'exclamation', title: 'Unverified' }]
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
      actions: [{ id: 'verified', icon: 'check', title: 'Verified' }]
    })
  }

  get transactionsData () {
    return this.state.transactions.map(transaction => this.transactionData(transaction))
          .concat(this.state.purchases.map(purchase => this.purchaseData(purchase)))
  }

  renderTransactionHistory (width, padding) {
    const data = this.transactionsData

    if (data.length === 0) {
      return <div />
    }

    return <Card style={{ width, margin: '10px', marginTop: '30px', padding }}>
      <Icon type='clock-circle' style={{
        fontSize: '48px',
        color: '#607D8B',
        padding: '10px'
      }} />
      <Typography use='title' tag='h2'>
          Transactions History
        </Typography>

      <Button onClick={this._onTransactionsVerify}>
        Verify All
      </Button>
      <List
        style={{ marginTop: '20px' }}
        itemLayout='horizontal'
        dataSource={data}
        renderItem={this._renderTransactionItem} />
    </Card>
  }

  // renderReedem () {
  //   if (!this.state.credits) {
  //     return <div />
  //   }
  //   return <div>
  //     <Typography use='subheading2' tag='h2'>
  //       Found { this.state.credits.toLocaleString('en') } CARMEL credits.
  //     <Button onClick={this._onRedeem}>
  //       Redeem Them Now
  //     </Button>
  //     </Typography>
  //   </div>
  // }

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
          wallet={this.state.wallet}
          account={this.account} />
      </Card>

      <Checkout
        account={this.account}
        newTransaction={this.props.newTransaction}
        transaction={this.state.transaction}
        triggerRawRedirect={this.triggerRawRedirect} />

      { this.renderTransactionHistory(width, padding) }

      <Claim
        newClaim={this.props.newClaim}
        claim={this.state.claim}
        wallet={this.state.wallet}
        ethereum={this.props.ethereum}
        account={this.account} />
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

  claimOk (claim) {
    if (claim.error) {
      this.setState({ error: claim.error })
      return
    }

    this.setState({ claim })
  }

  claimError (error) {
    this.setState({ error: error.message })
  }

  components () {
    return [this.renderMainContent()]
  }
}
