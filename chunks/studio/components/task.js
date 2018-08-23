import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { List, Avatar, IconText, Popover, Progress, Tag, Rate, Spin, Icon, notification, Badge } from 'antd'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Elevation } from 'rmwc/Elevation'
import Shell from './shell'
import Prompt from './prompt'
const { Button: AntdButton } = require('antd')

const successMessagesJson = require('../../../assets/successMessages.json')
const errorMessagesJson = require('../../../assets/errorMessages.json')
const { successMessages } = successMessagesJson
const { errorMessages } = errorMessagesJson

export default class Task extends Component {
  constructor (props) {
    super(props)

    this.state = { ...this.state, taskIndex: 1, loading: true, started: false, verifyInProgress: false, showTaskDetails: false }
    this._shell = new Shell()
    this._onShowChallenge = this.onShowChallenge.bind(this)
    this._onOpenFile = this.onOpenFile.bind(this)
    // this._verifyTask = this.verifyTask.bind(this)
    // this._startNextTask = this.startNextTask.bind(this)
    // this._closeTaskDetails = this.closeTaskDetails.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onShowChallenge () {
    this.props.onShowChallenge && this.props.onShowChallenge()
  }

  onOpenFile () {
    this.props.onOpenFile && this.props.onOpenFile()
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

  get successMessage () {
    return successMessages[Math.floor(Math.random() * successMessages.length)]
  }

  get errorMessage () {
    return errorMessages[Math.floor(Math.random() * errorMessages.length)]
  }

  // verifyTask () {
  //   const task = `starter/defineYourBrand/helloWorld/changeMenuTitle`
  //   this.setState({ verifyInProgress: true })
  //
  //   this.shell.exec('verifyTask', { task })
  //             .then((result) => {
  //               if (!result.success) {
  //                 this.setState({ verifyInProgress: false })
  //                 this.showTaskError(result.tip)
  //                 return
  //               }
  //               this.setState({ verifyInProgress: false })
  //               this.showTaskSuccess()
  //             })
  //             .catch((error) => {
  //               this.setState({ verifyInProgress: false })
  //               this.showTaskError(error.message)
  //             })
  // }

  // startNextTask (nextTask) {
  //   this.state.tasks[this.state.activeTask - 1 ].completed = true
  //   this.setState({
  //     activeTask: nextTask,
  //     completedTask: false,
  //     tasks: this.state.tasks,
  //     finalTask: nextTask === this.state.tasksNumber ? true : false
  //   })
  // }

  // closeTaskDetails () {
  //   this.setState({showTaskDetails: !this.state.showTaskDetails})
  // }

  // renderTask () {
  //   const { rewards, startedTasks, completedTask, activeTask, failedTask, tasks, tasksNumber, progress, successMessage, errorMessage, finalTask, showTaskDetails } = this.state
  //   const width = '100%'
  //   const padding = '20px'
  //
  //   const { title, details, totalTasks } = this.props.challenge
  //   const currentTaskIndex = 0
  //   const percent = ((currentTaskIndex / (totalTasks - 1)) * 100)
  //
  //   const dummyTasks = []
  //
  //   for (let i = 1; i <= 5; i++) {
  //     dummyTasks.push({
  //       taskNumber: i,
  //       completed: false
  //     })
  //   }
  //
  //   const currentChallengeId = '1'
  //   const currentTaskTitle = `This is the current task title`
  //   const currentTaskPrompt = `Task ${currentTaskIndex + 1} of ${totalTasks}: ${currentTaskTitle}`
  //
  //   if (this.state.verifyInProgress) {
  //     return <Prompt
  //       subtitle={'Give me a sec to verify your work ...'}
  //       title={currentTaskPrompt}>
  //       <Typography use='title' tag='h2' style={{
  //         textAlign: 'center',
  //         color: '#B0BEC5' }}>
  //         <Icon type='loading' style={{fontSize: '20px', marginBottom: '20px'}} />
  //       </Typography>
  //     </Prompt>
  //   }
  //
  //   return <Prompt
  //     title={currentTaskPrompt}>
  //     <div style={{
  //       display: 'flex',
  //       flexDirection: 'row',
  //       flex: 1,
  //       width: '100%',
  //       justifyContent: 'center',
  //       alignItems: 'center'
  //     }}>
  //       <AntdButton
  //         size={'small'}
  //         style={{margin: '10px', border: 'none', color: '#039BE5' }}
  //         onClick={this._showPreviousTask}>
  //         <Icon type='arrow-left' /> Previous
  //       </AntdButton>
  //       <AntdButton
  //         type='primary'
  //         size={'large'}
  //         style={{margin: '10px'}}
  //         onClick={this._verifyTask}>
  //         <Icon type='play-circle' /> Verify
  //         </AntdButton>
  //       <AntdButton
  //         size={'small'}
  //         style={{margin: '10px', border: 'none', color: '#039BE5' }}
  //         onClick={this._showTutorial}>
  //         <Icon type='question-circle' /> Tutorial
  //       </AntdButton>
  //     </div>
  //     <div style={{
  //       backgroundColor: '#ffffff',
  //       padding: '0px',
  //       marginTop: '10px',
  //       borderTop: '1px solid #fafafa',
  //       width: '100%'
  //     }}>
  //       <Typography use='body2' tag='h2' style={{
  //         textAlign: 'center',
  //         color: '#B0BEC5',
  //         flex: 1 }}>
  //         <AntdButton
  //           size={'small'}
  //           style={{margin: '10px', color: '#fafafa', backgroundColor: `${this.isStarted ? '#f44336' : '#ef5350'}`}}
  //           onClick={this._toggleStarted}>
  //           <Icon type='pause-circle' />
  //         </AntdButton>
  //         { this.props.challenge.title }
  //       </Typography>
  //     </div>
  //   </Prompt>
  // }

  renderContent () {
    const popup = <Typography use='body1' style={{
      textAlign: 'left',
      color: '#78909C',
      padding: '20px'
    }}>
      <Icon type='question-circle' style={{
        color: '#78909C',
        padding: '10px'
      }} />
      { this.props.task.help}
    </Typography>

    return <Prompt>
      <Typography use='title' style={{
        textAlign: 'left',
        color: '#00bcd4'
      }}>
        <Avatar size='small' style={{
          backgroundColor: '#00bcd4',
          color: '#ffffff',
          marginTop: '-5px',
          marginRight: '10px'
        }}>
          { this.props.task.index}
        </Avatar>
        { this.props.task.title }
      </Typography>

      <Typography use='body1' style={{
        textAlign: 'left',
        color: '#78909C',
        margin: '10px'
      }}>
        { this.props.task.instructions}
        <Popover content={popup}>
          <Icon type='question-circle' style={{
            color: '#78909C',
            padding: '10px'
          }} />
        </Popover>
      </Typography>

      <Button
        style={{
          margin: '10px',
          color: '#ffffff',
          marginBottom: '20px',
          backgroundColor: `#4CAF50`
        }}>
        <ButtonIcon use={'check'} /> Verify Task
      </Button>
    </Prompt>
  }

  renderFooter () {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }}>
      <Typography use='title' tag='h2' style={{
        marginTop: '20px',
        flex: 1,
        textAlign: 'left'
      }}>
        <Button onClick={this._onShowChallenge}>
          <ButtonIcon use='arrow_back' />
          Go back to the challenge
        </Button>
      </Typography>
      <Typography use='title' tag='h2' style={{
        marginTop: '20px',
        flex: 1,
        textAlign: 'right'
      }}>
        <Button onClick={this._onOpenFile}>
          <ButtonIcon use='file_copy' />
          Open Source Code
        </Button>
      </Typography>
    </div>
  }

  render () {
    return <div>
      { this.renderContent() }
      { this.renderFooter() }
    </div>
  }

}
