import React from 'react'
import { Screen } from 'react-dom-chunky'
import challengesData from '../../../challenges/index'
import ChallengeCard from '../components/challengeCard'
import ChallengePlayground from '../components/challengePlayground'
import { Row, Col } from 'antd'

export default class ChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, selectedChallenge: null }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  selectChallenge = selectedChallenge => {
    this.setState({ selectedChallenge })
  }

  renderChallenges() {
    if (this.state.selectedChallenge) {
      return <ChallengePlayground challenge={this.state.selectedChallenge} />
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
