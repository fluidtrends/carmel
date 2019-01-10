import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Row, Col, message } from 'antd'
import ChallengePlayground from '../components/challengePlayground'
import ChallengeCard from '../components/challengeCard'
import InitialChallenge from '../components/initialChallenge'
import Challenge from '../components/Challenge'
import { Data } from 'react-chunky'

export default class MainChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      initialChallengeCompleted: false
    }
  }

  componentDidMount() {
    super.componentDidMount()
    this._examples = this.importData('initial')
    this.setState({
      initial: this.examples
    })
    this._challenge = this.props.location.pathname.split('/')[2]
    Data.Cache.retrieveCachedItem('initialChallengeCompleted')
      .then(() => {
        this.setState({ initialChallengeCompleted: true })
      })
      .catch(error => {
        this.setState({ initialChallengeCompleted: false })
      })
  }

  get examples() {
    return this._examples || {}
  }

  get challenge() {
    return this._challenge
  }

  selectChallenge = selectedChallenge => {
    this.props.history.push(`challenges/${selectedChallenge.id}`)
  }

  renderChallenges() {
    const challengesData = require('challenges/index.json')

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
    return super.components().concat([
      <div>
        {this.challenge ? (
          <Challenge
            challengeId={this.challenge}
            challenge={require(`../../../challenges/${
              this.challenge
            }/index.json`)}
            showChallenges={() => this.props.history.goBack()}
          />
        ) : (
          <React.Fragment>
            <Components.Summary
              text={'local://challenges'}
              animation
              animationType={'zoom'}
              animationOptions={['top']}
            />
            {this.renderChallenges()}
          </React.Fragment>
        )}
      </div>
    ])
  }
}
