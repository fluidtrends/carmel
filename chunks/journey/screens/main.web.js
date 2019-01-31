import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Icon, Tag, Tabs, Badge } from 'antd';
import Activity from '../components/activityCard'
import Challenge from '../components/challengeCard'
import Meta from '../components/meta'
import Story from '../components/Story'
import StoryCard from '../components/storyCard'

const { TabPane } = Tabs;

const mockJourney = {
  name: 'Andi Coman',
  username: '@clowwwn',
  description: 'Developer. Teacher. Clown. Carmel.io co-founder.',
  since: 'On the platform since 14 March 2018',
  followers: '15k',
  xp: 25,
  img: 'http://files.carmel.io/team/andi/profile.png',
  skills: [
    {
      name: 'React',
      level: '46',
      color: '#212121',
    },
    {
      name: 'JSON',
      level: '99',
      color: '#795548',
    },
    {
      name: 'Firebase',
      level: '73',
      color: '#303F9F',
    },
    {
      name: 'Node',
      level: '90',
      color: '#388E3C',
    },
    {
      name: 'HTML',
      level: '42',
      color: '#F57C00',
    },
    {
      name: 'CSS',
      level: '13',
      color: '#FFEB3B',
    },
    {
      name: 'Copywriting',
      level: '67',
      color: '#90A4AE',
    },

  ],
  events: [
    {
      timestamp: '2h',
      name: 'Started Intro challenge',
      award: 1
    },
    {
      timestamp: '1.5h',
      name: 'Stopped Intro challenge',
      award: 2
    },
    {
      timestamp: '1h',
      name: 'Finished Intro challenge',
      award: 3
    },
    {
      timestamp: '5 min ago',
      name: 'Started Chunky challenge',
      award: 4
    },
    {
      timestamp: '4 min ago',
      name: 'Stopped Chunky challenge',
      award: 5
    },
    {
      timestamp: '2 min ago',
      name: 'Failed Chunky challenge',
      award: 6
    },
    {
      timestamp: '10 seconds ago',
      name: 'Finished Chunky challenge',
      award: 7
    },
    {
      timestamp: '5 seconds ago',
      name: 'Received the Resilient Learner Award',
      award: 8
    }
  ]
}

export default class MainJourneyScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }

    this._renderEvent = this.renderEvent.bind(this)
    this._renderEvents = this.renderEvents.bind(this)
    this._renderChallenges = this.renderChallenges.bind(this)
    this._renderTabs = this.renderTabs.bind(this)
    this._renderMeta = this.renderMeta.bind(this)
    this._renderSkills = this.renderSkills.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()

    setTimeout(() => {
      console.log(this.dynamicVariant)
      this.props.getUserProfile({ username: this.dynamicVariant })
    }, 300)

    Promise.all(this.props.stories.map(story => this.importRemoteData(story.source)))
      .then(stories => {
        var index = 0
        return stories.map(story => Object.assign({}, story, this.props.stories[index++])).map(s => new Story(s))
      })
      .then(stories => this.setState({ stories }))
  }

  gotListings(listings) {
    console.log(listings)
    this.setState({ journey: listings.data })
  }

  couldNotGetListings(error) {
    console.log(error)
  }

  getUserOk(user) {
    if (user.data.error) {
      // This username does not exist
      this.triggerRedirect('/')
      return
    }

    this.setState({ user: user.data })
    this.props.getListings({ userId: user.data._id })
  }

  getUserError(error) {
    console.log(error)
  }

  get cover () {
    if (this.username) {
      return
    }
    return this.props.cover
  }

  get username () {
    return this._username
  }

  renderBadge(name, value) {
    if (this.isSmallScreen) {
      // return
    }

    const Badge = <span style={{width: 25, height: 25, borderRadius: '50%', background: '#00bcd4', position: 'absolute', bottom: 7, right: -10, color: '#fff',textAlign: 'center', padding: 3}}>{value}</span>

    return <Components.AnimatedWrapper animation animationType="fade">
      <span style={{position: 'relative', marginRight: 20}}>
        <Tag style={{marginBottom: 10, borderColor: '#00bcd4', color: '#546E7A'}}>
          {String(name).toLowerCase()}
        </Tag>
        {Badge}
      </span>
    </Components.AnimatedWrapper>
  }

  renderEvent(event) {
    return <Activity event={event} isSmallScreen={this.isSmallScreen}/>
  }

  renderMeta() {
    return <Meta user={this.state.user} isSmallScreen={this.isSmallScreen} />
  }

  renderTabs() {
    return <Tabs defaultActiveKey="3" onChange={() => {}} style={{color: '#546E7A', marginTop: 75, minHeight: '30vh'}}>
      <TabPane tab="Activity" disabled key="1">
        {this._renderEvents()}
        <div style={{textAlign: 'center'}}>
          <Icon type="loading" style={{fontSize: 40, color: '#00bfa5', padding: '20px 0'}} />
        </div>
      </TabPane>
      <TabPane tab="Stories" disabled key="2">
        {this.state.stories? this.renderStories() : this.renderLoading()}
      </TabPane>
      <TabPane tab="Challenges" key="3">{this._renderChallenges()}</TabPane>
      <TabPane tab="Code" disabled key="4">{this._renderEvents()}</TabPane>
    </Tabs>
  }

  renderEvents() {
      return mockJourney.events.slice(0).reverse().map(this._renderEvent)
  }

  renderCompletedChallenges(challenges) {
    return challenges.slice(0).reverse().map(challenge => <Challenge challenge={challenge} isSmallScreen={this.isSmallScreen} />)
  }

  renderCurrentChallenge() {
    // return <Challenge event={event} isSmallScreen={this.isSmallScreen}/>
  }

  renderChallenges() {
      const {journey} = this.state.journey

      const {completedChallenges, challenge} = journey

      // const completedChallengesReversed = completedChallenges.reverse()

      return [
        completedChallenges && this.renderCompletedChallenges(completedChallenges),
        this.renderCurrentChallenge(challenge)
      ]
  }

  renderSkills() {
    const { skills } = this.state.journey.journey

    if (!skills) {
      return
    }

    return Object.keys(skills).map(key => this.renderBadge(key, skills[key]))
  }

  renderStories() {
    const story = this.state.stories[0]
    if (!story || !story.chapters) {
      return
    }

    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        { story.chapters.map(chapter => <StoryCard chapter={chapter} isSmallScreen={this.isSmallScreen} />) }
      </div>
  }

  renderLoading() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        height: '70vh',
        alignItems: 'center'
      }}>
        <Components.Loading message="One sec please..."/>
      </div>
  }

  renderJourney() {
    const width = this.isSmallScreen? '90vw' : 700
    const distancer = <div style={{ marginTop: 25 }} />
    return <div style={{width, padding: '50px 0'}}>
      {this._renderMeta()}
      {distancer}
      {this._renderSkills()}
      {this._renderTabs()}
    </div>
  }

  get features() {
    if (!this.username || !this.state.user || !this.state.journey) {
      return this.renderLoading()
    }

    return this.renderJourney()
  }

  components() {
    return super.components().concat(this.features)
  }
}
