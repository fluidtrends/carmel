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

export default class Workspace extends Screen {
  constructor (props) {
    super(props)
    this.state = {
      ...this.state
    }

    this._setup = this.setup.bind(this)
    this._start = this.start.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
    super.componentWillMount()
  }

  getJourneySuccess (journey) {
    // notification.info({
    //    message: "Journey update",
    //    description: 'Keep going',
    // })
    this.setState({ journey: journey[0] })
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
    console.log(subscription)
    if (!subscription || !this.account) {
      return {}
    }

    return { userId: this.account.user.uid }
  }

  setup() {
    const { setup } = this.state
    const step = setup ? SetupData.steps[setup-1] : null
    const link = setup ? SetupData.steps[setup-1].link : null


    if (setup === SetupData.steps.length) {
      this.setState({ setup: false, setupDone: true })
      return
    }

    if (link) {
      this.triggerRawRedirect("object" === typeof link ? link[this.platformType] : link)
    }

    this.setState({ setup: parseInt((setup || 0) + 1)})
  }

  start() {
    console.log("SSSSS")
    this.triggerRedirect("/challenges")
  }

  renderSetupSteps() {
    if (!this.state.setup) {
      return <div/>
    }

   const percent = ((this.state.setup-1)/SetupData.steps.length)*100

   return  <Progress style={{ margin: "10px" }} percent={parseFloat(percent).toFixed(0)} status="active" />
  }

  renderSetupButton() {
    if (!this.state.setup && this.state.setupDone) {
      return <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
        <CardActionButtons>
          <Button
            raised
            onClick={this._start}
            theme='secondary-bg text-primary-on-secondary'>
            <ButtonIcon icon='play_circle_filled' />
              Take a challenge
          </Button>
        </CardActionButtons>
      </CardActions>
    }

    if (this.isMobile) {
      return <Alert
        message="You need to login from your computer to setup your development environment"
        banner
        closable
      />
    }

    const { setup } = this.state
    const step = setup ? SetupData.steps[setup-1] : null

    const icon = setup ? 'done' : 'play_circle_filled'
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
    if (!this.state.setup && this.state.setupDone) {
      return <Typography use='headline5' tag='div' style={{margin: "20px", color: this.props.theme.primaryColor }}>
        Woohoo, you did it!
      </Typography>
    }

    const { setup } = this.state
    const step = setup ? SetupData.steps[setup-1] : null
    const title = setup ? step.title : SetupData.intro.title

    return <Typography use='headline5' tag='div' style={{margin: "20px", color: this.props.theme.primaryColor }}>
      { title }
    </Typography>
  }

  renderSetupMessage() {
    if (!this.state.setup && this.state.setupDone) {
      return <div/>
    }

    const { setup } = this.state
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
          </Card>
          </Fade>
  }

  renderWorkspaceArea(width, padding) {
    if (!this.state.journey) {
      return this.renderNewJourney(width, padding)
    }

    return <Card style={{ width, margin: '10px', padding }}>
    <Typography use='headline6' tag='div' style={{ textAlign:"center", color: '#333333' }}>
      Keep going
    </Typography>
    </Card>
  }

  renderMainContent () {
    if (!this.state.wallet && !this.state.account) {
      return (
        <Components.Loading  />
      )
    }

    const width = this.isSmallScreen ? '95vw' : '600px'
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
        }}
      >
        <Card style={{ width, margin: '10px', padding }}>
          <UserInfo
            redirect={this.triggerRawRedirect}
            claimed={this.state.totalClaimed}
            wallet={this.state.wallet}
            account={this.account}
          />
        </Card>

        { this.renderWorkspaceArea(width, padding) }
      </div>
    )
  }


  components () {
    return [this.renderMainContent()]
  }
}
