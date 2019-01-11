import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, Icon } from 'antd';
const { Meta } = Card;

export default class ActivityCard extends Component {
  constructor (props) {
    super(props)

    this.state = { }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  render () {
		const { event, isSmallScreen } = this.props

    const description = <div style={{fontSize: 12}}>
        {event.timestamp}
    </div>

    const title = <Meta
        title={event.name}
        description={description}
        />

    const width = isSmallScreen? '90vw' : 700

    return <div style={{ paddingTop: 20, textAlign: 'left' }}>
			<Card
				size="small"
				style={{width}}
				title={title}
				actions={[<Icon type="like" style={{fontSize: 20, color: '#00bfa5'}} />, <Icon type="message" style={{fontSize: 20, color: '#00bfa5'}} />, <Icon type="share-alt" style={{fontSize: 20, color: '#00bfa5'}} />]}
				>
					<Components.AnimatedWrapper animation animationType="zoom">
							<div style={{textAlign: 'center'}}>
								<img src={`assets/awards/trophy-${event.award}.svg`} style={{height: 100}}/>
							</div>
					</Components.AnimatedWrapper>
			</Card>
    </div>

  }
}
