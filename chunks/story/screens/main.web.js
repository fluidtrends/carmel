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
import { Row, Col, Avatar } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
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

export default class MainStoryScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, loading: true }
  }

  componentDidMount () {
    super.componentDidMount()
    this.importRemoteData(this.props.index).then(posts => {
      this.setState({ posts, loading: false })
    })
  }

  renderPostSocialIcons(post) {
    return <CardActionIcons style={{ }}>
      <TwitterShareButton url={post.url} title={post.quote} hashtags={post.hashtags}  style={{ marginRight: "10px" }}>
        <TwitterIcon size={32} round={true}/>
      </TwitterShareButton>
      <LinkedinShareButton url={post.url}  description={post.quote} style={{ marginRight: "10px" }}>
        <LinkedinIcon size={32} round={true}   />
      </LinkedinShareButton>
      <FacebookShareButton url={post.url}  hashtag={`#${post.hashtags[0]}`} quote={post.quote}  style={{ marginRight: "10px" }}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TelegramShareButton url={post.url} title={post.quote}  style={{ marginRight: "0px" }}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
    </CardActionIcons>
  }

  renderPostHeader(post) {
    if (this.isSmallScreen) {
      return   <div style={{
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
            { post.author }
          </Typography>
          <Typography use="caption" tag="div" style={{
            color: "#B0BEC5",
            textAlign: "center"
          }}>
            { post.date }
          </Typography>
        </div>
        { this.renderPostSocialIcons(post)}
        </div>
    }

    return   <div style={{
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
            { post.author }
          </Typography>
          <Typography use="caption" tag="div" style={{
            color: "#B0BEC5"
          }}>
            { post.date }
          </Typography>
        </div>
        { this.renderPostSocialIcons(post)}
      </div>
  }

  renderPostCategories(post) {
    return <ChipSet>
        { post.categories.map(c => <Chip  style={{backgroundColor: "#F5F5F5", color:"#546E7A" }}><ChipText>{c}</ChipText></Chip>)}
      </ChipSet>
  }

  renderPostActions(post) {
    if (this.isSmallScreen) {
      return [<CardActions key="first" style={{ margin: "10px",  justifyContent: "center", display: "flex", flex: 1 }}>
      { this.renderPostCategories(post)}
      </CardActions>,
      <CardActions key="second">
      <CardActionButtons style={{justifyContent: "center", display: "flex", flex: 1, marginBottom: "20px" }}>
        <CardAction onClick={() => console.log("D")}>Continue Reading</CardAction>
      </CardActionButtons>
      </CardActions>]
    }

    return <CardActions style={{ margin: "10px" }}>
        { this.renderPostCategories(post)}
      <CardActionButtons style={{justifyContent: "flex-end", display: "flex", flex: 1 }}>
        <CardAction onClick={() => console.log("D")}>Continue Reading</CardAction>
      </CardActionButtons>
    </CardActions>
  }

  renderPost(post) {
    const width = this.isSmallScreen ? "90vw" : "700px"
    const summary = post.summary.length > 250 ? `${post.summary.substring(0, 250)}...` : post.summary

    return <Card style={{ margin: "20px", width }} onClick={() => {}}>
        { this.renderPostHeader(post)}
        <CardPrimaryAction style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CardMedia
            sixteenByNine
            style={{
              width: "100%",
              backgroundImage:`url(${post.image})`
            }}
          />
          <div style={{ padding: '20px' }}>
            <Typography use="headline5" tag="div" style={{
              color: '#263238',
              margin: "0px 0px 10px 0px"
            }}>
                { post.title }
            </Typography>
            <Typography
              use="body1"
              tag="div"
              style={{ textAlign: "left", color: "#607D8B" }}>
              { summary }
            </Typography>
          </div>
        </CardPrimaryAction>

        { this.renderPostActions(post) }
      </Card>
  }

  get posts() {
    return [{
      image: "https://github.com/fluidtrends/carmel/raw/master/assets/guilds.r.png",
      author: "I. Dan Calinescu",
      categories: ["The Story", "Insights", "Education"],
      url: "https://carmel.io/story",
      hashtags: ["CarmelStory", "RoadTo1B"],
      quote: "This is the Carmel Story",
      authorImage: 'https://github.com/fluidtrends/carmel/raw/master/assets/chunky-logo.gif',
      date: "Nov 19, 2018",
      title: "I Could Have Ended Up A Street Hustler",
      summary: "We had settled in Toronto, Canada for about five years at that point - the year was 1999. This was our first trip back to Romania since we had left and it was an emotional one to say the least. My parents, my brother and I. We had travelled back to where we grew up, in Bucharest, and even reconnected with some of the people we grew up with. One of those people was my best friend growing up in Bucharest when we were kids. We used to do everything together, even fight together get in trouble together, be scared together and just literally spend hours of our day roaming the streets of Bucharest in the 80s and do what kids used to do back then - nothing and everything."
    }]
  }

  renderPosts() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        { this.posts.map(post => this.renderPost(post))}
      </div>
  }

  components () {
    return [this.renderPosts()]
  }
}
