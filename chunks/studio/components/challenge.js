import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { List, Avatar, IconText, Progress, Tag, Rate, Spin, Icon, notification, Badge } from 'antd'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Elevation } from 'rmwc/Elevation'
import Task from './task'
import Shell from './shell'
import Prompt from './prompt'
const { Button: AntdButton } = require('antd')

const successMessagesJson = require('../../../assets/successMessages.json')
const errorMessagesJson = require('../../../assets/errorMessages.json')
const { successMessages } = successMessagesJson
const { errorMessages } = errorMessagesJson

export default class Challenge extends Component {
  constructor (props) {
    super(props)

    this.state = { ...this.state, taskIndex: 1, loading: true, started: false, verifyInProgress: false, showTaskDetails: false }
    this._shell = new Shell()
    this._goBack = this.goBack.bind(this)
    this._toggleStarted = this.toggleStarted.bind(this)
    this._verifyTask = this.verifyTask.bind(this)
    this._continueChallenge = this.continueChallenge.bind(this)
    this._startNextTask = this.startNextTask.bind(this)
    this._closeTaskDetails = this.closeTaskDetails.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get shell () {
    return this._shell
  }

  showTaskError (tip) {
    notification.open({
      icon: <Icon type='frown' style={{ color: '#f44336' }} />,
      message: this.errorMessage,
      description: tip
    })
  }

  showTaskSuccess (tip) {
    notification.open({
      icon: <Icon type='smile' style={{ color: '#4CAF50' }} />,
      message: this.successMessage
    })
  }

  goBack () {
    this.props.onBack && this.props.onBack()
  }

  get isStarted () {
    return this.state.started || this.props.started
  }

  get successMessage () {
    return successMessages[Math.floor(Math.random() * successMessages.length)]
  }

  get errorMessage () {
    return errorMessages[Math.floor(Math.random() * errorMessages.length)]
  }

  verifyTask () {
    const task = `starter/defineYourBrand/helloWorld/changeMenuTitle`
    this.setState({ verifyInProgress: true })

    this.shell.exec('verifyTask', { task })
              .then((result) => {
                if (!result.success) {
                  this.setState({ verifyInProgress: false })
                  this.showTaskError(result.tip)
                  return
                }
                this.setState({ verifyInProgress: false })
                this.showTaskSuccess()
              })
              .catch((error) => {
                this.setState({ verifyInProgress: false })
                this.showTaskError(error.message)
              })
  }

  startNextTask (nextTask) {
    this.state.tasks[this.state.activeTask - 1 ].completed = true
    this.setState({
      activeTask: nextTask,
      completedTask: false,
      tasks: this.state.tasks,
      finalTask: nextTask === this.state.tasksNumber ? true : false
    })
  }

  continueChallenge () {

  }

  toggleStarted () {
    const started = !this.state.started
    const taskIndex = started ? 2 : 1

    this.shell.cache('challengeId', started ? this.props.challenge.id : '')
    this.shell.cache('taskIndex', taskIndex)

    this.setState({ started, taskIndex })
  }

  closeTaskDetails () {
    this.setState({showTaskDetails: !this.state.showTaskDetails})
  }

  renderTask () {
    const { rewards, startedTasks, completedTask, activeTask, failedTask, tasks, tasksNumber, progress, successMessage, errorMessage, finalTask, showTaskDetails } = this.state
    const width = '100%'
    const padding = '20px'

    const { title, details, totalTasks } = this.props.challenge
    const currentTaskIndex = 0
    const percent = ((currentTaskIndex / (totalTasks - 1)) * 100)

    const dummyTasks = []

    for (let i = 1; i <= 5; i++) {
      dummyTasks.push({
        taskNumber: i,
        completed: false
      })
    }

    const currentChallengeId = '1'
    const currentTaskTitle = `This is the current task title`
    const currentTaskPrompt = `Task ${currentTaskIndex + 1} of ${totalTasks}: ${currentTaskTitle}`

    if (this.state.verifyInProgress) {
      return <Prompt
        subtitle={'Give me a sec to verify your work ...'}
        title={currentTaskPrompt}>
        <Typography use='title' tag='h2' style={{
          textAlign: 'center',
          color: '#B0BEC5' }}>
          <Icon type='loading' style={{fontSize: '20px', marginBottom: '20px'}} />
        </Typography>
      </Prompt>
    }

    return <Prompt
      title={currentTaskPrompt}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <AntdButton
          size={'small'}
          style={{margin: '10px', border: 'none', color: '#039BE5' }}
          onClick={this._showPreviousTask}>
          <Icon type='arrow-left' /> Previous
        </AntdButton>
        <AntdButton
          type='primary'
          size={'large'}
          style={{margin: '10px'}}
          onClick={this._verifyTask}>
          <Icon type='play-circle' /> Verify
          </AntdButton>
        <AntdButton
          size={'small'}
          style={{margin: '10px', border: 'none', color: '#039BE5' }}
          onClick={this._showTutorial}>
          <Icon type='question-circle' /> Tutorial
        </AntdButton>
      </div>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '0px',
        marginTop: '10px',
        borderTop: '1px solid #fafafa',
        width: '100%'
      }}>
        <Typography use='body2' tag='h2' style={{
          textAlign: 'center',
          color: '#B0BEC5',
          flex: 1 }}>
          <AntdButton
            size={'small'}
            style={{margin: '10px', color: '#fafafa', backgroundColor: `${this.isStarted ? '#f44336' : '#ef5350'}`}}
            onClick={this._toggleStarted}>
            <Icon type='pause-circle' />
          </AntdButton>
          { this.props.challenge.title }
        </Typography>
      </div>
    </Prompt>
  }

  isTaskComplete (task) {
    return (task.index < this.state.taskIndex)
  }

  isCurrentTask (task) {
    return (task.index === this.state.taskIndex)
  }

  renderTaskTitle (task) {
    const textDecoration = this.isTaskComplete(task) ? 'line-through' : 'none'
    const color = this.isTaskComplete(task) ? '#78909C' : (this.isCurrentTask(task) ? '#00bcd4' : '#CFD8DC')

    return <Typography use='body1' tag='h2' style={{
      textAlign: 'left',
      textDecoration,
      color
    }}>
      { task.title }
    </Typography>
  }

  renderTaskIcon (task) {
    // const icon = task.complete && this.state.started ? 'check-circle' : 'right'
    // const iconColor = task.complete && this.state.started ? '#4CAF50' : '#78909C'
    // // return <Icon type={icon} style={{
    // //   fontSize: 18,
    // //   color: iconColor,
    // //   marginLeft: '10px'
    // // }} />

    const backgroundColor = this.isTaskComplete(task) ? '#78909C' : (this.isCurrentTask(task) ? '#00bcd4' : '#F5F5F5')
    const color = this.isTaskComplete(task) ? '#fafafa' : (this.isCurrentTask(task) ? '#ffffff' : '#CFD8DC')

    return <Avatar size='small' style={{
      backgroundColor,
      color
    }}>
      { task.index}
    </Avatar>
  }

  renderTaskSummary (task) {
    return <List.Item>
      <List.Item.Meta
        avatar={this.renderTaskIcon(task)}
        title={this.renderTaskTitle(task)} />
    </List.Item>
  }

  renderContent () {
    // if (this.isStarted) {
    //   return this.renderTask()
    // }

    return <Prompt
      subtitle={this.props.challenge.summary}
      title={this.props.challenge.title}>

      <ChipSet style={{ textAlign: 'left', marginBottom: '20px' }}>
        { this.props.challenge.skills.map(skill => <Chip><ChipText> { skill } </ChipText></Chip>) }
      </ChipSet>

      <List
        style={{
          marginLeft: '10px'
        }}
        itemLayout='horizontal'
        dataSource={this.props.challenge.tasks}
        renderItem={item => this.renderTaskSummary(item)}
      />
      <Button
        style={{
          margin: '10px',
          color: '#ffffff',
          marginBottom: '20px',
          backgroundColor: `${this.isStarted ? '#03A9F4' : '#4CAF50'}`
        }}
        onClick={this.isStarted ? this._continueChallenge : this._toggleStarted}>
        <ButtonIcon use={this.isStarted ? 'forward' : 'play_circle_filled'} />
        { this.isStarted ? 'Continue' : 'Start' } Challenge
      </Button>
    </Prompt>
  }

  renderFooter () {
    return <Typography use='title' tag='h2' style={{ marginTop: '20px', textAlign: 'center' }}>
      <Button onClick={this.isStarted ? this._toggleStarted : this._goBack}>
        { this.isStarted ? `Stop taking this challenge` : `Choose another challenge` }
      </Button>
    </Typography>
  }

  render () {
    return <div>
      { this.renderContent() }
      { this.renderFooter() }
    </div>
  }

}
