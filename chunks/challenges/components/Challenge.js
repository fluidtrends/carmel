import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col, message, Button, Icon } from 'antd'
import ChallengePlayground from './challengePlayground'
import Task from './playground/task'
import { Data } from 'react-chunky'

export default class Challenge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasksStarted: false,
      selectedTask: null,
      challengeCompleted: false,
      editorValue: null
    }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderIntro(challengeId) {
    const text = require(`assets/text/challenges/${challengeId}.md`)

    return (
      text && (
        <Components.Text
          source={`local://challenges/${challengeId}`}
          style={{ maxWidth: '100%' }}
        />
      )
    )
  }
  renderTasks() {
    const { challengeId, challenge } = this.props
    const { taskIds } = challenge
    const columnStyle = { padding: '20px' }

    return (
      <Row style={{ margin: '10px 20px' }}>
        {taskIds.map(task => (
          <Col style={columnStyle} span={12} offset={6}>
            <Task
              task={require(`../../../challenges/${challengeId}/${task}/index.json`)}
            />
          </Col>
        ))}
      </Row>
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

    if (challengeId === 'initial') {
      // no changes has been made to the editor
      if (!editorValue) {
        // randomize this with an array
        message.error('I know you can do it!')
        return
      }
      if (JSON.stringify(editorValue) === JSON.stringify(this.state.initial)) {
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
      <Row style={{ margin: '10px 20px' }}>
        <Col style={{ padding: '20px' }} span={12} offset={6}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100px',
              alignItems: 'center'
            }}
          >
            {this.state.tasksStarted ? (
              <Button
                onClick={() =>
                  this.setState({ tasksStarted: false, selectedTask: null })
                }
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
                <Icon type="pause-circle" />
                Stop task
              </Button>
            ) : (
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
            )}
            <Button
              onClick={this.verifyTask}
              style={{
                display: 'flex',
                color: '#ffffff',
                backgroundColor: `#4CAF50`,
                border: 'none',
                margin: '10px auto 0',
                height: '35px',
                lineHeight: '15px'
              }}
            >
              <Icon type="check-circle" />
              Verify Task
            </Button>
          </div>
        </Col>
      </Row>
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
    if (challengeId === 'initial') {
      return [
        this.renderIntro(challengeId),
        this.renderInitialChallenge(),
        this.renderButtons()
      ]
    } else {
      return [
        this.renderIntro(challengeId),
        this.renderTasks(),
        this.renderChallenge(),
        this.renderButtons()
      ]
    }
  }
}
