import React from 'react'
import { Component } from 'react-dom-chunky'
import { CardActionIcons } from '@rmwc/card'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  EmailIcon
} from 'react-share'

export default class SocialIcons extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  render() {
    const url = `https://carmel.io/story/${this.props.chapter.slug}`

    return (
      <CardActionIcons
        style={{
          justifyContent: this.props.compact ? 'center' : 'flex-end'
        }}
      >
        <TwitterShareButton
          url={url}
          title={this.props.chapter.quote}
          hashtags={this.props.chapter.hashtags}
          style={{ marginRight: '10px' }}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton
          url={url}
          description={this.props.chapter.quote}
          style={{ marginRight: '10px' }}
        >
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <FacebookShareButton
          url={url}
          hashtag={`#${this.props.chapter.hashtags[0]}`}
          quote={this.props.chapter.quote}
          style={{ marginRight: '10px' }}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TelegramShareButton
          url={url}
          title={this.props.chapter.quote}
          style={{ marginRight: '0px' }}
        >
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
      </CardActionIcons>
    )
  }
}
