import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import UserInfo from '../../auth/components/userInfo'
import { Typography } from '@rmwc/typography'
import { List, Icon, Tabs, Avatar, Alert, Progress, Steps, notification, Tag } from 'antd'
const TabPane = Tabs.TabPane
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import moment from 'moment'
import { Button, ButtonIcon } from 'rmwc/Button'
import Setup from '../components/setup'
import marked from 'marked'
const Step = Steps.Step
import SetupData from '../data/setup.json'
import platform from 'platform'
import { Data } from 'react-chunky'
import Task from '../components/Task'
import Challenge from '../components/Challenge'
import ChallengeCard from '../../journey/components/challengeCard'

export default class Workspace extends Screen {
  constructor (props) {
    super(props)
    this.state = {
      inProgress: true,
      ...this.state
    }

    this._join = this.join.bind(this)
    this._renderSkills = this.renderSkills.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
    super.componentWillMount()
  }

  updateJourneyOk(response) {
    // console.log(response)
  }

  updateJourneyError(error) {
    // console.log(error)
  }

  join() {
    Data.Cache.retrieveCachedItem("guestSession")
              .then((session) => this.joinNow(session))
              .catch((e) => this.joinNow())
  }

  joinNow(session) {
    Data.Cache.cacheItem("guestSession", Object.assign({}, session, { guild: "learners" }))
              .then(() => this.triggerRedirect('/challenges'))
              .catch((e) => this.triggerRedirect('/challenges'))
  }

  getJourneySuccess (journey) {
    if (!journey || !journey[0]) {
      this.setState({ inProgress: false })
      return
    }

    this.setState({ journey: journey[0], inProgress: false })
  }

  getJourneyError(error) {
    // console.log(error)
  }

  getProfileSuccess (profile) {
    const account = Object.assign({}, this.account.user, profile[0])
    this.setState({ account })
  }

  getWalletSuccess (wallet) {
    this.setState({ wallet: wallet[0] })
  }

  subscriptionArgs (subscription) {
    if (!subscription || !this.account) {
      return {}
    }

    return { userId: this.account.user.uid }
  }

  updateLearningJourney(args) {
    const machineId = (this.state.journey && this.state.journey.machines) ? Object.keys(this.state.journey.machines)[0] : this.platformType
    setTimeout(() => {
        this.props.updateJourney(Object.assign({}, { platform: platform.os, machineId }, args))
    }, 300)
  }

  renderNewJourney(width, padding) {
    return <Fade>
      <Card style={{ width, margin: '40px 10px', padding }}>
        <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
          <Bounce>
            <Avatar src="/assets/chunky-logo.gif" style={{
              height: "180px", width: "180px"
            }} />
          </Bounce>
        </div>

        <Typography use='headline5' tag='div' style={{margin: "20px", color: this.props.theme.primaryColor, textAlign: 'center' }}>
          Your learning journey hasn't started yet.
        </Typography>

        <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
          <CardActionButtons>
            <Button
              raised
              onClick={this._join}
              theme='secondary-bg text-primary-on-secondary'>
              <ButtonIcon icon='play_circle_filled' />
              Take A Challenge Now
            </Button>
          </CardActionButtons>
      </CardActions>
      </Card>
    </Fade>
  }

  renderCompletedChallenges(challenges) {
    return challenges.slice(0).reverse().map(challenge => <ChallengeCard challenge={challenge} isSmallScreen={this.isSmallScreen} completed />)
  }

  renderCurrentChallenge(challenge) {
    return <ChallengeCard challenge={challenge} isSmallScreen={this.isSmallScreen} active />
  }

   renderBadge(name, value) {
    if (this.isSmallScreen) {
      // return
    }

    const Badge = <span style={{width: 25, height: 25, borderRadius: '50%', background: '#00bcd4', position: 'absolute', bottom: 7, right: -10, color: '#fff',textAlign: 'center', padding: 3}}>{value}</span>

    return <Components.AnimatedWrapper animation animationType="fade">
      <span style={{position: 'relative', marginRight: 20}}>
        <Tag style={{marginBottom: 10, borderColor: '#00bcd4', color: '#00bcd4', backgroundColor: '#fff'}}>
          {`#${String(name).toLowerCase()} - ${value}`}
        </Tag>
      </span>
    </Components.AnimatedWrapper>
  }

  renderSkills() {
    const { skills } = this.state.journey
    // console.log("the skills:",skills)
    if (!skills) {
      return console.log("there are no skills")
    }
    return <div flex>{Object.keys(skills).map(key => this.renderBadge(key, skills[key]))}</div>
  }

  renderJourney() {
    const journey = this.state.journey

    const { completedChallenges = [], challenge } = journey
    const completedChallengesCards = completedChallenges && this.renderCompletedChallenges(completedChallenges)

    if (!completedChallenges.length && ! challenge) {
      return this.renderNewJourney()
    }

    return [
      this.renderCurrentChallenge(challenge),
      ...completedChallengesCards
    ]
  }

  renderExistingJourney(width, padding) {
    const title = this.state.journey && this.state.journey.completedChallenges ? (
      this.state.journey.completedChallenges.length === 1 ? 'Congrats on completing your first challenge!' :
      `You completed ${this.state.journey.completedChallenges.length} challenges so far`
    ): 'You have not completed any challenges yet'

    return <Fade>
        <Card style={{ width, margin: '40px 10px', padding }}>
            <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
              <Bounce>
                <Avatar src="/assets/chunky-logo.gif" style={{
                  height: "180px", width: "180px"
                }} />
              </Bounce>
            </div>
            <Typography use='headline5' tag='div' style={{margin: "10px", textAlign: "center", color: this.props.theme.primaryColor }}>
              { title }
           </Typography>
          </Card>

          {this.state.journey && this.renderJourney()}
    </Fade>
  }

  renderTimeline(width, padding) {
    if (!this.state.journey || this.state.journey.setup) {
      return this.renderNewJourney(width, padding)
    }

    return this.renderExistingJourney(width, padding)
  }

  renderHeader(width, padding) {
    return <Card style={{ width, margin: '10px', padding }}>
          <UserInfo
            redirect={this.triggerRawRedirect}
            claimed={this.state.totalClaimed}
            wallet={this.state.wallet}
            account={this.account}
          />
          {this._renderSkills()}
      </Card>
 }

  renderMainContent () {
    if (this.state.inProgress || !this.state.wallet && !this.state.account) {
      return (
        <Components.Loading  />
      )
    }

    const width = this.isSmallScreen ? '95vw' : '700px'
    const padding = this.isSmallScreen ? '5px' : '30px'
    console.log("the state is:", this.state)
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          overflow: 'hidden',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        { this.renderHeader(width, padding) }
        { this.renderTimeline(width, padding) }
      </div>
    )
  }

  components () {
    return [this.renderMainContent()]
  }
}
