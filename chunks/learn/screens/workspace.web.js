import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import UserInfo from '../../auth/components/userInfo'
import { Typography } from '@rmwc/typography'
import { List, Icon, Tabs, Avatar, Alert, Progress, Steps, notification } from 'antd'
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

export default class Workspace extends Screen {
  constructor (props) {
    super(props)
    this.state = {
      inProgress: true,
      ...this.state
    }

    this._setup = this.setup.bind(this)
    this._restartSetup = this.restartSetup.bind(this)
    this._chooseChallenge = this.chooseChallenge.bind(this)
    this._startChallenge = this.startChallenge.bind(this)
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
    if (!journey.challenge && workspace.event && workspace.event === "startChallenge" && workspace.challenge && journey.machines) {
      const machineId = Object.keys(journey.machines)[0]
      workspace.event = "doChallenge"
      Data.Cache.cacheItem("workspace", workspace).then(() => {
        this.updateLearningJourney({ type: "start", challengeId: workspace.challenge._id, machineId })
        this.setState({ journey, workspace })
      })
      return
    }

    if (journey.challenge) {
      this.setState({ journey, workspace, inProgress: true })
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
      this.setState({inProgress: false, journey: journey[0], setup: journey[0].setup.step })
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

  restartSetup() {
    this.updateLearningJourney({ type: "setup", step: parseInt(0) })
    this.setState({ setup: parseInt(0)})
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
      console.log(content)
      // this.refreshCurrentChallenge()
      return
    }

    this.setState({ challenge: content.data.challenge, inProgress: false })
  }

  couldNotGetListings(error) {
    // Keep trying
    this.refreshCurrentChallenge()
  }

  setup() {
    const setup = this.setupProgress
    const step = setup ? SetupData.steps[setup-1] : null
    const link = setup ? SetupData.steps[setup-1].link : null

    this.updateLearningJourney({ type: "setup", step: parseInt((setup || 0) + 1) })

    if (setup === SetupData.steps.length) {
      this.setState({ setup: false, setupDone: true })
      return
    }

    if (link) {
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

  renderRestartSetup() {
    if (!this.setupProgress) {
      return <div/>
    }

    return <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
      <CardActionButtons>
        <Button
          onClick={this._restartSetup}>
            Wanna start again?
        </Button>
      </CardActionButtons>
    </CardActions>
  }

  renderSetupButton() {
    if (!this.setupProgress && this.state.setupDone) {
      return <div/>
    }

    if (this.isMobile) {
      return <Alert
        message="You need to login from your computer to setup your development environment"
        banner
        closable
      />
    }

    const setup = this.setupProgress
    const step = setup ? SetupData.steps[setup-1] : null

    const icon = setup ? 'done' : 'play_circle_filled'

    if (step && !step.action) {
      return <div/>
    }

    const action = setup ? step.action : 'Get Started'

    return <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
      <CardActionButtons>
        <Button
          raised
          onClick={this._setup}
          theme='secondary-bg text-primary-on-secondary'>
          <ButtonIcon icon={icon} />
            { action }
        </Button>
      </CardActionButtons>
    </CardActions>
  }

  renderSetupTitle() {
    if (!this.setupProgress && this.state.setupDone) {
      return <Typography use='headline5' tag='div' style={{margin: "20px", color: this.props.theme.primaryColor }}>
        Woohoo, you did it!
      </Typography>
    }

    const setup = this.setupProgress
    const step = setup ? SetupData.steps[setup-1] : null
    const title = setup ? step.title : SetupData.intro.title

    return <Typography use='headline5' tag='div' style={{margin: "20px", color: this.props.theme.primaryColor }}>
      { title }
    </Typography>
  }

  renderSetupMessage() {
    if (!this.setupProgress && this.state.setupDone) {
      return <div/>
    }

    const setup = this.setupProgress
    const step = setup ? SetupData.steps[setup-1] : null
    const text = step ? ("object" === typeof step.text ? step.text[this.platformType] : step.text) : null
    const message = marked(text ? `${text}` : SetupData.intro.text)

    return <div dangerouslySetInnerHTML={{__html: `${message}`}} style={{textAlign: "justify"}}/>
  }

  renderNewJourney(width, padding) {
    return <Fade>
        <Card style={{ width, margin: '10px', padding }}>
            <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
              <Bounce>
                <Avatar src="/assets/chunky-logo.gif" style={{
                  height: "180px", width: "180px"
                }} />
              </Bounce>
              { this.renderSetupSteps() }
              { this.renderSetupTitle() }
              { this.renderSetupMessage() }
            </div>

            { this.renderSetupButton() }
            { this.renderRestartSetup() }
          </Card>
          </Fade>
  }

  renderCurrentChallenge(width, padding) {
    if (this.state.journey.challenge.taskActive) {
      return <Fade>
          <div style={{ width, margin: '10px', padding }}>
              <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
                <Bounce>
                  <Avatar src="/assets/chunky-logo.gif" style={{
                    height: "180px", width: "180px"
                  }} />
                </Bounce>
              </div>
              <Task
                  journey={this.state.journey}
                  challenge={this.state.challenge}/>
              </div>
      </Fade>
    }

    return <Fade>
        <div style={{ width, margin: '10px', padding }}>
            <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
              <Bounce>
                <Avatar src="/assets/chunky-logo.gif" style={{
                  height: "180px", width: "180px"
                }} />
              </Bounce>
            </div>
            <Challenge
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

  renderExistingJourney(width, padding) {

    if (this.state.challenge) {
      return this.renderCurrentChallenge(width, padding)
    }

    return <Fade>
        <Card style={{ width, margin: '10px', padding }}>
            <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
              <Bounce>
                <Avatar src="/assets/chunky-logo.gif" style={{
                  height: "180px", width: "180px"
                }} />
              </Bounce>
            </div>
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

  renderWorkspaceArea(width, padding) {
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
        { this.renderWorkspaceArea(width, padding) }
      </div>
    )
  }

  components () {
    return [this.renderMainContent()]
  }
}
