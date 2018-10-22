import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Telegram } from '../components'
import { BuyModal } from '../components'

import Intro from '../components/intro'

export default class MainIntroScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, showModal: false }

    this._onModalClose = this.onModalClose.bind(this)
    this._onStart = this.onStart.bind(this)
    this._meetChris = this.meetChris.bind(this)
    this._onContinue = this.onContinue.bind(this)
    this._download = this.download.bind(this)
    this._showTeam = this.showTeam.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onStart() {
    this.triggerRedirect('/tokens')
  }

  meetChris () {
    this.triggerRedirect('/whitepaper')
  }

  showTeam () {
    this.triggerRedirect('/team')
  }

  onContinue (index) {
    this.scroller.scrollTo(index)
  }

  download () {
    this.triggerRedirect('/download')
  }

  renderDefault () {
    // <Studio
    //   session={this.props.session}
    //   offset={1}
    //   onContinue={this._download} /> */}
    // <Tokens
    //   session={this.props.session}
    //   offset={1}
    //   triggerRawRedirect={this.triggerRawRedirect}
    //   newTransaction={this.props.newTransaction}
    //   onCancel={this._onModalClose}
    //   transaction={this.state.transaction}
    //   account={this.props.account}
    //   isSmallScreen={this.isSmallScreen}
    // />
    // <Team
    //   session={this.props.session}
    //   isSmallScreen={this.isSmallScreen}
    //   offset={2}
    // />
    return <div>
      <Intro
        offset={0}
        isSmallScreen={this.isSmallScreen}
        onStart={this._onStart}
        onContinue={this._onContinue.bind(this, 1)}
      />
    </div>
  }

  get height () {
    return '100vh'
  }

  get isSmallScreen () {
    return this.state.width < 1224
  }

  get telegram () {
    return (<Telegram onAction={() => { this.triggerRawRedirect('https://t.me/carmelplatform') }} />)
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
    const features = super.components()
    return [ this.renderDefault(), ...features, this.telegram]

  }

  onModalClose () {
    this.setState({ showModal: false })
  }

}
