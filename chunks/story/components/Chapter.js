import React from 'react'
import { Component, Components, Utils } from 'react-dom-chunky'
import { CardActionIcons } from '@rmwc/card'
import { Card, CardMedia, CardActions } from '@rmwc/card'
import { Typography } from '@rmwc/typography'
import { Avatar, Modal, Icon, Button } from 'antd'
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
    this.state = { ...super.state, modalVisible: false, videoPlaying: false }

    this._showModal = this.showModal.bind(this)
    this._hideModal = this.hideModal.bind(this)
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
      return moment(this.props.chapter.date, 'YYYY-MM-DD').format(
        'MMMM D, YYYY'
      )
    }

    return ''
  }

  showModal() {
    this.setState({ modalVisible: true, videoPlaying: true })
  }

  hideModal() {
    this.setState({ modalVisible: false, videoPlaying: false })
  }

  renderSocialIcons() {
    return <SocialIcons compact chapter={this.props.chapter} />
  }

  renderVideoHeader() {
    const { chapter, compact } = this.props
    const width = compact ? '90vw' : '700px'
    const fontSize = compact ? 40 : 70

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
        <CardMedia>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '80px 0',
              height: '250px'
            }}
          >
            <div
              style={{
                width: '90vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {this.renderImage()}
              <Icon
                onClick={this._showModal}
                type="play-circle"
                className="icon"
                theme="filled"
                style={{
                  fontSize,
                  position: 'absolute',
                  cursor: 'pointer',
                  background: 'transparent'
                }}
              />
              <style jsx>
                {`
                  div :global(.icon) {
                    color: ${'#546E7A'};
                  }
                  div :global(.icon):hover {
                    color: ${this.props.hoverColor
                      ? this.props.hoverColor
                      : '#00bcd4'};
                  }
                `}
              </style>
            </div>
          </div>
        </CardMedia>
        <CardActions style={{ margin: '10px' }}>
          <p style={{ margin: 0 }}>Enjoying this story? Give it a share!</p>
          {this.renderSocialIcons()}
        </CardActions>
      </Card>
    )
  }

  renderImage() {
    const { chapter } = this.props

    return Utils.renderResponsive(
      'image',
      <img
        src={`${chapter.image}`}
        style={{
          width: '80vw',
          opacity: 0.5,
          boxShadow: ' 0 5px 20px 0 rgba(0,0,0,.15)'
        }}
      />,
      <img
        src={`${chapter.image}`}
        style={{
          width: '700px',
          maxWidth: '90vw',
          opacity: 0.5,
          boxShadow: ' 0 5px 20px 0 rgba(0,0,0,.15)'
        }}
      />
    )
  }

  renderHeader() {
    const { chapter, compact } = this.props
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

  renderModal() {
    const width = this.isSmallScreen ? '80vw' : 1200
    const marginTop = this.isSmallScreen ? 150 : 0
    const paddingTop = '56.25%'
    const { chapter } = this.props

    return (
      <Modal
        centered
        cancelButtonProps={{ shape: 'circle', type: 'danger' }}
        onCancel={this._hideModal}
        width={width}
        bodyStyle={{ paddingTop, marginTop }}
        footer={null}
        visible={this.state.modalVisible}
      >
        <Components.Media
          video={chapter.video}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          playing={this.state.videoPlaying}
        />
      </Modal>
    )
  }

  render() {
    const url = `${window.location.origin}/story/${this.props.chapter.slug}`
    const { compact, source, chapterId } = this.props
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
        {this.props.chapter.video
          ? this.renderVideoHeader()
          : this.renderHeader()}
        {!this.props.chapter.video && (
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
        )}
        <Button
          type="primary"
          onClick={this.props.goBack}
          style={{
            margin: '0 0 30px',
            backgroundColor: '#04bdd4',
            borderColor: '#04bdd4'
          }}
        >
          Read more Stories
          <Icon type="book" />
        </Button>
        {this.renderModal()}
      </div>
    )
  }
}
