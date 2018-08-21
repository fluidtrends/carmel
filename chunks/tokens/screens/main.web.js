import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Checkout } from '../components'

export default class TokensScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderMainContent () {
    return (<div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Checkout
        error={this.state.error}
        transaction={this.state.transaction}
        triggerRawRedirect={this.triggerRawRedirect}
        newTransaction={this.props.newTransaction} />
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

  components () {
    return [this.renderMainContent()]
  }
}
