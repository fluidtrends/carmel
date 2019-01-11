import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Row, Col, Radio } from 'antd'
import ChallengeCard from '../components/challengeCard'
import InitialChallenge from '../components/initialChallenge'
import Challenge from '../components/Challenge'
import { Data } from 'react-chunky'

export default class MainChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      initialChallengeCompleted: false,
      selectedPricePlan: 'all'
    }
  }

  componentDidMount() {
    super.componentDidMount()
    this._examples = this.importData('initial')
    this._plans = this.importData('pricePlans')
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

  get pricePlans() {
    return this._plans || []
  }

  get challenge() {
    return this._challenge
  }

  handlePriceChange = ev => {
    this.setState({ selectedPricePlan: ev.target.value })
  }

  renderSelection() {
    return (
      <div style={{ padding: '5px 30px' }}>
        <Radio.Group
          defaultValue="all"
          buttonStyle="solid"
          onChange={this.handlePriceChange}
        >
          {this.pricePlans.map(plan => (
            <Radio.Button value={plan}>{plan.toUpperCase()}</Radio.Button>
          ))}
        </Radio.Group>
      </div>
    )
  }

  renderChallenges() {
    const challengesData = require('challenges/challenges.json')
    const filteredChallenges =
      this.state.selectedPricePlan === 'all'
        ? challengesData
        : challengesData.filter(
            challenge => challenge.pricePlan === this.state.selectedPricePlan
          )
    return (
      <div>
        {this.state.initialChallengeCompleted && (
          <Components.Text
            source={'local://challenges-intro'}
            style={{
              maxWidth: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          />
        )}
        {this.renderSelection()}
        <Row gutter={26} style={{ padding: '20px' }}>
          {this.state.initialChallengeCompleted ? (
            <React.Fragment>
              {filteredChallenges.map(challenge => (
                <Col span={8} style={{ padding: '20px', height: '475px' }}>
                  <ChallengeCard
                    challenge={require(`../../../challenges/${
                      challenge.id
                    }/index.json`)}
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
              <ChallengeCard
                challenge={require(`../../../challenges/initial/index.json`)}
                onSelectChallenge={() =>
                  this.props.history.push(`/challenges/initial`)
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
