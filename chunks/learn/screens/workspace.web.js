import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import UserInfo from '../../auth/components/userInfo'
import { Typography } from '@rmwc/typography'
import { List, Icon, Tabs, Avatar, Alert, Progress, Steps, notification } from 'antd'
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
import EnvSetup from '../components/EnvSetup'

const { TabPane } = Tabs

export default class Workspace extends Screen {
  constructor (props) {
    super(props)
    this.state = {
      inProgress: true,
      section: "active",
      ...this.state
    }

    this._setup = this.setup.bind(this)
    this._restartSetup = this.restartSetup.bind(this)
    this._skipSetupStep = this.skipSetupStep.bind(this)

    this._chooseChallenge = this.chooseChallenge.bind(this)
    this._startChallenge = this.startChallenge.bind(this)
    this._pauseChallenge = this.pauseChallenge.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
    super.componentWillMount()
  }

  updateJourneyOk(response) {
    console.log(response)
  }

  updateJourneyError(error) {
    console.log(error)
  }

  cachedWorkspace() {
    return new Promise((resolve, reject) => {
        Data.Cache.retrieveCachedItem("workspace")
                  .then((workspace) => resolve(workspace))
                  .catch((e) => resolve())
    })
  }

  updateWorkspace(journey, workspace) {
    if ((!journey || !journey.challenge) && workspace && workspace.event && workspace.event === "startChallenge" && workspace.challenge) {
      if (!journey || !journey.machines) {
        return
      }
      const machineId = Object.keys(journey.machines)[0]
      workspace.event = "doChallenge"
      Data.Cache.cacheItem("workspace", workspace).then(() => {
        this.updateLearningJourney({ type: "start", challengeId: workspace.challenge._id, machineId })
        this.setState({ journey, workspace })
      })
      return
    }

    if (journey.challenge) {
      this.setState({ journey, workspace })
      this.refreshCurrentChallenge()
      return
    }

    this.setState({ journey, workspace, inProgress: false })
  }

  getJourneySuccess (journey) {
    if (!journey || !journey[0]) {
      this.setState({ inProgress: false })
      return
    }

    if (journey[0].setup) {
      this.setState({ inProgress: false, journey: journey[0], setup: journey[0].setup.step })
      return
    }

    this.cachedWorkspace().then((workspace) => this.updateWorkspace(journey[0], workspace))
  }

