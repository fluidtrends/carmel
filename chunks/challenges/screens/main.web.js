import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Row, Col, message } from 'antd'
import ChallengePlayground from '../components/challengePlayground'
import ChallengeCard from '../components/challengeCard'
import InitialChallenge from '../components/initialChallenge'

const confettiConfig = {
  angle: 50,
  spread: 175,
  startVelocity: 51,
  elementCount: 50,
  decay: 0.9
}
export default class MainChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      selectedChallenge: null,
      initial: null,
      initialChallengeCompleted: false,
      initialTaskSucceeded: false
    }
  }

  componentDidMount() {
    super.componentDidMount()
    this._examples = this.importData('initial')
    this.setState({
      initial: this.examples
    })
  }

  get examples() {
    return this._examples || {}
  }

  selectChallenge = selectedChallenge => {
    this.props.history.push(`challenges/${selectedChallenge.id}`)
  }

  verifyTask = (task, editorValue) => {
    if (!this.state.initialChallengeCompleted) {
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

  renderChallenges() {
    const challengesData = require('challenges/index.json')

    if (this.state.selectedChallenge) {
      return (
        <ChallengePlayground
          challenge={this.state.selectedChallenge}
          defaults={this.state.initial}
          initial={!this.state.initialChallengeCompleted}
          giveUp={() => {
            this.setState({ selectedChallenge: null })
          }}
          verify={(task, editorValue) => this.verifyTask(task, editorValue)}
        />
      )
    }

    return (
      <Row gutter={26} style={{ padding: '20px' }}>
        <div style={{ position: 'absolute', height: '100%', width: '100%' }} />
        {this.state.initialTaskSucceeded && (
          <Components.Text source={'local://initial-success'} />
        )}
        {this.state.initialChallengeCompleted ? (
          <Col span={8}>
            {challengesData.map(challenge => (
              <ChallengeCard
                challenge={require(`../../../challenges/${challenge}/index.json`)}
                onSelectChallenge={selectedChallenge =>
                  this.selectChallenge(selectedChallenge)
                }
              />
            ))}
          </Col>
        ) : (
          <Col span={16} offset={4}>
            <InitialChallenge
              challenge={require(`../../../challenges/initial/index.json`)}
              onSelectChallenge={() =>
                this.selectChallenge(
                  require(`../../../challenges/initial/index.json`)
                )
              }
            />
          </Col>
        )}
      </Row>
    )
  }

  components() {
    return super.components().concat([this.renderChallenges()])
  }
}
