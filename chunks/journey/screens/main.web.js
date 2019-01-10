import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const mockJourney = {
  name: '@clowwwn',
  description: 'Developer. Teacher. Clown. Carmel.io co-founder.',
  xp: 25,
  img: '',
  badges: [], 
  events: [
    {
      timestamp: '2h',
      name: 'Started Intro challenge'
    },
    {
      timestamp: '1.5h',
      name: 'Stoped Intro challenge'
    },
    {
      timestamp: '1h',
      name: 'Finished Intro challenge'
    },
    {
      timestamp: '5 min ago',
      name: 'Started Chunky challenge'
    },
    {
      timestamp: '4 min ago',
      name: 'Stopped Chunky challenge'
    },
    {
      timestamp: '2 min ago',
      name: 'Failed Chunky challenge'
    },
    {
      timestamp: '10 seconds ago',
      name: 'Finished Chunky challenge'
    }
  ]
}

export default class MainChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }
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

  renderEvent(event) {

    const description = <div style={{fontSize: 12}}>
      {mockJourney.description}
      <br />
      {event.timestamp}
    </div>

    const title = <Meta
      avatar={<Avatar src="http://files.carmel.io/team/andi/profile.png" />}
      title={mockJourney.name}
      description={description}
    />

    return <div style={{padding: '20px 0'}}>
      <Card
        size="small"
        title={title}
        actions={[<Icon type="like" />, <Icon type="message" />, <Icon type="share-alt" />]}
        style={{ width: 700 }}
      >
        <p>{event.name}</p>
      </Card>
    </div>
  }

  renderJourney() {
    return mockJourney.events.slice(0).reverse().map(this.renderEvent)
  }

  get features() {
    return this.renderJourney()
  }

  components() {
    return super.components().concat(this.features)
  }
}
