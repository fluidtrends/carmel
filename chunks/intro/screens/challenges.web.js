import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Row, Col } from 'antd'
import ChallengePlayground from '../components/challengePlayground'
import ChallengeCard from '../components/challengeCard'

export default class ChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, selectedChallenge: null, defaults: null }
  }

  componentDidMount() {
    super.componentDidMount()
    this._examples = this.importData('defaults')
    this.setState({
      defaults: this.examples
    })
  }

  get examples() {
    return this._examples || {}
  }

  selectChallenge = selectedChallenge => {
    this.setState({ selectedChallenge })
  }

  renderChallenges() {
    const challengesData = require('challenges/index.json')

    if (this.state.selectedChallenge) {
      return (
        <ChallengePlayground
          challenge={this.state.selectedChallenge}
          defaults={this.state.defaults && this.state.defaults.coverDefaults}
        />
      )
    }
    return (
      <Row gutter={26} style={{ padding: '20px' }}>
        {challengesData.map(challenge => (
          <Col span={8}>
            <ChallengeCard
              challenge={require(`../../../challenges/${challenge}/index.json`)}
              onSelectChallenge={selectedChallenge =>
                this.selectChallenge(selectedChallenge)
              }
            />
          </Col>
        ))}
      </Row>
    )
  }

  components() {
    return super.components().concat([this.renderChallenges()])
  }
}
