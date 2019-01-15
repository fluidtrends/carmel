import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Icon, Card, Popover, Button } from 'antd'
import Bounty from '../components/bounty'

const mockBounties = [
  {
    id: 0,
    type: 'share',
    title: 'Carmel is Launching!!!',
    content: `To the mooooooon! When lambo?????
      Share this with your friends to get something in return!
      Do it now!
      Don't miss!
      Or Andrei will fire us!
      Pleaseeeee!
    `,
    available: 26
  },
  {
    id: 1,
    type: 'video',
    question: 'When is Carmel going live?',
    answers: [
      '25 Jan 2019',
      '21 Jan 2019',
      '01 Mar 2019',
      `It's already live!`
    ],
    title: 'Watch this video!',
    url: 'https://www.youtube.com/watch?v=qrHBVDbrOOY',
    available: 26
  }
]

export default class MainJourneyScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }

    this._renderBounty = this.renderBounty.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    
  }

  renderBounty(bounty) {
    return <Bounty isSmallScreen={this.isSmallScreen} bounty={bounty} />
  }

  renderBounties() {
    return mockBounties.slice(0).reverse().map(this._renderBounty) 
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

  get features() {
    return <div style={{ padding: '50px 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {this.renderBounties()}
    </div>
  }

  components() {
    return super.components().concat(this.features)
  }
}
