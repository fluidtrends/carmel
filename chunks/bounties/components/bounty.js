import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, Popover, Button } from 'antd'

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
  
export default class Bounty extends Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderContent(bounty) {
    let content = <div style={{fontSize: 16}}>
      {bounty.content}
    </div>

    const width = 300

    if (bounty.type == 'video') {
      content = <Components.Presentation style={{}} url={bounty.url} />
    }

    return content
  }

  render () {

	const { isSmallScreen, bounty } = this.props

    const available = <div style={{fontSize: 12}}>
        Available bounties: {bounty.available} 
    </div>

    const hashtags = ['carmelrocks', 'awesomeness', 'tothe🌙', 'roadto1B']

    const shareContent = <div style={{display: 'flex'}}>
      <TwitterShareButton url={'https://carmel.io'} title={'Carmel aAunch'} hashtags={hashtags}  style={{ marginRight: "10px", cursor: 'pointer' }}>
        <TwitterIcon size={32} round={true}/>
      </TwitterShareButton>
      <LinkedinShareButton url={'https://carmel.io'} title="Carmel is Launched" description={bounty.content} style={{ marginRight: "10px", cursor: 'pointer' }}>
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

    // return <div>dsfsdf</div>
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
                    {this.renderContent(bounty)}
            </Components.AnimatedWrapper>
        </Card>
    </div>
  }
}