  getJourneyError(error) {
    console.log(error)
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

  get setupProgress() {
    return this.state.setup
  }

  skipSetupStep() {
    this.setup(true)
  }

  restartSetup() {
    this.updateLearningJourney({ type: "setup", step: parseInt(1) })
    this.setState({ setup: parseInt(1)})
  }

  refreshCurrentChallenge() {
    if (!this.state.journey || !this.state.journey.challenge) {
      return
    }

    this.props.getListings({ challengeId: this.state.journey.challenge.challengeId })
  }

  gotListings(content) {
    if (!content.ok || !content.data || !content.data.challenge) {
      // Try again
      this.refreshCurrentChallenge()
      return
    }

    this.setState({ challenge: content.data.challenge, inProgress: false })
  }

  couldNotGetListings(error) {
    // Keep trying
    this.refreshCurrentChallenge()
  }

  setup(skip) {
    const setup = this.setupProgress
    const step = setup ? SetupData.steps[setup-1] : null
    const link = setup ? SetupData.steps[setup-1].link : null

    this.updateLearningJourney({ type: "setup", step: parseInt((setup || 0) + 1) })

    if (setup === SetupData.steps.length) {
      this.setState({ setup: false, setupDone: true })
      return
    }

    if (link && !skip) {
      this.triggerRawRedirect("object" === typeof link ? link[this.platformType] : link)
    }

    this.setState({ setup: parseInt((setup || 0) + 1)})
  }

  chooseChallenge() {
    this.triggerRedirect("/challenges")
  }

  renderSetupSteps() {
    if (!this.setupProgress) {
      return <div/>
    }

   const percent = ((this.setupProgress-1)/SetupData.steps.length)*100

   return <Typography use='headline5' tag='div' style={{ textAlign:"center", color: '#333333' }}>
     Setup your development environment
     <Progress style={{ margin: "10px" }} percent={parseFloat(percent).toFixed(0)} status="active" />
   </Typography>
  }

  renderNewJourney(width, padding) {
    return <Fade>
        <Card style={{ width, margin: '10px', padding }}>
            <EnvSetup
              platformType={this.platformType}  
              step={this.setupProgress}
              start={this._setup}
              skip={this._skipSetupStep}
              restart={this._restartSetup}/>
          </Card>
      </Fade>
  }

  renderCurrentChallenge(width, padding) {
    if (this.state.journey.challenge && this.state.journey.challenge.taskActive) {
      return <Fade>
          <div style={{ width, margin: '10px', padding }}>
              <Task
                  onPause={this._pauseChallenge}
                  journey={this.state.journey}
                  challenge={this.state.challenge}/>
              </div>
      </Fade>
    }

    return <Fade>
        <div style={{ width, margin: '10px', padding }}>
            <Challenge
                onPause={this._pauseChallenge}
                journey={this.state.journey}
                challenge={this.state.challenge}
                onSelectChallenge={this._startChallenge}/>
            </div>
    </Fade>
  }

  startChallenge() {
    this.setState({ inProgress: true })
    this.updateLearningJourney({ type: "next"  })
  }

  restartChallenge(challengeId) {
    this.setState({ inProgress: true, section: "active" })
    this.updateLearningJourney({ type: "start", challengeId  })
  }

  pauseChallenge() {
    this.setState({ inProgress: true, section: "paused" })
    this.updateLearningJourney({ type: "pause"  })
  }

  timeConsumed(duration) {
    const hh = Math.round(moment.duration(duration).asHours()) % 24
    const mm = Math.round(moment.duration(duration).asMinutes()) % 60
    const ss = Math.round(moment.duration(duration).asSeconds()) % 60

    return `${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}:${ss < 10 ? '0' : ''}${ss}`
  }

  renderPausedChallenge(width, padding, challenge) {
    return <Fade>
        <Card style={{ width, margin: '10px', padding }}>
            <Typography use='headline5' tag='div' style={{margin: "10px", textAlign: "center", color: this.props.theme.primaryColor }}>
            { challenge.title || challenge.challengeId }
           </Typography>
           <Typography use='headline6' tag='div' style={{margin: "10px", textAlign: "center", color: "#455A64" }}>
           Current task: { parseInt(challenge.taskIndex + 1)} of {parseInt(challenge.totalTasks)}
          </Typography>
           <Typography
             use="caption"
             style={{
               color: "#455A64",
               backgroundColor: "#FFEB3B",
               textAlign: "center",
               padding: "10px"
             }}>
             Time consumed: { this.timeConsumed(challenge.totalTime)}
           </Typography>
           <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
             <CardActionButtons>
               <Button
                 raised
                 onClick={() => this.restartChallenge(challenge.challengeId)}
                 theme='secondary-bg text-primary-on-secondary'>
                 <ButtonIcon icon={'play_circle_filled'} />
                  Restart
               </Button>
             </CardActionButtons>
           </CardActions>
          </Card>
      </Fade>
  }

  renderPausedChallenges(width, padding) {
    if (!this.state.journey || this.state.journey.setup) {
      return <div/>
    }

    if (!this.state.journey.pausedChallenges || Object.keys(this.state.journey.pausedChallenges).length === 0) {
      return  <Fade>
          <Card style={{ width, margin: '10px', padding }}>
              <Typography use='headline5' tag='div' style={{margin: "10px", textAlign: "center", color: this.props.theme.primaryColor }}>
              You have not paused any challenges yet
             </Typography>
            </Card>
        </Fade>
    }

    return <div style={{
      display: "flex",
      flex: 1,
      flexDirection: "column"
    }}>
      {
        Object.keys(this.state.journey.pausedChallenges).map(c => this.renderPausedChallenge(width, padding, this.state.journey.pausedChallenges[c]))
      }
    </div>
  }

  renderChunkyIntro() {
    return <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
      <Bounce>
        <Avatar src="/assets/chunky-logo.gif" style={{
          height: "180px", width: "180px"
        }} />
      </Bounce>
    </div>
  }

  renderActiveChallenge(width, padding) {
    if (this.state.journey && this.state.journey.challenge) {
      return this.renderCurrentChallenge(width, padding)
    }

    return <Fade>
        <Card style={{ width, margin: '10px', padding }}>
            <Typography use='headline5' tag='div' style={{margin: "10px", textAlign: "center", color: this.props.theme.primaryColor }}>
              Ready to level up your tech skills?
           </Typography>
            <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
              <CardActionButtons>
                <Button
                  raised
                  onClick={this._chooseChallenge}
                  theme='secondary-bg text-primary-on-secondary'>
                  <ButtonIcon icon='play_circle_filled' />
                    Take a challenge
                </Button>
              </CardActionButtons>
            </CardActions>
          </Card>
      </Fade>
  }

  renderExistingJourney(width, padding) {
    const section = this.state.section || "active"

    switch (section) {
      case "paused":
          return this.renderPausedChallenges(width, padding)
      case "active":
      default:
        return this.renderActiveChallenge(width, padding)
    }
  }

  renderWorkspaceArea(width, padding) {
    if (!this.state.journey || this.state.journey.setup || !this.state.journey.machines) {
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
      </Card>
 }

 renderSections(width, padding) {
   if (!this.state.journey || this.state.journey.setup || !this.state.journey.machines) {
     return <div/>
   }

   return <Tabs
     defaultActiveKey={this.state.section}
     tabPosition={'top'}
     style={{ marginTop: '20px', width }}
     onTabClick={ (section) => this.setState({ section })}>
     <TabPane tab={<span><Icon type="play-circle" />Active Challenge</span>} key={"active"} />
     <TabPane tab={<span><Icon type="pause-circle" />Paused Challenges</span>} key={"paused"} />
   </Tabs>
 }

  renderMainContent () {
    if (this.state.inProgress || !this.state.wallet && !this.state.account) {
      return (
        <Components.Loading  />
      )
    }

    const width = this.isSmallScreen ? '95vw' : '700px'
    const padding = this.isSmallScreen ? '5px' : '30px'

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
        { this.renderChunkyIntro() }
        { this.renderSections(width, padding) }
        { this.renderWorkspaceArea(width, padding) }
      </div>
    )
  }

  components () {
    return [this.renderMainContent()]
  }
}
