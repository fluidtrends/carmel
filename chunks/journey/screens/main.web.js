import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card, Icon, Avatar, Tag } from 'antd';
const { Meta } = Card;

const mockJourney = {
  name: '@clowwwn',
  description: 'Developer. Teacher. Clown. Carmel.io co-founder.',
  xp: 25,
  img: 'http://files.carmel.io/team/andi/profile.png',
  badges: [
    {
      name: 'Best Fisher',
      color: '#9C27B0',
      type: 'tag'
    },
    {
      name: 'Fish Memory',
      color: '#F06292',
      type: 'tag'
    },
    {
      name: 'Slacker',
      color: '#795548',
      type: 'tag'
    },
    {
      name: 'Challenger',
      color: '#03A9F4',
      type: 'tag'
    },
    {
      name: 'Champion',
      color: '#00BCD4',
      type: 'tag'
    },
    {
      name: 'Nerd',
      color: '#FFC107',
      type: 'tag'
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

export default class MainChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }

    this._renderEvent = this.renderEvent.bind(this)
    this._renderBadge = this.renderBadge.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    this._username = this.props.location.pathname.split('/')[2]
    this.setState({
    })
  }

  get cover () {
    return Object.assign({}, this.props.cover, {
      title: this.username? `${this.username}'s #CarmelJourney` : 'Carmel Journeys'
    })
  }

  get username () {
    return this._username
  }

  renderBadge(badge, index) {
    if (this.isSmallScreen) {
      // return
    }

    return <span style={{marginTop: 5}}><Tag color={badge.color}>{badge.name}</Tag></span>
  }

  renderEvent(event) {

    const description = <div style={{fontSize: 12}}>
      {mockJourney.description}
      <br />
      {event.timestamp}
    </div>

    const title = <div style={{display: 'flex', flexDirection: this.isSmallScreen? 'column' : 'row', flex: 2}}>
      <Meta
        avatar={<Avatar src={mockJourney.img}/>}
        title={mockJourney.name}
        description={description}
        style={{flex: 1}}
      />
      <div style={{display: 'flex', flex: 1, paddingLeft: 20, flexWrap: 'wrap'}}>
        {mockJourney.badges.map(this._renderBadge)}
      </div>
    </div>

    const width = this.isSmallScreen? '90vw' : 700

    return <div style={{padding: '20px', textAlign: 'left'}}>
      <Card
        size="small"
        style={{width}}
        title={title}
        actions={[<Icon type="like" style={{fontSize: 20, color: '#00bfa5'}} />, <Icon type="message" style={{fontSize: 20, color: '#00bfa5'}} />, <Icon type="share-alt" style={{fontSize: 20, color: '#00bfa5'}} />]}
      >
        <p>{event.name}</p>
        <div style={{textAlign: 'center'}}>
          <img src={`assets/awards/trophy-${event.award}.svg`} style={{height: 100}}/>
        </div>
      </Card>
    </div>
  }

  renderJourney() {
    return <div style={{textAlign: 'center'}}>
      {mockJourney.events.slice(0).reverse().map(this._renderEvent)}
      <Icon type="loading" style={{fontSize: 40, color: '#00bfa5', padding: '20px 0'}} />
    </div>
  }

  get features() {
    return this.renderJourney()
  }

  components() {
    return super.components().concat(this.features)
  }
}
