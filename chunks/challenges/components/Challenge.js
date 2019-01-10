import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Row, Col } from 'antd'
import ChallengePlayground from './challengePlayground'
import ChallengeCard from './challengeCard'
import InitialChallenge from './initialChallenge'

const challengesData = require('challenges/index.json')

export default class Challenge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasksStarted: false
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
    return (
      <Row style={{ margin: '10px 20px' }}>
        <Col style={columnStyle} span={12} offset={6}>
          <Task
            task={require(`../../../challenges/${challengeId}/${taskIds}/index.json`)}
          />
        </Col>
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
          giveUp={() => {
            this.props.history.goBack()
          }}
          verify={(task, editorValue) => this.verifyTask(task, editorValue)}
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
        giveUp={() => {
          this.props.history.goBack()
        }}
        verify={(task, editorValue) => this.verifyTask(task, editorValue)}
      />
    )
  }

  verifyTask = (task, editorValue) => {
    const { challengeId } = this.props

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
        this.setState({
          initialChallengeCompleted: true,
          selectedChallenge: null,
          initialTaskSucceeded: true
        })
      }
    } else {
      // call api for verifying other tasks
    }
  }

  render() {
    const { challengeId } = this.props
    const matchedChallenge = challengesData.filter(c => c === challengeId)
    console.log(matchedChallenge)
    if (challengeId === 'initial') {
      return [this.renderIntro(challengeId), this.renderInitialChallenge()]
    } else {
      return [
        this.renderIntro(challengeId),
        this.renderTasks(),
        this.renderChallenge()
      ]
    }
  }
}
