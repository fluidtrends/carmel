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

    this.state = Object.assign({}, { ...this.state, taskIndex: 1 },
      props.task && { started: true, taskIndex: props.task.index, task: props.task })
    this._shell = new Shell()
    this._goBack = this.goBack.bind(this)
    this._toggleStarted = this.toggleStarted.bind(this)
    this._onShowChallenge = this.onShowChallenge.bind(this)
    this._continueChallenge = this.continueChallenge.bind(this)
    this._onOpenFile = this.onOpenFile.bind(this)
    this._onTaskCompleted = this.onTaskCompleted.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onOpenFile () {
    this.props.onOpenFile && this.props.onOpenFile()
  }

  get shell () {
    return this._shell
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

  continueChallenge () {
    const task = this.props.challenge.tasks[this.state.taskIndex - 1]
    this.setState({ showTask: true, task })
    this.props.onShowTask && this.props.onShowTask(task)
  }

  onShowChallenge () {
    this.setState({ showTask: false })
    this.props.onHideTask && this.props.onHideTask()
  }

  onTaskCompleted () {
    const taskIndex = this.state.taskIndex + 1

    if (taskIndex > this.props.challenge.tasks.length) {
      this.setState({ showTask: false, task: false, taskIndex, complete: true, started: false })
      this.shell.cache('challengeId', '')
      this.shell.cache('taskId', '')
      this.shell.cache('completedChallengesIds', [this.props.challenge.id], { push: true })
      return
    }

    const task = this.props.challenge.tasks[taskIndex - 1]
    this.setState({ showTask: false, task, taskIndex })
    this.shell.cache('taskId', task.id)
  }

  toggleStarted () {
    const started = !this.state.started
    const taskIndex = 1
    const task = this.props.challenge.tasks[taskIndex - 1]

    this.shell.cache('challengeId', started ? this.props.challenge.id : '')
    this.shell.cache('taskId', started ? task.id : '')

    this.setState({ started, taskIndex, task, showTask: started })
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

    return <Typography use='body1' style={{
      textAlign: 'left',
      textDecoration,
      color
    }}>
      { task.title }
    </Typography>
  }

  renderTaskIcon (task) {
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

  renderPrice () {
    if (this.isStarted || this.state.complete) {
      return <div />
    }

    return <Typography use='title' style={{
      textAlign: 'center',
      margin: '10px',
      color: '#4CAF50'
    }}>
      { this.price } CARMEL
    </Typography>
  }

  get rate () {
    return 1
  }

  get price () {
    return ((this.props.challenge.level + 1) * 5 / this.rate).toFixed(2)
  }

  renderMainAction () {
    if (this.state.complete) {
      return <Typography use='title' style={{
        textAlign: 'center',
        margin: '10px',
        color: '#4CAF50'
      }}>
        Congratulations, you did it!
        </Typography>
    }

    return <Button
      style={{
        marginBottom: '10px',
        color: '#ffffff',
        marginBottom: '20px',
        backgroundColor: `${this.isStarted ? '#03A9F4' : '#4CAF50'}`
      }}
      onClick={this.isStarted ? this._continueChallenge : this._toggleStarted}>
      <ButtonIcon use={this.isStarted ? 'forward' : 'play_circle_filled'} />
      { this.isStarted ? 'Continue' : 'Buy' } Challenge
    </Button>
  }

  renderContent () {
    if (this.state.showTask) {
      return <Task
        onSuccess={this._onTaskCompleted}
        onOpenFile={this._onOpenFile}
        onShowChallenge={this._onShowChallenge}
        challenge={this.props.challenge}
        product={this.props.product}
        task={this.state.task} />
    }

    const xp = (this.props.challenge.level + 1) * 5

    return <Prompt
      subtitle={this.props.challenge.summary}
      title={this.props.challenge.title}>

      <ChipSet style={{ textAlign: 'left', marginBottom: '20px' }}>
        { this.props.challenge.skills.map(skill => <Chip key={skill} style={{ backgroundColor: '#03A9F4', color: '#ffffff'}}>
          <ChipText> { skill } </ChipText></Chip>)
        }
        <Chip style={{
          backgroundColor: '#4CAF50', color: '#ffffff'
        }} key='xp'>
          <ChipText>
            { xp } XP
        </ChipText>
        </Chip>
      </ChipSet>

      <List
        style={{
          marginLeft: '10px'
        }}
        itemLayout='horizontal'
        dataSource={this.props.challenge.tasks}
        renderItem={item => this.renderTaskSummary(item)}
      />
      { this.renderPrice() }
      { this.renderMainAction() }
    </Prompt>
  }

  renderFooter () {
    if (this.state.showTask) {
      return <div />
    }

    const title = this.isStarted ? `Stop taking this challenge` : `Choose another challenge`
    const action = this.isStarted ? this._toggleStarted : this._goBack
    const icon = this.isStarted ? 'pause' : 'arrow_back'

    return <Typography use='title' tag='h2' style={{ marginTop: '20px', textAlign: 'center' }}>
      <Button onClick={action}>
        <ButtonIcon use={icon} />
        { title }
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
