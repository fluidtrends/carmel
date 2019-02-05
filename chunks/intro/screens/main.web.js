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
import teamData from '../data/team'
import { Col, Row, Icon } from 'antd'
import moment from 'moment'

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

    this._loadStoryContent()
  }

  _loadStoryContent() {
    const self = this

    this.importRemoteData(`${this.props.storySource}/story.json`)
      .then(storyData => {
        self.setState({ storyData })
      })
      .catch(error => console.log(error))
  }

  date = date => {
    if (date) {
      return moment(date, 'x').format('DD MMMM YYYY')
    }

    return ''
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

  renderLatestChapters() {
    if (!this.state.storyData) return <div />

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography use="headline4">
          Checkout the Latest Carmel Stories
        </Typography>
        <div>
          {Object.keys(this.state.storyData.chapters)
            .slice(-3)
            .map(c => this.renderStoryCard(this.state.storyData.chapters[c]))}
        </div>
      </div>
    )
  }

  renderStoryCard(chapter) {
    const { title, summary, image, date, slug } = chapter
    return (
      <Row
        onClick={() => {
          slug && this.props.history.push(`/story/${slug}`)
        }}
        style={{
          boxShadow: '0 5px 20px 0 rgba(0,0,0,.15)',
          padding: '15px',
          marginTop: '15px',
          marginBottom: '15px',
          maxHeight: '250px',
          cursor: 'pointer',
          maxWidth: '700px'
        }}
      >
        <Col sm={16} xs={24} style={{ height: '200px' }}>
          <Row>
            <h4
              style={{
                padding: '20px',
                fontSize: '26px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                maxHeight: '60px'
              }}
            >
              {title}
            </h4>
          </Row>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '20px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              maxHeight: '60px'
            }}
          >
            {summary}
          </p>
          <div style={{display: 'flex', position: 'absolute', bottom: 0, justifyContent: 'space-between'}}>
            {date && (
              <p style={{ fontSize: '14px', marginTop: 7, marginRight: 20 }}>
                {this.date(date)}
              </p>
            )}
            <Button>Read more</Button>
          </div>
        </Col>
        {window.innerWidth > 576 && (
          <Col span={4} offset={1}>
            <img
              style={{ height: '200px', width: '100%', minWidth: '200px', objectFit: 'cover' }}
              src={image}
            />
          </Col>
        )}
      </Row>
    )
  }

  renderTeam() {
    return <Components.Team {...teamData} />
  }

  components() {
    const features = super.components()
    return [
      this.renderDefault(),
      ...features,
      this.renderLatestChapters(),
      this.renderTeam(),
      // this.renderMainAction(),
      this.chat
    ]
  }

  onModalClose() {
    this.setState({ showModal: false })
  }
}
