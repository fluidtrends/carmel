import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col, message, Button, Icon, Card, List, Avatar } from 'antd'
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
      selectedTask: null,
      challengeCompleted: false,
      editorValue: null,
      taskIndex: 1
    }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  isTaskComplete(task) {
    return task.index < this.state.taskIndex
  }

  isCurrentTask(task) {
    return task.index === this.state.taskIndex
  }

  toggleStarted = () => {
    this.setState({
      tasksStarted: !this.state.tasksStarted,
      selectedTask: !this.state.tasksStarted ? this.state.taskIndex : null
    })
    this.props.pushActivity(this.state.selectedTask)
  }

  renderIntro(challengeId) {
    // const text = require(`assets/text/challenges/${challengeId}.md`)

    return (
      <div
        style={{
          display: 'flex',
          maxWidth: '100%',
          justifyContent: 'center',
          marginTop: '50px',
          flexDirection: 'column'
        }}
      >
        <Col span={12} offset={6}>
          <ChallengeCard
            hideButton
            challenge={require(`../../../challenges/${challengeId}/index.json`)}
          />
        </Col>
        <Col
          span={6}
          offset={9}
          style={{ marginTop: '20px', marginBottom: '20px' }}
        >
          <Timeline />
        </Col>
        {/* {text && (
          <Components.Text
            source={`local://challenges/${challengeId}`}
            style={{ maxWidth: '100%' }}
          />
        )} */}
      </div>
    )
  }
  renderTaskTitle(task) {
    const textDecoration = this.isTaskComplete(task) ? 'line-through' : 'none'
    const color = this.isTaskComplete(task)
      ? '#78909C'
      : this.isCurrentTask(task)
      ? '#00bcd4'
      : '#CFD8DC'

    return (
      <Typography
        use="body1"
        style={{
          textAlign: 'left',
          textDecoration,
          color
        }}
      >
        {task.title}
      </Typography>
    )
  }

  renderTaskIcon(task) {
    const backgroundColor = this.isTaskComplete(task)
      ? '#78909C'
      : this.isCurrentTask(task)
      ? '#00bcd4'
      : '#F5F5F5'
    const color = this.isTaskComplete(task)
      ? '#fafafa'
      : this.isCurrentTask(task)
      ? '#ffffff'
      : '#CFD8DC'

    return (
      <Avatar
        size="small"
        style={{
          backgroundColor,
          color
        }}
      >
        {task.index}
      </Avatar>
    )
  }
  renderMainAction() {
    // if (this.isCompleted) {
    //   return <div style={{
    //     display: 'flex',
    //     flex: 1,
    //     flexDirection: 'column',
    //     backgroundColor: '#FAFAFA',
    //     justifyContent: 'center',
    //     padding: '20px'
    //   }}>
    //     <Typography use='caption' style={{
    //       textAlign: 'center',
    //       color: '#B0BEC5',
    //       paddingBottom: '10px'
    //     }}>
    //     How did you like this challenge?
    //   </Typography>
    //     <Typography use='caption' style={{
    //       textAlign: 'center'}}>
    //       <Rate onChange={this._onChallengeRated} />
    //     </Typography>
    //   </div>
    // }
    return (
      // <div
      //   style={{
      //     display: 'flex',
      //     flex: 1,
      //     flexDirection: 'row',
      //     justifyContent: 'center',
      //     padding: '20px'
      //   }}
      // >
      <Button
        style={{
          color: '#ffffff',
          backgroundColor: `${this.state.tasksStarted ? '#03A9F4' : '#00bcd4'}`
        }}
        onClick={() => this.toggleStarted()}
      >
        {this.state.tasksStarted ? 'Keep Going' : 'Start Challenge'}
      </Button>
      // </div>
    )
  }
  renderTasks() {
    const { challenge } = this.props
    const { taskIds } = challenge

    return (
      <Col span={12} offset={6}>
        <Card title={'Tasks'}>
          {this.state.selectedTask
            ? this.showTask()
            : taskIds.map(task => this.renderTaskSummary(task))}
          <Button
            style={{
              color: '#ffffff',
              lineHeight: '15px',
              display: 'flex',
              margin: '20px auto 0',
              lineHeight: '28px',
              alignItems: 'center',
              backgroundColor: `${
                this.state.tasksStarted ? '#03A9F4' : '#00bcd4'
              }`,
              border: 'none'
            }}
            onClick={() => this.toggleStarted()}
          >
            {this.state.tasksStarted ? 'Pause Challenge' : 'Start Challenge'}
            {this.state.tasksStarted ? (
              <Icon type="pause" />
            ) : (
              <Icon type="step-forward" />
            )}
          </Button>
        </Card>
      </Col>
    )
  }
  showTask() {
    // -1 because array and index
    const task = require(`challenges/${this.props.challengeId}/index.json`)
      .taskIds[this.state.selectedTask - 1]
    return (
      <Task
        task={require(`challenges/${
          this.props.challengeId
        }/${task}/index.json`)}
      />
    )
  }
  renderTaskSummary(task) {
    const taskData = require(`challenges/${
      this.props.challengeId
    }/${task}/index.json`)
    return (
      <List.Item>
        <List.Item.Meta
          avatar={this.renderTaskIcon(taskData)}
          title={this.renderTaskTitle(taskData)}
        />
      </List.Item>
    )
  }
  renderChallenge() {
    const { challengeId, challenge } = this.props
    const { type } = challenge
    if (type === 'playground') {
      return (
        <ChallengePlayground
          challenge={challenge}
          defaults={require(`../data/${challengeId}.json`)}
          updateValue={editorValue => this.setState({ editorValue })}
        />
      )
    }
  }

  renderInitialChallenge() {
    const initialChallenge = require(`challenges/initial/index.json`)
    return (
      <ChallengePlayground
        challenge={initialChallenge}
        defaults={require('../data/initial.json')}
        initial
        updateValue={editorValue => this.setState({ editorValue })}
      />
    )
  }

  verifyTask = () => {
    const { challengeId } = this.props
    const { editorValue } = this.state
    message.loading('Verifying your task ...')
    if (challengeId === 'initial') {
      // no changes has been made to the editor
      if (!editorValue) {
        // randomize this with an array
        message.destroy()
        message.error('I know you can!')
        return
      }
      if (JSON.stringify(editorValue) === JSON.stringify(this.state.initial)) {
        message.destroy()
        message.error('Come on, I believe in you!')
        return
      } else {
        Data.Cache.cacheItem('initialChallengeCompleted', true).then(() => {
          this.setState({
            challengeCompleted: true,
            selectedTask: null
          })
        })
      }
    } else {
      console.log(editorValue)
      // call api for verifying other tasks
    }
  }

  renderButtons() {
    return (
      <Col style={{ padding: '20px' }} span={12} offset={6}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100px',
            alignItems: 'center'
          }}
        >
          <Button
            onClick={() => this.props.showChallenges()}
            style={{
              display: 'flex',
              color: '#ffffff',
              backgroundColor: '#006064',
              border: 'none',
              margin: '10px auto 0',
              height: '35px',
              lineHeight: '15px'
            }}
          >
            <Icon type="arrow-left" />
            Choose another challenge
          </Button>
        </div>
      </Col>
    )
  }

  showSuccess() {
    // maybe generate random success msgs
    const { challengeId } = this.props

    return (
      <div style={{ marginTop: '30px' }}>
        {challengeId === 'initial' ? (
          <React.Fragment>
            <h1>Congrats!</h1>
            <h2>Is that easy to be a developer with the help of Carmel</h2>
            <h2>Now let's do more challenges</h2>
            <Button
              onClick={() => this.props.showChallenges()}
              style={{
                display: 'flex',
                color: '#ffffff',
                backgroundColor: '#006064',
                border: 'none',
                margin: '10px auto 0',
                height: '35px',
                lineHeight: '15px'
              }}
            >
              <Icon type="arrow-left" />
              Go to challenges
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1>Congrats!</h1>
            <h2>You completed the {challengeId} challenge !</h2>
            <h2>More challenges are waiting to be completed</h2>
          </React.Fragment>
        )}
      </div>
    )
  }

  render() {
    const { challengeId } = this.props
    if (this.state.challengeCompleted) {
      return this.showSuccess()
    }
    return [
      this.renderIntro(challengeId),
      this.renderTasks(),
      this.renderChallenge(),
      this.renderButtons()
    ]
  }
}
