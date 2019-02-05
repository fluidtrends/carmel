import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col, message, Button, Icon, Card, List, Alert, Avatar, Tag } from 'antd'
import ChallengePlayground from './challengePlayground'
import ChallengeCard from './challengeCard'
import Task from './playground/task'
import Timeline from './challengeTimeline'
import { Data } from 'react-chunky'
import { Typography } from '@rmwc/typography'
import moment from 'moment'
import Bounce from 'react-reveal/Bounce'
import { Base64 } from 'js-base64'

export default class TaskScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasksStarted: false,
      time: 0,
       prettyTime: "00:00:00",
      challengeCompleted: false
    }
  }

  componentDidMount() {
    super.componentDidMount()

    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  renderIntro(width, padding) {
    return <div style={{
            display: 'flex',
            flex: 1,
            width,
            padding,
            paddingTop: 0,
            paddingBottom: 0,
            flexDirection: 'column'
          }}>
        <ChallengeCard
          minimal
          challenge={this.props.challenge}
        />
      </div>
  }

  startTimer() {
    if (this._timer || !this.props.journey.challenge.taskActive) {
      return
    }

    const startTime = parseInt(this.props.journey.challenge.taskStartTime)
    const taskTotalTime = parseInt(this.props.journey.challenge.taskTotalTime || 0)
    const startTotalTime = moment.duration(moment().diff(moment(startTime))).asMilliseconds() + taskTotalTime

    const since = startTotalTime
    const sec = 1000

    this._timer = setInterval(() => {
      const time = parseInt((this.state.time || since) + sec)
      const duration = moment.duration(time, 'milliseconds') / 1000
      const hh = parseInt(duration / 3600) % (24 * 3600)
      const mm = parseInt(duration / 60) % 3600
      const ss = parseInt(duration) % 60

      console.log(hh, mm, ss)

      const prettyTime = `${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}:${ss < 10 ? '0' : ''}${ss}`

      this.setState({ time, prettyTime })
    }, sec)
  }

  stopTimer() {
    if (!this._timer) {
      return
    }

    clearInterval(this._timer)
  }

  renderTimer() {
    if (!this.state.time) {
      return <div/>
    }

    return <Bounce>
      <Typography
        use="headline6"
        tag="div"
        style={{
          backgroundColor: "#FFEB3B",
          color: '#607D8B',
          padding: "5px"
        }}>
        {this.state.prettyTime}
      </Typography>
    </Bounce>
  }

  renderTitle() {
    const { journey, challenge } = this.props
    const title = `Task ${parseInt(journey.challenge.taskIndex) + 1} of ${challenge.tasks.length}`
    const task = this.props.challenge.tasks[this.props.journey.challenge.taskIndex]

    return <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}>
        <Typography
          use="headline6"
          tag="div"
          style={{
            color: '#455A64',
            display: "flex"
          }}>
          { title }:
        </Typography>
        <Typography
          use="headline6"
          style={{
            color: "#00BCD4",
            margin: "10px",
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            display: 'inline-block',
            flex: 1
          }}>
          { task.title }
        </Typography>
        { this.renderTimer() }
      </div>
  }

  renderFailurePrompt() {
    if (!this.props.journey || !this.props.journey.challenge || !this.props.journey.challenge.result || !this.props.journey.challenge.result.error) {
      return <div/>
    }

    const description = `${this.props.journey.challenge.result.error}. It's ok, don't worry about it, give it another shot :)`

    return <Alert
       style={{marginTop: "10px", }}
       message="Sorry, that didn't work"
       description={description}
       type="error"
       closable />
  }

  renderControls() {
    return <Typography
        use="caption"
        style={{
          color: "#00bcd4",
          textAlign: "center",
          padding: "20px"
        }}>
        <Button
          onClick={() => this.props.onPause(this.props.challenge)}
          style={{
            color: '#90A4AE',
            lineHeight: '15px',
            display: 'flex',
            margin: '20px auto 0',
            lineHeight: '28px',
            alignItems: 'center',
            backgroundColor: '#ECEFF1',
            border: 'none'
          }}>
          <Icon type="pause" />
          Pause Challenge
        </Button>
      </Typography>
  }

  renderTutorial(width, padding) {
    const sourceUrl = `https://raw.githubusercontent.com/${this.props.challenge.repo}/${this.props.challenge.hash}/${this.props.challenge.path ? this.props.challenge.path : '/'}`
    const taskTutorialFile = `${sourceUrl}/${this.props.journey.challenge.taskIndex}.tutorial.md`

    var input = {}

    try {
      input = JSON.parse(Base64.decode(this.props.journey.challenge.signature))
    } catch (e) {
      console.log(e)
    }

    return <div style={{
            display: 'flex',
            flex: 1,
            width,
            padding,
            flexDirection: 'column'}}>
        <Card title={this.renderTitle()}>
          <Components.Text source={taskTutorialFile} input={input}/>
        </Card>
        <Typography
          use="caption"
          style={{
            color: "#455A64",
            backgroundColor: "#FFEB3B",
            textAlign: "center",
            padding: "10px"
          }}>
          When done, type <strong> chunky carmel next </strong> to continue
        </Typography>
        {this.renderFailurePrompt() }
        {this.renderControls()}
      </div>
  }

  render() {
    const width = this.props.compact ? '95vw' : '700px'
    const padding = this.props.compact ? '5px' : '30px'

    return <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          overflow: 'hidden',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        { this.renderIntro(width, padding) }
         { this.renderTutorial(width, padding) }
      </div>
  }
}
