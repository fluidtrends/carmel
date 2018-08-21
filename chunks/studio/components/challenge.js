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
const successMessagesJson = require('../../../assets/successMessages.json')
const errorMessagesJson = require('../../../assets/errorMessages.json')
const { successMessages } = successMessagesJson
const { errorMessages } = errorMessagesJson

export default class Challenge extends Component {
  constructor (props) {
    super(props)

    this.state = { ...this.state, loading: true, started: false, verifyInProgress: false, showTaskDetails: false }
    this._shell = new Shell()
    this._startChallenge = this.startChallenge.bind(this)
    this._goBack = this.goBack.bind(this)
    this._stop = this.stop.bind(this)
    this._verifyTask = this.verifyTask.bind(this)
    this._startNextTask = this.startNextTask.bind(this)
    this._closeTaskDetails = this.closeTaskDetails.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
    this.reload()
  }

  get shell () {
    return this._shell
  }

  reload () {
    this.props.importRemoteData(this.props.challenge.content.json).then(data => {
      const { rewards, author, level, tags, rating, quest, challenge, tasksNumber } = data
      this.setState({
        rewards,
        author,
        level,
        tags,
        rating,
        quest,
        challenge,
        tasksNumber
      })
    })
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

  get task () {
    return {

    }
  }

  goBack () {
    this.props.onBack && this.props.onBack()
  }

  get isStarted () {
    return this.state.started || this.props.started
  }

  stop () {
    this.setState({ started: false })
    this.props.onStop && this.props.onStop()
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

  // verifyTask2 (task) {
  //   this.setState({ verifyInProgress: true })
  //   const { quest, challenge, finalTask } = this.state
  //   const successMessagesJson = require('../../../assets/successMessages.json')
  //   const errorMessagesJson = require('../../../assets/errorMessages.json')
  //   const { successMessages } = successMessagesJson
  //   const { errorMessages } = errorMessagesJson
  //   const successMessage = successMessages[Math.floor(Math.random() * successMessages.length)]
  //   const errorMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)]
  //
  //   setTimeout(() => {
  //     this.shell.exec('verifyTask', { task, challenge: this.props.challenge }, (data) => {
  //       console.log(data)
  //     })
  //     .then((result) => {
  //       notification.success({
  //         message: successMessage
  //       })
  //       this.setState({
  //         completedTask: true,
  //         successMessage,
  //         verifyInProgress: false
  //       })
  //       if (finalTask) {
  //         this.state.tasks[this.state.activeTask - 1 ].completed = true
  //       }
  //     })
  //     .catch((error) => {
  //       notification.error({
  //         message: errorMessage
  //       })
  //       this.setState({
  //         failedTask: true,
  //         errorMessage,
  //         verifyInProgress: false
  //       })
  //     })
  //   }, 500)
  // }

  startNextTask (nextTask) {
    this.state.tasks[this.state.activeTask - 1 ].completed = true
    this.setState({
      activeTask: nextTask,
      completedTask: false,
      tasks: this.state.tasks,
      finalTask: nextTask === this.state.tasksNumber ? true : false
    })
  }

  startChallenge () {
    this.setState({ started: true })

    const tasks = []
    for (let i = 1; i <= this.state.tasksNumber; i++) {
      tasks.push({
        taskNumber: i,
        completed: false
      })
    }

    this.setState({
      startedTasks: true,
      progress: this.state.progress ? this.state.progress : 0,
      activeTask: this.state.activeTask ? this.state.activeTask : 1,
      tasks
    })

    this.props.onStartChallenge && this.props.onStartChallenge(this.props.challenge)
  }

  closeTaskDetails () {
    this.setState({showTaskDetails: !this.state.showTaskDetails})
  }

  // <Task
  //   activeTask={1}
  //   tasksNumber={5}
  //   width={'100%'}
  //   completedTask={false}
  //   failedTask={false}
  //   padding={'20px'}
  //   tasks={dummyTasks}
  //   progress={0}
  //   finalTask={false}
  //   showDrawer={showTaskDetails}
  //   successMessage={'uhu'}
  //   errorMessage={'nopeeeee'}
  //   showChallenge={this._stop}
  //   content={''}
  //   verifyTask={this._verifyTask}
  //   startNextTask={this._startNextTask}
  //   goBack={this._stop}
  //   closeTaskDetails={this._closeTaskDetails}
  // />

  renderTask () {
    const { rewards, startedTasks, completedTask, activeTask, failedTask, tasks, tasksNumber, progress, successMessage, errorMessage, finalTask, showTaskDetails } = this.state
    const width = '100%'
    const padding = '20px'
    const { Button: AntdButton } = require('antd')

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
            style={{margin: '10px', color: '#fafafa', backgroundColor: '#ef5350'}}
            onClick={this._stop}>
            <Icon type='pause-circle' />
          </AntdButton>
          { this.props.challenge.title }
        </Typography>
      </div>
    </Prompt>

    // return <Card style={{ margin: '0px', padding: '20px' }}>
    //   <h2>STARTED!!!!!!!!!!</h2>
    //   <CardActions style={{ justifyContent: 'center', marginTop: '20px' }}>
    //     <CardActionButtons style={{ marginLeft: '10px' }}>
    //       <Typography use='title' tag='h2' style={{ textAlign: 'center' }}>
    //         <Button raised theme='secondary-bg on-secondary' onClick={this._startChallenge}>
    //           STOP this challenge
    //         </Button>
    //       </Typography>
    //     </CardActionButtons>
    //   </CardActions>
    // </Card>
    // return <Task
    //   activeTask={activeTask}
    //   tasksNumber={tasksNumber}
    //   width={width}
    //   completedTask={completedTask}
    //   failedTask={failedTask}
    //   padding={padding}
    //   tasks={tasks}
    //   progress={progress}
    //   finalTask={finalTask}
    //   successMessage={successMessage}
    //   errorMessage={errorMessage}
    //   showChallenge={this._stop}
    //   content={this.props.challenge.content}
    //   verifyTask={this._verifyTask}
    //   startNextTask={this._startNextTask}
    //   goBack={this._stop} />
  }

  renderTutorial () {
    return <Components.Text source={this.props.challenge.content.tasks} style={{width: '100%', textAlign: 'left'}} />
  }

  renderContent () {
    if (!this.state.rewards) {
      return <div />
    }

    // if (this.state.verifyInProgress) {
    //   return <p>verifying ...</p>
    // }

    if (this.isStarted) {
      return this.renderTask()
    }

    return <Prompt
      subtitle={this.props.challenge.details}
      title={this.props.challenge.title}>

      <Typography use='body2' tag='h2' style={{ textAlign: 'center' }}>
          By doing this you will acquire the following rewards:
      </Typography>

      <div style={{display: 'flex', flexDirection: 'row'}}>
        {
          this.state.rewards.map((reward, i) =>
            <span key={i} style={{fontStyle: 'italic', fontSize: 16}}>
              {!!i && ', '}
              {reward}
            </span>
          )
        }
      </div>
      <div style={{marginBottom: 20, marginTop: 20}}>
        <Icon type='user' style={{fontSize: 18, marginRight: 10}} />
        <span style={{fontSize: 16}}>{this.state.author}</span>
      </div>
      <div>
        <Icon type='code' style={{fontSize: 18, marginRight: 10}} />
        <span style={{fontSize: 16}}>{this.state.level}</span>
      </div>
      <div style={{marginBottom: 20, marginTop: 20}}>
        {
          this.state.tags.map((tag, i) =>
            <Tag key={`tag-${i}`}>{tag}</Tag>
          )
        }
      </div>
      <div style={{marginBottom: 20, marginTop: 20}}>
        <Rate allowHalf disabled value={parseFloat(this.state.rating)} />
      </div>
      { this.renderTutorial() }
      <CardActions style={{ justifyContent: 'center', marginTop: '20px' }}>
        <CardActionButtons style={{ marginLeft: '10px' }}>
          <Typography use='title' tag='h2' style={{ textAlign: 'center' }}>
            <Button raised theme='secondary-bg on-secondary' onClick={this._startChallenge}>
              Take this challenge
            </Button>
          </Typography>
        </CardActionButtons>
      </CardActions>
    </Prompt>
  }

  renderFooter () {
    if (this.isStarted) {
      return <div />
    }

    return <Typography use='title' tag='h2' style={{ marginTop: '20px', textAlign: 'center' }}>
      <Button onClick={this._goBack}>
        See all challenges
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
