import React from 'react'
import { Component, Components } from 'react-dom-chunky'
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
    return <Components.Text source={`local://challenges/${challengeId}`} />
  }
  renderTasks() {}
  renderChallenge() {}

  renderInitialChallenge() {
    const initialChallenge = require(`challenges/initial/index.json`)
    return (
      <ChallengePlayground
        challenge={initialChallenge}
        defaults={require('../data/initial.json')}
        initial={true}
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
