import React, { PureComponent } from 'react'
import { Screen, Components } from 'react-dom-chunky'
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

export default class EnvSetup extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}

    this._skip = this.skip.bind(this)
    this._restart = this.restart.bind(this)
    this._start = this.start.bind(this)
  }

  skip() {
    this.props.skip && this.props.skip()
  }

  start() {
    this.props.start && this.props.start()
  }

  restart() {
    this.props.restart && this.props.restart()
  }

  renderSetupSteps() {
    if (!this.props.step) {
      return <div/>
    }

   const percent = ((this.props.step-1)/SetupData.steps.length)*100

   return <Typography use='headline5' tag='div' style={{
       textAlign:"center",
       paddingBottom: "20px",
       color: '#dadada'
     }}>
       Setup Your Development Environment
       <Progress style={{ margin: "10px" }} percent={parseFloat(percent).toFixed(0)} status="active" />
     </Typography>
  }

  renderRestartSetup() {
    if (!this.props.step) {
      return <div/>
    }

    return <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
      <CardActionButtons style={{ marginRight: '10px' }}>
        <Button
          onClick={this._restart}>
            Start again
        </Button>
      </CardActionButtons>
      <CardActionButtons style={{ marginLeft: '10px' }}>
        <Button
          onClick={this._skip}>
            Skip step
        </Button>
      </CardActionButtons>
    </CardActions>
  }

  renderSetupButton() {
    if (!this.props.step && this.state.setupDone) {
      return <div/>
    }

    if (this.isMobile) {
      return <Alert
        message="You need to login from your computer to setup your development environment"
        banner
        closable
      />
    }

    const setup = this.props.step
    const step = setup ? SetupData.steps[setup-1] : null

    const icon = setup ? 'fast_forward' : 'play_circle_filled'

    if (step && !step.action) {
      return <div/>
    }

    const action = setup ? step.action : `Let's Get Started`

    return <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
      <CardActionButtons>
        <Button
          raised
          onClick={this._start}
          theme='secondary-bg text-primary-on-secondary'>
          <ButtonIcon icon={icon} />
            { action }
        </Button>
      </CardActionButtons>
    </CardActions>
  }

  renderSetupTitle() {
    if (!this.props.step && this.state.setupDone) {
      return <Typography use='headline5' tag='div' style={{margin: "20px", color: "#00bcd4"}}>
        Woohoo, you did it!
      </Typography>
    }

    const setup = this.props.step
    const step = setup ? SetupData.steps[setup-1] : null
    const title = setup ? step.title : SetupData.intro.title

    return <Typography use='headline5' tag='div' style={{margin: "20px", color: "#00bcd4" }}>
      { title }
    </Typography>
  }

  renderSetupMessage() {
    if (!this.props.step && this.state.setupDone) {
      return <div/>
    }

    const setup = this.props.step
    const step = setup ? SetupData.steps[setup-1] : null
    const text = step ? ("object" === typeof step.text ? step.text[this.props.platformType] : step.text) : null
    const message = marked(text ? `${text}` : SetupData.intro.text)

    return <div dangerouslySetInnerHTML={{__html: `${message}`}} style={{textAlign: "justify"}}/>
  }

  render() {
    return <Fade>
            <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
              { this.renderSetupSteps() }
              { this.renderSetupTitle() }
              { this.renderSetupMessage() }
            </div>

            { this.renderSetupButton() }
            { this.renderRestartSetup() }
        </Fade>
  }
}
