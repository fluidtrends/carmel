import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Telegram } from '../components'
import { BuyModal } from '../components'

export default class MainIntroScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, showModal: false }

    this._onModalClose = this.onModalClose.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get telegram() {
    return (<Telegram onAction={() => { this.triggerRawRedirect('https://t.me/carmelplatform') }} />)
  }

  renderMainContent() {
    return !this.state.showModal ?
      <div /> :
      <BuyModal
        visible={this.state.showModal}
        triggerRawRedirect={this.triggerRawRedirect}
        newTransaction={this.props.newTransaction}
        onCancel={this._onModalClose}
        transaction={this.state.transaction}
        account={this.props.account}
      />
  }

  transactionOk(transaction) {
    if (transaction.error) {
      this.setState({ error: transaction.error })
      return
    }

    this.setState({ transaction })
  }

  transactionError(error) {
    this.setState({ error: error.message })
  }

  components() {
    const features = super.components()
    return [...features, this.renderMainContent(), this.telegram]
    // console.log(this.props)
    // return super.components()
    //   .concat([this.telegram])

  }

  handleSystemEvent(event, sd) {
    if (event === '/buy') {
      this.setState({ showModal: true })
    }
  }

  onModalClose() {
    this.setState({ showModal: false })
  }
}
