import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
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
import { Row, Col, Avatar, Button} from 'antd'
import  { Icon as AntdIcon } from 'antd'
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
  EmailIcon,
} from 'react-share'
import Fade from 'react-reveal/Fade'

import Story from '../components/Story'

export default class MainStoryScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
    this._chapter = this.props.location.pathname.split('/')[2]
        Promise.all(this.props.stories.map(story => this.importRemoteData(story.source)))
          .then(stories => {
            var index = 0
            return stories.map(story => Object.assign({}, story, this.props.stories[index++])).map(s => new Story(s))
          })
          .then(stories => this.setState({ stories }))
  }

  get chapter() {
    return this._chapter
  }

  renderPostSocialIcons(chapter, justifyContent) {
    return <CardActionIcons style={{ justifyContent: this.isSmallScreen ? "center" : justifyContent ? justifyContent : "flex-end" }}>
      <TwitterShareButton url={chapter.url} title={chapter.quote} hashtags={chapter.hashtags}  style={{ marginRight: "10px" }}>
        <TwitterIcon size={32} round={true}/>
      </TwitterShareButton>
      <LinkedinShareButton url={chapter.url}  description={chapter.quote} style={{ marginRight: "10px" }}>
        <LinkedinIcon size={32} round={true}   />
      </LinkedinShareButton>
      <FacebookShareButton url={chapter.url}  hashtag={`#${chapter.hashtags[0]}`} quote={chapter.quote}  style={{ marginRight: "10px" }}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TelegramShareButton url={chapter.url} title={chapter.quote}  style={{ marginRight: "0px" }}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
    </CardActionIcons>
  }

  renderPostHeader(chapter) {
    if (this.isSmallScreen) {
      return <div style={{
          display: "flex",
          padding: "10px",
          margin: "10px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}>
        <Avatar src="https://github.com/fluidtrends/carmel/raw/master/assets/chunky-logo.gif"
          size="large"
          style={{
            border: "1px solid #B0BEC5"
          }} />
        <div style={{
          display: "flex",
          flex: 1,
          padding: "10px",
          flexDirection: "column"
        }}>
          <Typography use="caption" tag="div" style={{
            color: "#607D8B",
            textAlign: "center"
          }}>
            { chapter.author }
          </Typography>
          <Typography use="caption" tag="div" style={{
            color: "#B0BEC5",
            textAlign: "center"
          }}>
            { chapter.date }
          </Typography>
        </div>
        { this.renderPostCategories(chapter)}
        </div>
    }

    return <div style={{
        display: "flex",
        padding: "10px",
        margin: "10px",
        flexDirection: "row"
      }}>
        <Avatar src="https://github.com/fluidtrends/carmel/raw/master/assets/chunky-logo.gif"
          size="large"
          style={{
            border: "1px solid #B0BEC5"
          }} />
        <div style={{
          display: "flex",
          flex: 1,
          paddingLeft: "20px",
          flexDirection: "column"
        }}>
          <Typography use="caption" tag="div" style={{
            color: "#607D8B"
          }}>
            { chapter.author }
          </Typography>
          <Typography use="caption" tag="div" style={{
            color: "#B0BEC5"
          }}>
            { chapter.date }
          </Typography>
        </div>
        { this.renderPostCategories(chapter)}
      </div>
  }

  renderPostCategories(chapter) {
    return <ChipSet>
        { chapter.tags.map(t => <Chip  style={{backgroundColor: "#F5F5F5", color:"#546E7A" }}><ChipText>{t}</ChipText></Chip>)}
      </ChipSet>
  }

  renderPostActions(chapter) {
    if (this.isSmallScreen) {
      return [<CardActions key="first" style={{ margin: "10px",  justifyContent: "center", display: "flex", flex: 1 }}>
      { this.renderPostSocialIcons(chapter)}
      </CardActions>,
      <CardActions key="second">
      <CardActionButtons style={{justifyContent: "center", display: "flex", flex: 1, marginBottom: "20px" }}>
        <CardAction onClick={() => this.props.history.push(`/story/${chapter.variants[0].url}`)}>Continue Reading</CardAction>
      </CardActionButtons>
      </CardActions>]
    }

    return <CardActions style={{ margin: "10px" }}>
      <CardActionButtons style={{justifyContent: "flex-start", display: "flex", flex: 1 }}>
        <CardAction onClick={() => this.props.history.push(`/story/${chapter.variants[0].url}`)}>Continue Reading</CardAction>
      </CardActionButtons>
      { this.renderPostSocialIcons(chapter)}
    </CardActions>
  }

  renderChapterPreview(chapter) {

    const width = this.isSmallScreen ? "90vw" : "700px"
    const summary = chapter.summary.length > 250 ? `${chapter.summary.substring(0, 250)}...` : chapter.summary

    return <Fade>
      <Card style={{ margin: "20px", width }} onClick={() => {}}>
        { this.renderPostHeader(chapter)}
        <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CardMedia
            sixteenByNine
            style={{
              width: "100%",
              backgroundImage:`url(${chapter.image})`
            }}
          />
          <div style={{ padding: '20px' }}>
            <Typography use="headline5" tag="div" style={{
              color: '#263238',
              margin: "0px 0px 10px 0px"
            }}>
              { chapter.title }
            </Typography>
            <Typography
              use="body1"
              tag="div"
              style={{ textAlign: "left", color: "#607D8B" }}>
              { summary }
            </Typography>
          </div>
        </div>
        { this.renderPostActions(chapter) }
      </Card>
    </Fade>
  }

  renderChapter(chapter) {
    return <div style={{width: '80vw', justifyContent: 'center', marginTop: '50px'}}>
      <h2>
        {chapter.title}
      </h2>
      <Components.Text
        source={chapter.source}
      />
      <div style={{margin: '20px'}}>
        {this.renderPostSocialIcons(chapter, 'center')}
      </div>
      <div style={{margin: '20px'}}>
        <Button
          onClick={() => this.props.history.goBack()}
          style={{
            display: 'flex',
            color: '#ffffff',
            backgroundColor: '#006064',
            border: 'none',
            margin: '10px auto 0',
            height: '35px',
            lineHeight: '15px'
          }}
        >
          <AntdIcon type="arrow-left"/>
          Read Another Story
        </Button>
      </div>
    </div>
  }

  renderStories() {
    const story = this.state.stories[0]

    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      { story.chapters.map(chapter => this.renderChapterPreview(chapter)) }
      </div>
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

  components () {
    if (!this.state.stories) {
      return [this.renderLoading()]
    }

    if (this.chapter) {
      const filteredChapter = this.state.stories[0].chapters.filter(chapter => chapter.variants[0].url === this.chapter)
      return [this.renderChapter(filteredChapter[0])]
    }

    return [this.renderStories()]
  }
}
