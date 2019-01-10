import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Row, Col } from 'antd'
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

  renderChallenges() {
    const challengesData = require('challenges/index.json')

    return (
      <div>
        {this.state.initialChallengeCompleted && (
          <Components.Text source={'local://initial-success'} />
        )}
        <Row gutter={26} style={{ padding: '20px' }}>
          {this.state.initialChallengeCompleted ? (
            <React.Fragment>
              {challengesData.map(challenge => (
                <Col span={8} style={{ padding: '20px' }}>
                  <ChallengeCard
                    challenge={require(`../../../challenges/${challenge}/index.json`)}
                    onSelectChallenge={selectedChallenge =>
                      this.props.history.push(
                        `/challenges/${selectedChallenge.id}`
                      )
                    }
                  />
                </Col>
              ))}
            </React.Fragment>
          ) : (
            <Col span={16} offset={4}>
              <InitialChallenge
                challenge={require(`../../../challenges/initial/index.json`)}
                onSelectChallenge={() =>
                  this.selectChallenge(
                    this.props.history.push(`/challenges/initial`)
                  )
                }
              />
            </Col>
          )}
        </Row>
      </div>
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
            {!this.state.initialChallengeCompleted && (
              <Components.Summary
                text={'local://challenges'}
                animation
                animationType={'zoom'}
                animationOptions={['top']}
              />
            )}
            {this.renderChallenges()}
          </React.Fragment>
        )}
      </div>
    ])
  }
}
