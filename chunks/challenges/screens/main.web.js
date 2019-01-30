import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Row, Col, Radio, Tag, Alert } from 'antd'
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
      selectedCategories: []
    }
  }

  componentDidMount() {
    super.componentDidMount()
    this._examples = this.importData('initial')
    this.setState({
      initial: this.examples
    })
    this._challenge = this.props.location.pathname.split('/')[2]

    if (!this.challenge) {
      // Get all challenges
      this.props.getListings({ all: true })
    }


    // Data.Cache.retrieveCachedItem('initialChallengeCompleted')
    //   .then(() => {
    //     this.setState({ initialChallengeCompleted: true })
    //   })
    //   .catch(error => {
    //     this.setState({ initialChallengeCompleted: false })
    //   })
  }

  gotListings(listings) {
    if (!listings.ok && !listings.data) {
      // Try again
      this.props.getListings({ all: true })
      return
    }

    if (!listings.data.challenges) {
      this.setState({ challenges: [] })
      return
    }

    // Only look for published challenges
    const publishedChallenges = listings.data.challenges.filter(c => c.status === 'published')

    //TODO get the challenges source content from github

    // publishedChallenges.map(c => {
    //   const sourceUrl = `https://raw.githubusercontent.com/${c.repo}/${c.hash}${c.path ? c.path : '/'}`
    //   console.log(sourceUrl)
    //   fetch(`${sourceUrl}/index.json`, {
    //     method: 'get',
    //     mode: "no-cors",
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch((error) => console.log(error))
    // })
  }

  couldNotGetListings(error) {
    // Keep trying
    this.props.getListings({ all: true })
  }

  get examples() {
    return this._examples || {}
  }

  get challenge() {
    return this._challenge
  }

  addCategory = category => {
    let { selectedCategories } = this.state
    if (category && selectedCategories.indexOf(category) === -1) {
      selectedCategories = [...selectedCategories, category]
    }
    if (this.state.selectedCategories.find(c => c === category)) {
      return
    }

    this.setState({
      selectedCategories
    })
  }

  removeCategory = removedCategory => {
    const selectedCategories = this.state.selectedCategories.filter(
      category => category !== removedCategory
    )
    this.setState({ selectedCategories })
  }

  renderTags() {
    return (
      <div
        style={{
          padding: '5px 30px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {this.state.selectedCategories.map(category => (
          <Tag
            key={category}
            closable
            afterClose={() => this.removeCategory(category)}
          >
            {category}
          </Tag>
        ))}
      </div>
    )
  }

  renderChallenges() {
    if (!this.state.challenges) {
      return <Components.Loading />
    }

    //TODO display from this.state
    console.log(this.state.challenges)

    const challengesData = require('challenges/index.json')
    const { selectedCategories } = this.state
    const filter = {}

    for (let i = 0; i < selectedCategories.length; i++) {
      filter[selectedCategories[i]] = selectedCategories[i]
    }
    let filteredChallenges = challengesData
    if (Object.keys(filter).length > 0) {
      filteredChallenges = filteredChallenges.filter(challenge => {
        for (var key in filter) {
          if (challenge.category.find(c => c === filter[key])) {
            return true
          }
        }
        return false
      })
    }

    return (
      <div>
        <Components.Text
          source={'local://challenges-intro'}
          style={{
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        />
        {!this.props.account && (
          <div style={{ margin: '20px' }}>
            <Alert
              message="We can't track your progress if you don't log in!"
              banner
              closable
            />
          </div>
        )}
        {this.renderTags()}
        <Row gutter={26} style={{ padding: '20px' }}>
          {true ? (
            <React.Fragment>
              {filteredChallenges.length ? (
                filteredChallenges.map(challenge => (
                  <div
                    style={{
                      padding: '20px',
                      maxWidth: '700px',
                      margin: '0 auto'
                    }}
                  >
                    <ChallengeCard
                      challenge={require(`../../../challenges/${
                        challenge.id
                      }/index.json`)}
                      onSelectChallenge={selectedChallenge =>
                        this.props.history.push(
                          `/challenges/${selectedChallenge.id}`
                        )
                      }
                      onCategoryClick={category => this.addCategory(category)}
                    />
                  </div>
                ))
              ) : (
                <Col
                  span={16}
                  offset={4}
                  style={{ padding: '20px', height: '475px' }}
                >
                  <p>Sorry we can't find the challenges you are looking for.</p>
                </Col>
              )}
            </React.Fragment>
          ) : (
            <Col span={16} offset={4}>
              <ChallengeCard
                challenge={require(`../../../challenges/initial/index.json`)}
                onSelectChallenge={() =>
                  this.props.history.push(`/challenges/initial`)
                }
                onCategoryClick={category => this.addCategory(category)}
              />
            </Col>
          )}
        </Row>
      </div>
    )
  }

  pushActivity(activity) {
    this.props.newActivity(activity)
  }

  components() {
    return super
      .components()
      .concat([
        <div style={{ width: '100vw', marginTop: '50px' }}>
          {this.challenge ? (
            <Challenge
              challengeId={this.challenge}
              challenge={require(`../../../challenges/${
                this.challenge
              }/index.json`)}
              showChallenges={() => this.props.history.goBack()}
              pushActivity={activity => this.pushActivity(activity)}
            />
          ) : (
            this.renderChallenges()
          )}
        </div>
      ])
  }
}
