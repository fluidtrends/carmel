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
import { Col, Row, Carousel, Icon } from 'antd'
import moment from 'moment'
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@rmwc/card'
import Slider from 'react-slick'

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
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.carousel = React.createRef()
  }

  next() {
    this.carousel.next()
  }
  previous() {
    this.carousel.prev()
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

    this.importRemoteData(`${this.props.testimonialsSource}`)
      .then(testimonialsData => {
        self.setState({ testimonialsData })
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
          marginTop: '50px',
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
        {this.isSmallScreen
          ? this.renderCompactStoryCard()
          : this.renderDefaultStoryCard()}
      </div>
    )
  }

  renderCompactStoryCard() {
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
        {Object.keys(this.state.storyData.chapters)
          .slice(-3)
          .map(c => this.renderStoryCard(this.state.storyData.chapters[c]))}
      </div>
    )
  }

  renderDefaultStoryCard() {
    console.log('stories', Object.keys(this.state.storyData.chapters))
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
        <Row gutter={16}>
          {Object.keys(this.state.storyData.chapters)
            .slice(0, 3)
            .map(c => (
              <Col span={8}>
                {this.renderStoryCard(this.state.storyData.chapters[c])}
              </Col>
            ))}
        </Row>
      </div>
    )
  }

  renderStoryCard(chapter) {
    const { title, summary, image, slug } = chapter

    return (
      <Card
        style={{
          margin: '10px',
          minWidth: '300px',
          maxWidth: '450px',
          maxHeight: '400px'
        }}
        onClick={() => slug && this.props.history.push(`/story/${slug}`)}
      >
        <CardPrimaryAction
          style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <CardMedia
            sixteenByNine
            style={{
              marginTop: '10px',
              width: '200px',
              height: '200px',
              backgroundImage: `url(${image}})`
            }}
          />
          <div style={{ padding: '10px' }}>
            <Typography use="headline5" tag="h1">
              {title}
            </Typography>
            <Typography
              use="headline6"
              tag="h2"
              theme="text-secondary-on-background"
              style={{
                margin: '1rem',
                textAlign: 'center',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                maxHeight: '60px'
              }}
            >
              {summary}
            </Typography>
          </div>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              onClick={() => slug && this.props.history.push(`/story/${slug}`)}
              style={{
                margin: '10px 0px 30px 0px',
                color: '#ffffff',
                backgroundColor: '#04bdd4'
              }}
            >
              <ButtonIcon icon="library_books" style={{ marginLeft: '5px' }} />
              Read more
              <ButtonIcon icon="arrow_forward" style={{ marginLeft: '5px' }} />
            </Button>
          </CardActions>
        </CardPrimaryAction>
      </Card>
    )
  }

  renderTestimonials() {
    if (!this.state.testimonialsData) return <div />

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <Typography
          use="headline3"
          style={{
            margin: '20px'
          }}
        >
          What other people say about CARMEL
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Icon
            type="left"
            onClick={this.previous}
            style={{ color: '#04bdd4', fontSize: '20px', cursor: 'pointer' }}
          />
          <Carousel
            ref={node => (this.carousel = node)}
            className={'testimonials'}
            {...settings}
          >
            {this.state.testimonialsData.map(t =>
              this.renderTestimonialCard(t)
            )}
          </Carousel>
          <Icon
            type="right"
            onClick={this.next}
            style={{ color: '#04bdd4', fontSize: '20px', cursor: 'pointer' }}
          />
        </div>
      </div>
    )
  }

  renderTestimonialCard(testimonial) {
    const { text, image, name, description } = testimonial

    return (
      <Row gutter={16}>
        <Col span={4}>
          {image && (
            <img
              style={{
                width: '80px',
                height: '80px',
                margin: '20px auto',
                borderRadius: '50%'
              }}
              src={image}
            />
          )}
        </Col>
        <Col span={20}>
          <p style={{ fontStyle: 'italic', padding: '20px 15px 0 0' }}>
            "{text}"
          </p>
          <p style={{ fontWeight: 'bold' }}>
            {name} - {description}
          </p>
        </Col>
      </Row>
    )
  }

  renderTeamHeader() {
    return (
      <div style={{ margin: '50px 0 10px' }}>
        <Typography
          use="headline3"
          style={{
            textAlign: 'center'
          }}
        >
          Meet the team
        </Typography>
      </div>
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
      this.renderTestimonials(),
      this.renderLatestChapters(),
      this.renderTeamHeader(),
      this.renderTeam(),
      // this.renderMainAction(),
      this.chat
    ]
  }

  onModalClose() {
    this.setState({ showModal: false })
  }
}
