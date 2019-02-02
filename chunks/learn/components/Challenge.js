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
    //   taskIndex: workspaces.activeChallenge.completedTasks.length
    // }
  }

  componentDidMount() {
    super.componentDidMount()
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

  renderIntro() {
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
            minimal
            challenge={this.props.challenge}
          />
        </Col>
      </div>
    )
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
  renderTask(task, index) {
    return <List.Item>
      <List.Item.Meta
        avatar={<Avatar
              size="small"
              style={{ backgroundColor: '#00bcd4', color: "#ffffff" }}>
              {index}
            </Avatar>}
        title={ <Typography
              use="body1"
              style={{ textAlign: 'left', color: '#00bcd4' }}>
              {task.title}
            </Typography>}
      />
    </List.Item>
  }

  renderTasks() {
    const { challenge } = this.props
    const { tasks } = challenge
    var index = 1

    return (
      <Col span={12} offset={6} style={{marginTop: "20px", marginBottom: "20px"}}>
        <Card title={'Tasks'}>
          {tasks.map(t => this.renderTask(t, index++))}
          <Button
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
        </Card>
      </Col>
    )
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
    return [
      this.renderIntro(),
      this.renderTasks()
    ]
  }
}
