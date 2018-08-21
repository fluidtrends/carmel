import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, Icon, Tag, Rate, Spin } from 'antd'
import TaskContainer from '../components/taskContainer/'


export default class ChallengeScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = {
      ...this.state,
      startedTasks: false,
      activeTask: null,
      progress: null,
      completedTask: false,
      failedTask: false,
      finalTask: false
    }
  }

  componentDidMount () {
    super.componentDidMount()
    this.timer = setInterval(() => this.getData(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
}

  getData = () => {
    const variant = this._variant || {}
    const { json } = variant.content ? variant.content : ''
    if (json) {
      this.importRemoteData(json).then( data => {
        const { rewards, author, level, tags, rating, quest, challenge, tasksNumber } = data
        clearInterval(this.timer)
        this.setState({
          rewards,
          author,
          level,
          tags,
          rating,
          quest,
          challenge,
          tasksNumber,
          width: this.isSmallScreen ? '90vw' : '740px',
          padding: this.isSmallScreen ? '2px' : '30px'
        })
      })
    }
  }

  get renderStartChallenge () {
    const { width, padding } = this.state

    return (
      <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Card style={{ width, margin: '10px', padding, alignItems: 'center' }}>
          <div style={{margin: 30}}>
            <Button
              type="primary"
              block
              style={{width: 200, height: 50}}
              onClick={this.startChallenge}>
              <Icon type="play-circle" />Take the challenge
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  get renderChallengeData () {
    const { width, padding } = this.state

    return(
      <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Card style={{ width, margin: '10px', padding }}>
          <h2>By doing this you will acquire the following rewards: </h2>
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
            <Icon type='user' style={{fontSize: 18, marginRight: 10}}/>
            <span style={{fontSize: 16}}>{this.state.author}</span>
          </div>
          <div>
            <Icon type='code' style={{fontSize: 18, marginRight: 10}}/>
            <span style={{fontSize: 16}}>{this.state.level}</span>
          </div>
          <div style={{marginBottom: 20, marginTop: 20}}>
            {
              this.state.tags.map( (tag, i) =>
                <Tag key={`tag-${i}`}>{tag}</Tag>
              )
            }
          </div>
          <div style={{marginBottom: 20, marginTop: 20}}>
            <Rate allowHalf disabled value={parseFloat(this.state.rating)} />
          </div>
          <CardActions style={{ justifyContent: 'center', marginTop: '20px' }}>
            <CardActionButtons style={{ marginLeft: '10px' }}>
              <Button
                type="primary"
                block
                style={{width: 200, height: 50}}
                onClick={this.startChallenge}
              >
                <Icon type="play-circle" />Take the challenge
              </Button>
            </CardActionButtons>
          </CardActions>
        </Card>
      </div>
    )
  }

  get renderTasks () {
    const { width, padding } = this.state
    const widthToSubtractFrom = this.isSmallScreen ? 90 : 740
    const paddingToSubtract = this.isSmallScreen ? 2 : 30
    const textWidth = widthToSubtractFrom - paddingToSubtract
    const variant = this._variant || {}
    const { tasks } = variant.content ? variant.content : ''

    return (
      <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Card style={{ width, margin: '10px', padding }}>
        <Components.Text source={tasks} style={{width: `${textWidth}${this.isSmallScreen ? 'vw' : 'px'}`}}/>,
      </Card>
      </div>
    )
  }

  startChallenge = () => {
    // retrieve this from DB
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
  }

  showChallenge = (activeTask, progress) => {
    this.setState({
      startedTasks: false,
      progress,
      activeTask
    })
  }

  verifyTask = (task) => {
    const { quest, challenge, finalTask } = this.state
    console.log(`quest=${quest} task=${task} challenge=${challenge} npm run task`);

    const json = require('../../intro/chunk.json')
    const { routes } = json
    const { main } = routes
    const { title } = main

    const successMessagesJson = require('../../../assets/successMessages.json')
		const errorMessagesJson = require('../../../assets/errorMessages.json')
		const { successMessages } = successMessagesJson
		const { errorMessages } = errorMessagesJson
		const successMessage = successMessages[Math.floor(Math.random()*successMessages.length)]
		const errorMessage = errorMessages[Math.floor(Math.random()*errorMessages.length)]

    if ( finalTask ) {
      this.state.tasks[this.state.activeTask - 1 ].completed = true
    }

    // return true for now
    if ( title !== 'Welcome' ) {
      // ok handler
      this.setState({
        completedTask: true,
        successMessage
      })
    } else {
      // reject handler
      this.setState({
        failedTask: true,
        errorMessage
      })
    }
  }

  startNextTask = (nextTask) => {
    this.state.tasks[this.state.activeTask - 1 ].completed = true
    this.setState({
      activeTask: nextTask,
      completedTask: false,
      tasks: this.state.tasks,
      finalTask: nextTask === this.state.tasksNumber ? true : false
    })
  }

  goBack = (previousTask) => {
    this.setState({
      activeTask: previousTask,
      completedTask: true,
      finalTask: false
    })
  }

  components () {
    const variant = this._variant || {}
    const { title } = variant.content ? variant.content : ''
    const width = this.isSmallScreen ? '90vw' : '740px'
    const padding = this.isSmallScreen ? '2px' : '30px'
    const { rewards, startedTasks, completedTask, activeTask, failedTask, tasks, tasksNumber, progress, successMessage, errorMessage, finalTask } = this.state

    if ( !rewards ) {
      return [(
        <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Card style={{ width, margin: '10px', padding }}>
            <Spin size="large"/>
          </Card>
        </div>
      )]
    }

    if (startedTasks) {
      return [
        <TaskContainer
          activeTask={activeTask}
          tasksNumber={tasksNumber}
          width={width}
          completedTask={completedTask}
          failedTask={failedTask}
          padding={padding}
          tasks={tasks}
          progress={progress}
          finalTask={finalTask}
          successMessage={successMessage}
          errorMessage={errorMessage}
          showChallenge={this.showChallenge}
          content={variant.content}
          verifyTask={this.verifyTask}
          startNextTask={this.startNextTask}
          goBack={this.goBack}
        >
        </TaskContainer>
      ]
    }

    return [
      <Components.Article text={title} />,
      this.renderChallengeData,
      this.renderTasks,
      this.renderStartChallenge
    ]
  }
}
