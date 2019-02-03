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

  // isTaskComplete(task) {
  //   return (
  //     this.props.challenge.taskIds.findIndex(t => t === task) <
  //     this.state.taskIndex
  //   )
  // }
  //
  // isCurrentTask(task) {
  //   return (
  //     this.props.challenge.taskIds.findIndex(t => t === task) ===
  //     this.state.taskIndex
  //   )
  // }
  //
  // toggleStarted = () => {
  //   const task = this.props.challenge.taskIds[this.state.taskIndex - 1]
  //
  //   if (!this.state.tasksStarted) {
  //     this.props.pushActivity({
  //       type: 'task',
  //       event: 'started',
  //       taskId: task,
  //       challengeId: this.props.challengeId
  //     })
  //   } else {
  //     this.props.pushActivity({
  //       type: 'task',
  //       event: 'paused',
  //       taskId: task,
  //       challengeId: this.props.challengeId
  //     })
  //   }
  //   this.setState({
  //     tasksStarted: !this.state.tasksStarted
  //   })
  // }
  //

  // renderProgress() {
  //   return <Col
  //     span={6}
  //     offset={9}
  //     style={{ marginTop: '20px', marginBottom: '20px' }}
  //   >
  //     <Timeline
  //       completedTasks={this.state.taskIndex}
  //       taskNr={0}
  //     />
  //   </Col>
  // }

  renderIntro(width, padding) {
    // const text = require(`assets/text/challenges/${challengeId}.md`)
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

  // renderTaskTitle(data, task) {
  //   const textDecoration = this.isTaskComplete(task) ? 'line-through' : 'none'
  //   const color = this.isTaskComplete(task)
  //     ? '#78909C'
  //     : this.isCurrentTask(task)
  //     ? '#00bcd4'
  //     : '#CFD8DC'
  //
  //   return [
  //     <Typography
  //       use="body1"
  //       style={{
  //         textAlign: 'left',
  //         textDecoration,
  //         color
  //       }}
  //     >
  //       {data.title}
  //     </Typography>,
  //     this.isTaskComplete(task) && (
  //       <Tag style={{ position: 'absolute', right: 0 }} color="#03A9F4">
  //         500s
  //       </Tag>
  //     )
  //   ]
  // }
  //

  startTimer() {
    if (this._timer || !this.props.journey.challenge.taskActive) {
      return
    }

    const since = moment.duration(moment().diff(moment(parseInt(this.props.journey.challenge.taskStartTime)))).asMilliseconds()

    this._timer = setInterval(() => {
      const time = parseInt((this.state.time || since) + 1000)
      const duration = moment.duration(time, 'milliseconds')
      const hh = Math.round(duration.asHours()) % 24
      const mm = Math.round(duration.asMinutes()) % 60
      const ss = Math.round(duration.asSeconds()) % 60

      const prettyTime = `${hh < 10 ? '0' : ''}${hh}:${mm < 10 ? '0' : ''}${mm}:${ss < 10 ? '0' : ''}${ss}`
      this.setState({ time, prettyTime })
    }, 1000)
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
        }}
      >
        {this.state.prettyTime}
      </Typography>
    </Bounce>
  }

  renderTitle() {
    const { journey, challenge } = this.props
    const title = `Task ${parseInt(journey.challenge.taskIndex) + 1} of ${challenge.tasks.length}`
    const task = this.props.challenge.tasks[this.props.journey.challenge.taskIndex]

    return (
      <div
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
    )
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
       closable
   />
  }

  renderTutorial(width, padding) {
    const sourceUrl = `https://raw.githubusercontent.com/${this.props.challenge.repo}/${this.props.challenge.hash}/${this.props.challenge.path ? this.props.challenge.path : '/'}`
    const taskTutorialFile = `${sourceUrl}/${this.props.journey.challenge.taskIndex}.tutorial.md`

    return <div  style={{
            display: 'flex',
            flex: 1,
            width,
            padding,
            flexDirection: 'column'}}>
        <Card title={this.renderTitle()}>
          <Components.Text source={taskTutorialFile}/>
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
      </div>
    }

  // showTask() {
  //   // -1 because array and index
  //   const task = require(`challenges/${this.props.challengeId}/index.json`)
  //     .taskIds[this.state.taskIndex]
  //
  //   return (
  //     <Task
  //       task={require(`challenges/${
  //         this.props.challengeId
  //       }/${task}/index.json`)}
  //     />
  //   )
  // }
  // renderTaskSummary(task) {
  //   const taskData = require(`challenges/${
  //     this.props.challengeId
  //   }/${task}/index.json`)
  //   return (
  //     <List.Item>
  //       <List.Item.Meta
  //         avatar={this.renderTaskIcon(taskData, task)}
  //         title={this.renderTaskTitle(taskData, task)}
  //       />
  //     </List.Item>
  //   )
  // }
  // renderChallenge() {
  //   const { challengeId, challenge } = this.props
  //   const { type, components } = challenge
  //   if (type[0] !== 'playground') return null
  //   let defaultData = require(`../data/${challengeId}.json`)
  //   defaultData = defaultData.filter(d => d.source === components[0])
  //
  //   if (this.state.tasksStarted) {
  //     return (
  //       <Col span={24} style={{ margin: '20px 0' }}>
  //         <ChallengePlayground
  //           defaults={defaultData[0]}
  //           updateValue={editorValue => this.setState({ editorValue })}
  //         />
  //       </Col>
  //     )
  //   }
  // }
  //
  // renderInitialChallenge() {
  //   const initialChallenge = require(`challenges/initial/index.json`)
  //   return (
  //     <ChallengePlayground
  //       challenge={initialChallenge}
  //       defaults={require('../data/initial.json')}
  //       initial
  //       updateValue={editorValue => this.setState({ editorValue })}
  //     />
  //   )
  // }
  //
  // verifyTask = () => {
  //   const { challengeId } = this.props
  //   const { editorValue } = this.state
  //   message.loading('Verifying your task ...')
  //   if (challengeId === 'initial') {
  //     // no changes has been made to the editor
  //     if (!editorValue) {
  //       // randomize this with an array
  //       message.destroy()
  //       message.error('I know you can!')
  //       this.props.newActivity({
  //         type: 'taskVerification',
  //         source: 'web/playground',
  //         error: 'editor not updated'
  //       })
  //       return
  //     }
  //     if (JSON.stringify(editorValue) === JSON.stringify(this.state.initial)) {
  //       message.destroy()
  //       message.error('Come on, I believe in you!')
  //       this.props.newActivity({
  //         type: 'taskVerification',
  //         source: 'web/playground',
  //         error: 'editor not different from the initial values'
  //       })
  //       return
  //     } else {
  //       this.setState({
  //         challengeCompleted: true
  //       })
  //       this.props.newActivity({
  //         type: 'taskVerification',
  //         source: 'web/playground',
  //         success: true
  //       })
  //     }
  //   } else {
  //     console.log(editorValue)
  //     // call api for verifying other tasks
  //     // this.props.newActivity({
  //     // 	type: "taskVerification",
  //     // 	source: "cli",
  //     // 	status: "failed",
  //     // 	reason: "dkdkdkdkd error stack"
  //     // })
  //   }
  // }
  //
  // renderButtons() {
  //   return (
  //     <Col style={{ padding: '20px' }} span={12} offset={6}>
  //       <div
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           height: '100px',
  //           alignItems: 'center'
  //         }}
  //       >
  //         <Button
  //           onClick={() => this.props.showChallenges()}
  //           style={{
  //             display: 'flex',
  //             color: '#ffffff',
  //             backgroundColor: '#006064',
  //             border: 'none',
  //             margin: '10px auto 0',
  //             height: '35px',
  //             lineHeight: '15px'
  //           }}
  //         >
  //           <Icon type="arrow-left" />
  //           Choose another challenge
  //         </Button>
  //       </div>
  //     </Col>
  //   )
  // }
  //
  // showSuccess() {
  //   // maybe generate random success msgs
  //   const { challengeId } = this.props
  //
  //   return (
  //     <div style={{ marginTop: '30px' }}>
  //       {challengeId === 'initial' ? (
  //         <React.Fragment>
  //           <h1>Congrats!</h1>
  //           <h2>Is that easy to be a developer with the help of Carmel</h2>
  //           <h2>Now let's do more challenges</h2>
  //           <Button
  //             onClick={() => this.props.showChallenges()}
  //             style={{
  //               display: 'flex',
  //               color: '#ffffff',
  //               backgroundColor: '#006064',
  //               border: 'none',
  //               margin: '10px auto 0',
  //               height: '35px',
  //               lineHeight: '15px'
  //             }}
  //           >
  //             <Icon type="arrow-left" />
  //             Go to challenges
  //           </Button>
  //         </React.Fragment>
  //       ) : (
  //         <React.Fragment>
  //           <h1>Congrats!</h1>
  //           <h2>You completed the {challengeId} challenge !</h2>
  //           <h2>More challenges are waiting to be completed</h2>
  //         </React.Fragment>
  //       )}
  //     </div>
  //   )
  // }
  //
  // render2() {
  //   const { challengeId } = this.props
  //   if (this.state.challengeCompleted) {
  //     return this.showSuccess()
  //   }
  //   return [
  //     this.renderIntro(challengeId),
  //     this.renderTasks(),
  //     this.renderChallenge(),
  //     this.renderButtons()
  //   ]
  // }

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
