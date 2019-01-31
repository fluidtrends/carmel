import React from 'react'
import { Screen, Component, Components } from 'react-dom-chunky'
import { LinearProgress } from '@rmwc/linear-progress'
import { Typography } from '@rmwc/typography'
import { Chip, ChipText, ChipIcon, ChipSet } from '@rmwc/chip'
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@rmwc/card'
import { Row, Col, Avatar, Button } from 'antd'
import { Icon as AntdIcon } from 'antd'
import { Icon } from '@rmwc/icon'
import { Grid, GridCell, GridInner } from '@rmwc/grid'
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
import Fade from 'react-reveal/Fade'

export default class ChapterPreview extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderCompact() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      </div>
  }

  renderDefault() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
    </div>
  }

  renderChapterPreview() {
    const width = this.props.isSmallScreen ? '90vw' : '700px'
    const summary =
      this.props.chapter.summary.length > 250
        ? `${this.props.chapter.summary.substring(0, 250)}...`
        : this.props.chapter.summary

    return (
      <Fade>
        <Card style={{ margin: '20px', width }} onClick={() => {}}>
          {this.renderPostHeader(chapter)}
          <div
            style={{
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <CardMedia
              sixteenByNine
              style={{
                width: '100%',
                backgroundImage: `url(${this.props.chapter.image})`
              }}
            />
            <div style={{ padding: '20px' }}>
              <Typography
                use="headline5"
                tag="div"
                style={{
                  color: '#263238',
                  margin: '0px 0px 10px 0px'
                }}
              >
                {this.props.chapter.title}
              </Typography>
              <Typography
                use="body1"
                tag="div"
                style={{ textAlign: 'left', color: '#607D8B' }}
              >
                {summary}
              </Typography>
            </div>
          </div>
          {this.renderPostActions(chapter)}
        </Card>
      </Fade>
    )
  }

  render () {
    return this.props.compact ? this.renderCompact() : this.renderDefault()
  }
}
