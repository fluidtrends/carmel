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
import Fade from 'react-reveal/Fade'
import SocialIcons from './socialIcons'
import moment from 'moment'

export default class ChapterPreview extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state }
    this._onSelected = this.onSelected.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  onSelected() {
    this.props.onSelected && this.props.onSelected(this.props.chapter)
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
    return (
      <SocialIcons compact={this.props.compact} chapter={this.props.chapter} />
    )
  }

  renderCategories() {
    return (
      <ChipSet>
        {this.props.chapter.tags.map(t => (
          <Chip style={{ backgroundColor: '#F5F5F5', color: '#546E7A' }}>
            <ChipText>{t}</ChipText>
          </Chip>
        ))}
      </ChipSet>
    )
  }

  renderDefaultActions() {
    return (
      <CardActions style={{ margin: '10px' }}>
        <CardActionButtons
          style={{ justifyContent: 'flex-start', display: 'flex', flex: 1 }}
        >
          <CardAction onClick={this._onSelected}>Continue Reading</CardAction>
        </CardActionButtons>
        {this.renderSocialIcons()}
      </CardActions>
    )
  }

  renderCompactActions() {
    return [
      <CardActions
        key="first"
        style={{
          margin: '10px',
          justifyContent: 'center',
          display: 'flex',
          flex: 1
        }}
      >
        {this.renderSocialIcons()}
      </CardActions>,
      <CardActions key="second">
        <CardActionButtons
          style={{
            justifyContent: 'center',
            display: 'flex',
            flex: 1,
            marginBottom: '20px'
          }}
        >
          <CardAction onClick={this._onSelected}>Continue Reading</CardAction>
        </CardActionButtons>
      </CardActions>
    ]
  }

  renderActions() {
    return this.props.compact
      ? this.renderCompactActions()
      : this.renderDefaultActions()
  }

  renderCompactHeader() {
    return (
      <div
        style={{
          display: 'flex',
          padding: '10px',
          margin: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
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
            padding: '10px',
            flexDirection: 'column'
          }}
        >
          <Typography
            use="caption"
            tag="div"
            style={{
              color: '#607D8B',
              textAlign: 'center'
            }}
          >
            {this.authorName}
          </Typography>
          <Typography
            use="caption"
            tag="div"
            style={{
              color: '#B0BEC5',
              textAlign: 'center'
            }}
          >
            {this.date}
          </Typography>
        </div>
        {this.renderCategories()}
      </div>
    )
  }

  renderDefaultHeader() {
    return (
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
        {this.renderCategories()}
      </div>
    )
  }

  renderHeader() {
    return this.props.compact
      ? this.renderCompactHeader()
      : this.renderDefaultHeader()
  }

  render() {
    const width = this.props.compact ? '90vw' : '700px'
    const summary =
      this.props.chapter.summary.length > 250
        ? `${this.props.chapter.summary.substring(0, 250)}...`
        : this.props.chapter.summary

    return (
      <Fade>
        <Card style={{ margin: '20px', width }} onClick={() => {}}>
          {this.renderHeader()}
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
          {this.renderActions()}
        </Card>
      </Fade>
    )
  }
}
