import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Icon, Tag, Tabs } from 'antd';
import Activity from '../components/activityCard'
import Meta from '../components/meta'
import Story from '../components/Story'
import StoryCard from '../components/storyCard'

const { TabPane } = Tabs;

const mockJourney = {
  name: '@clowwwn',
  description: 'Developer. Teacher. Clown. Carmel.io co-founder.',
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
    this._renderBadge = this.renderBadge.bind(this)
    this._renderTabs = this.renderTabs.bind(this)
    this._renderMeta = this.renderMeta.bind(this)
    this._renderSkills = this.renderSkills.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    this._username = this.props.location.pathname.split('/')[2]
    
    Promise.all(this.props.stories.map(story => this.importRemoteData(story.source)))
      .then(stories => {
        var index = 0
        return stories.map(story => Object.assign({}, story, this.props.stories[index++])).map(s => new Story(s))
      })
      .then(stories => this.setState({ stories }))
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

  renderBadge(badge, index) {
    if (this.isSmallScreen) {
      // return
    }

    return <Components.AnimatedWrapper animation animationType="fade"><span style={{marginTop: 5}}><Tag color={badge.color}>{`${badge.name} ${badge.level}`}</Tag></span></Components.AnimatedWrapper>
  }

  renderEvent(event) {
    return <Activity event={event} isSmallScreen={this.isSmallScreen}/>
  }

  renderMeta() {
    return <Meta name={mockJourney.name} description={mockJourney.description} img={mockJourney.img} isSmallScreen={this.isSmallScreen} />
  }

  renderTabs() {
    return <Tabs defaultActiveKey="1" onChange={() => {}} style={{color: '#00bfa5', marginTop: 75}}>
      <TabPane tab="Activity" key="1">
        {this._renderEvents()}
        <Icon type="loading" style={{fontSize: 40, color: '#00bfa5', padding: '20px 0'}} />
      </TabPane>
      <TabPane tab="Stories" key="2">
        {this.state.stories? this.renderStories() : this.renderLoading()}
      </TabPane>
      <TabPane tab="Achievments" key="3">{this._renderEvents()}</TabPane>
      <TabPane tab="Code" key="4">{this._renderEvents()}</TabPane>
    </Tabs>
  }

  renderEvents() {
      return mockJourney.events.slice(0).reverse().map(this._renderEvent) 
  }

  renderSkills() {
    return mockJourney.skills.map(this._renderBadge)
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
      { story.chapters.map(chapter => <StoryCard chapter={chapter} />) }
      </div>
  }

  renderLoading() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
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
    if (!this.username) {
      return []
    }

    return this.renderJourney()
  }

  components() {
    return super.components().concat(this.features)
  }
}
