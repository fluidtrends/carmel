import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { CardActionIcons } from '@rmwc/card'
import { Card, CardMedia, CardActions } from '@rmwc/card'
import { Typography } from '@rmwc/typography'
import { Avatar } from 'antd'
import moment from 'moment'
import SocialIcons from './socialIcons'

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

export default class Chapter extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get authorImage() {
    if (this.props.chapter.author && this.props.chapter.author.pic) {
      return this.props.chapter.author.pic
    }

    return 'https://github.com/fluidtrends/carmel/raw/master/assets/chunky-logo.gif'
  }

  get authorName() {
    if (this.props.chapter.author && this.props.chapter.author.name) {
      return this.props.chapter.author.name
    }

    return ''
  }

  get date() {
    if (this.props.chapter.date) {
      return moment(this.props.chapter.date, 'x').format('DD MMMM YYYY')
    }

    return ''
  }

  renderSocialIcons() {
    return <SocialIcons compact chapter={this.props.chapter} />
  }

  renderHeader() {
    const { chapter, compact, authorImage } = this.props
    const width = compact ? '90vw' : '700px'

    return (
      <Card
        style={{
          margin: '20px',
          maxWidth: width,
          width: '100%',
          padding: '20px',
          boxShadow: 'none'
        }}
      >
        <Typography
          use="headline4"
          tag="div"
          style={{
            color: '#263238',
            margin: '0px 0px 10px 0px',
            textAlign: 'center'
          }}
        >
          {chapter.title}
        </Typography>
        <div
          style={{
            display: 'flex',
            padding: '10px',
            margin: '10px',
            flexDirection: 'row'
          }}
        >
          <Avatar
            src={this.authorImage}
            size="large"
            style={{
              border: '1px solid #B0BEC5'
            }}
          />
          <div
            style={{
              display: 'flex',
              flex: 1,
              paddingLeft: '20px',
              flexDirection: 'column'
            }}
          >
            <Typography
              use="caption"
              tag="div"
              style={{
                color: '#607D8B'
              }}
            >
              {this.authorName}
            </Typography>
            <Typography
              use="caption"
              tag="div"
              style={{
                color: '#B0BEC5'
              }}
            >
              {this.date}
            </Typography>
          </div>
        </div>
        <CardMedia
          sixteenByNine
          style={{
            width: '100%',
            backgroundImage: `url(${chapter.image})`
          }}
        />
        <CardActions style={{ margin: '10px' }}>
          {this.renderSocialIcons()}
        </CardActions>
      </Card>
    )
  }

  render() {
    const url = `${window.location.origin}/story/${this.props.chapter.slug}`
    const { compact, chapter, source, chapterId } = this.props
    const width = compact ? '90vw' : '700px'

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          marginTop: '40px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {this.renderHeader()}
        <Card
          style={{
            margin: '20px',
            maxWidth: width,
            width: '100%',
            padding: '20px',
            boxShadow: 'none'
          }}
          onClick={() => {}}
        >
          <Components.Text
            source={`${source}/chapters/${chapterId}/README.md`}
          />
          <CardActions style={{ margin: '10px' }}>
            <p style={{ margin: 0 }}>Enjoying this story? Give it a share!</p>
            {this.renderSocialIcons()}
          </CardActions>
        </Card>
      </div>
    )
  }
}
