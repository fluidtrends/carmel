import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Telegram } from '../components'
import { BuyModal } from '../components'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Intro from '../components/intro'
import About from '../components/about'
import Chat from '../components/chat'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from '@rmwc/typography'

export default class MainIntroScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, showModal: false }

    this._onModalClose = this.onModalClose.bind(this)
    this._onStart = this.onStart.bind(this)
    this._meetChris = this.meetChris.bind(this)
    this._onContinue = this.onContinue.bind(this)
    this._download = this.download.bind(this)
    this._showTeam = this.showTeam.bind(this)
  }

  renderStakeholders() {
    return <About compact={this.isSmallScreen} />
  }

  componentDidMount() {
    super.componentDidMount()
  }

  onStart() {
    this.triggerRedirect('/learners')
  }

  meetChris() {
    this.triggerRedirect('/whitepaper')
  }

  showTeam() {
    this.triggerRedirect('/team')
  }

  onContinue(index) {
    this.scroller.scrollTo(index)
  }

  download() {
    this.triggerRedirect('/download')
  }

  renderDefault() {
    return (
      <div>
        <Intro
          offset={0}
          isSmallScreen={this.isSmallScreen}
          onStart={this._onStart}
          onContinue={this._onContinue.bind(this, 1)}
        />
      </div>
    )
  }

  get height() {
    return '100vh'
  }

  get isSmallScreen() {
    return this.state.width < 1224
  }

  get telegram() {
    return (
      <Telegram
        onAction={() => {
          this.triggerRawRedirect('https://t.me/carmelplatform')
        }}
      />
    )
  }

  get chat() {
    return <Chat {...this.props} />
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

  renderServicesAction() {
    return (
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f3ffff',
          color: this.props.theme.primaryColor,
          margin: '50px 0px 50px 0px',
          padding: '50px 0px 50px 0px'
        }}
      >
        <Typography
          use="headline4"
          style={{
            textAlign: 'center'
          }}
        >
          Need help with your Website or Mobile App?
        </Typography>
        <Typography
          use="headline4"
          style={{
            textAlign: 'center',
            color: '#fafafa'
          }}
        >
          <Button
            raised
            theme="secondary-bg text-primary-on-secondary"
            style={{ marginTop: '30px' }}
            onClick={() => this.triggerRedirect('/services')}
          >
            <ButtonIcon icon="check" />
            Get A FREE Quote Now
          </Button>
        </Typography>
      </div>
    )
  }

  renderMainAction() {
    return (
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f3ffff',
          color: this.props.theme.primaryColor,
          margin: '50px 0px 50px 0px',
          padding: '50px 0px 50px 0px'
        }}
      >
        <Typography
          use="headline4"
          style={{
            textAlign: 'center'
          }}
        >
          Start your learning journey
        </Typography>
        <Typography
          use="headline4"
          style={{
            textAlign: 'center',
            color: '#fafafa'
          }}
        >
          <Button
            raised
            theme="secondary-bg text-primary-on-secondary"
            style={{ marginTop: '30px' }}
            onClick={() => this.triggerRedirect('/challenges')}
          >
            <ButtonIcon icon="check_circle" />
            Take a challenge
          </Button>
        </Typography>
      </div>
    )
  }

  components() {
    const features = super.components()
    return [
      this.renderDefault(),
      ...features,
      // this.renderMainAction(),
      this.chat
    ]
  }

  onModalClose() {
    this.setState({ showModal: false })
  }
}
