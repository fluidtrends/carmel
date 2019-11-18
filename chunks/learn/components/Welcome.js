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
import WelcomeData from '../data/welcome.json'
import platform from 'platform'
import { Data } from 'react-chunky'

export default class Welcome extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
    this._start = this.start.bind(this)
  }


  start() {
    this.props.onStart && this.props.onStart()
  }

  renderButton() {
    const icon = WelcomeData.intro.icon
    const action = WelcomeData.intro.action

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

  renderTitle() {
    const setup = this.props.step
    const title = WelcomeData.intro.title

    return <Typography use='headline5' tag='div' style={{margin: "20px", color: "#00bcd4" }}>
      { title }
    </Typography>
  }

  renderMessage() {
    const message = marked(WelcomeData.intro.text)

    return <div dangerouslySetInnerHTML={{__html: `${message}`}} style={{textAlign: "justify"}}/>
  }

  render() {
    return <Fade>
            <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
              { this.renderTitle() }
              { this.renderMessage() }
            </div>

            { this.renderButton() }
        </Fade>
  }
}
