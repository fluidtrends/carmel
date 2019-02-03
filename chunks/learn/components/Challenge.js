import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col, message, Button, Icon, Card, List, Avatar, Tag } from 'antd'
import ChallengePlayground from './challengePlayground'
import ChallengeCard from './challengeCard'
import Task from './playground/task'
import Timeline from './challengeTimeline'
import { Data } from 'react-chunky'
import { Typography } from '@rmwc/typography'

export default class Challenge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasksStarted: false,
      challengeCompleted: false
    }
  }

  componentDidMount() {
    super.componentDidMount()
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

  renderTask(task, index) {
    // const next =
    var iconBackgroundColor = "#00bcd4"
    var iconColor = "#ffffff"
    var titleColor = "#00bcd4"
    var tagColor = "blue"
    var tagTitle = "next"
    var hideTag = false

    if (this.props.journey && this.props.journey.challenge) {
      const taskIndex = this.props.journey.challenge.taskIndex || 0
      if (taskIndex < index-1) {
        iconColor = "#CFD8DC"
        iconBackgroundColor = "#ECEFF1"
        titleColor = "#CFD8DC"
        hideTag = true
      } else if (taskIndex > index - 1) {
        iconColor = "#ffffff"
        iconBackgroundColor = "#66BB6A"
        titleColor = "#66BB6A"
        tagColor = "green"
        tagTitle = "pass"
      }
    }

    return  <List.Item>
      <List.Item.Meta
        avatar={<Avatar
              size="small"
              style={{ backgroundColor: iconBackgroundColor, color: iconColor }}>
              {index}
            </Avatar>}
        title={ <Typography
              use="body1"
              style={{ textAlign: 'left', color: titleColor }}>
              { hideTag || <Tag color={tagColor}>{tagTitle}</Tag>}
              {task.title}
            </Typography>}
      />
    </List.Item>
  }

  renderNextPrompt() {
    if (!this.props.journey || !this.props.journey.challenge) {
      return <div/>
    }

    return <Typography
      use="caption"
      style={{
        color: "#455A64",
        backgroundColor: "#FFEB3B",
        textAlign: "center",
        padding: "10px"
      }}>
      When ready, type <strong> chunky carmel next </strong> to continue
    </Typography>
  }

  renderActionButton() {
    if (this.props.journey && this.props.journey.challenge) {
      return <div/>
    }

    return <Button
      onClick={() => this.props.onSelectChallenge(this.props.challenge)}
      style={{
        color: '#ffffff',
        lineHeight: '15px',
        display: 'flex',
        margin: '20px auto 0',
        lineHeight: '28px',
        alignItems: 'center',
        backgroundColor: '#00bcd4',
        border: 'none'
      }}>
      Start Challenge
      <Icon type="step-forward" />
    </Button>
  }

  renderTasks(width, padding) {
    const { challenge } = this.props
    const { tasks } = challenge
    var index = 1

    return <div  style={{
            display: 'flex',
            flex: 1,
            width,
            padding,
            flexDirection: 'column'}}>
        <Card title={'Tasks'}>
          {tasks.map(t => this.renderTask(t, index++))}
          { this.renderActionButton() }
        </Card>
        { this.renderNextPrompt() }
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
         { this.renderTasks(width, padding) }
      </div>
  }
}
