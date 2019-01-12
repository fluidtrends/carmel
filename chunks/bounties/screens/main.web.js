import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Icon, Card, Popover, Button } from 'antd';
const { Meta } = Card;

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
} from 'react-share'

const mockBounties = [
  {
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
    const { isSmallScreen } = this

    const content = <div style={{fontSize: 12}}>
        {bounty.content}
    </div>

    const available = <div style={{fontSize: 12}}>
        Available bounties: {bounty.available} 
    </div>

    const hashtags = ['carmelrocks', 'awesomeness', 'tothe🌙', 'roadto1B']

    const shareContent = <div style={{display: 'flex'}}>
      <TwitterShareButton url={'https://carmel.io'} title={'CArmel LAunch'} hashtags={hashtags}  style={{ marginRight: "10px", cursor: 'pointer' }}>
        <TwitterIcon size={32} round={true}/>
      </TwitterShareButton>
      <LinkedinShareButton url={'https://carmel.io'}  description={'whate'} style={{ marginRight: "10px", cursor: 'pointer' }}>
        <LinkedinIcon size={32} round={true}   />
      </LinkedinShareButton>
      <FacebookShareButton url={'https://carmel.io'}  hashtag={hashtags[3]} quote={'Carmel is now live!'}  style={{ marginRight: "10px", cursor: 'pointer' }}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TelegramShareButton url={'https://carmel.io'} title={'Join Carmel today!'}  style={{ marginRight: "0px", cursor: 'pointer' }}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
    </div>

    const title = <Meta
        title={bounty.title}
        description={available}
        />

    const width = isSmallScreen? '70vw' : 400



    return <div style={{ padding: 20, textAlign: 'left' }}>
			<Card
				size="small"
				style={{width}}
				title={title}
				actions={[
          <Popover content={shareContent}>
            <Button icon="share-alt" style={{borderColor: '#00bcd4', color: '#00bcd4'}}>Share</Button>
          </Popover>
        ]}
			>
					<Components.AnimatedWrapper animation animationType="zoom">
							{content}
					</Components.AnimatedWrapper>
			</Card>
    </div>
  }

  renderBounties() {
    return mockBounties.slice(0).reverse().map(this._renderBounty) 
  }

  // renderSkills() {
  //   return mockBounties.skills.map(this._renderBadge)
  // }


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
