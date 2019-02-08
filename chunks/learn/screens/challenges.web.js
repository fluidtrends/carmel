import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Row, Col, Radio, Tag, Avatar, Alert } from 'antd'
import ChallengeCard from '../components/challengeCard'
import FutureChallengeCard from '../components/futureChallengeCard'
import Challenge from '../components/Challenge'
import { Data } from 'react-chunky'
import merge from 'deepmerge'

export default class MainChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      inProgress: false,
      selectedCategories: []
    }
    this._startChallenge = this.startChallenge.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()

    this.refreshContent()
    this._getFutureChallenges()
  }

  refreshContent() {
    this.props.getListings(
      this.dynamicVariant ? { challengeId: this.dynamicVariant } : { all: true }
    )
  }

  _getFutureChallenges() {
    const self = this

    this.importRemoteData(this.props.futureChallenges)
      .then(futureChallengesData => {
        self.setState({ futureChallengesData })
      })
      .catch(error => console.log(error))
  }

  gotListings(content) {
    if (!content.ok && !content.data) {
      // Try again
      this.refreshContent()
      return
    }

    if (this.dynamicVariant && content.data.challenge) {
      if (this.isLoggedIn) {
        this.updateWorkspace({
          challenge: content.data.challenge,
          event: 'startChallenge'
        })
        return
      }

      this.setState({ challenge: content.data.challenge })
      return
    }

    if (!content.data.challenges) {
      this.setState({ challenges: [] })
      return
    }

    // Only look for published challenges
    const challenges = content.data.challenges.filter(
      c => c.status === 'published'
    )
    this.setState({ challenges })
  }

  couldNotGetListings(error) {
    // Keep trying
    this.refreshContent()
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
      return [<Components.Loading />]
    }

    const { selectedCategories } = this.state
    const filter = {}

    for (let i = 0; i < selectedCategories.length; i++) {
      filter[selectedCategories[i]] = selectedCategories[i]
    }

    let filteredChallenges = this.state.challenges

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

    return [
      <div>
        <Components.Text
          source={'local://challenges-intro'}
          style={{
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        />
        {!this.isLoggedIn && (
          <div style={{ margin: '20px' }}>
            <Alert
              message="Login to to keep track of your progress"
              banner
              closable
            />
          </div>
        )}
        {this.renderTags()}
        <Row gutter={26} style={{ padding: '20px' }}>
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
                    challenge={challenge}
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
            {this.state.futureChallengesData &&
              this.state.futureChallengesData.map(challenge => (
                <div
                  style={{
                    padding: '20px',
                    maxWidth: '700px',
                    margin: '0 auto'
                  }}
                >
                  <FutureChallengeCard challenge={challenge} />
                </div>
              ))}
          </React.Fragment>
        </Row>
      </div>
    ]
  }

  joinNow(session) {
    Data.Cache.cacheItem(
      'guestSession',
      Object.assign({}, session, {
        guild: 'learners',
        alert: `You will need to sign in before you can start the "${
          this.state.challenge.title
        }" challenge`,
        workspace: { challenge: this.state.challenge, event: 'startChallenge' }
      })
    )
      .then(() => this.triggerRedirect('/register'))
      .catch(e => this.triggerRedirect('/register'))
  }

  join() {
    Data.Cache.retrieveCachedItem('guestSession')
      .then(session => this.joinNow(session))
      .catch(e => this.joinNow())
  }

  _doUpdateWorkspace(data) {
    Data.Cache.cacheItem('workspace', data)
      .then(() => this.triggerRedirect('/me/workspace'))
      .catch(e => this.triggerRedirect('/me/workspace'))
  }

  updateWorkspace(data) {
    Data.Cache.retrieveCachedItem('workspace')
      .then(workspace => this._doUpdateWorkspace(merge.all([workspace, data])))
      .catch(e => this._doUpdateWorkspace(data))
  }

  startChallenge() {
    if (!this.isLoggedIn && this.state.challenge.type === 'Professional') {
      this.join()
      return
    }
  }

  renderChallenge() {
    return [
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Avatar
          src="/assets/chunky-logo.gif"
          style={{
            height: '180px',
            width: '180px'
          }}
        />
      </div>,
      <Challenge
        challenge={this.state.challenge}
        onSelectChallenge={this._startChallenge}
      />
    ]
  }

  components() {
    if (
      this.state.inProgress ||
      (!this.state.challenges && !this.state.challenge)
    ) {
      return [<Components.Loading message="Just a sec, please" />]
    }

    return this.state.challenge
      ? this.renderChallenge()
      : this.renderChallenges()
  }
}
