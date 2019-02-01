import React from 'react'
import { Component } from 'react-dom-chunky'
import { Card, Icon, Button, Popover } from 'antd'
import { Chip, ChipText, ChipSet } from '@rmwc/chip'
import { Typography } from '@rmwc/typography'
import { Ribbon } from './styledComponents'

export default class ChallengeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderSkills() {
    const category = Object.keys(this.props.challenge.skills)

    return (
      <Typography
        use="headline5"
        tag="div"
        style={{
          color: '#90A4AE',
          textAlign: 'left',
          padding: '0px'
        }}
      >
        <ChipSet style={{ margin: '0px' }}>
          {category.map(cat => (
            <Chip
              id={cat}
              onInteraction={evt =>
                this.props.onCategoryClick
                  ? this.props.onCategoryClick(evt.detail.chipId)
                  : false
              }
              style={{ backgroundColor: '#ECEFF1', color: '#00bcd4' }}
              key={`${cat}-${this.props.challenge.id}`}
            >
              <ChipText> {cat} </ChipText>
            </Chip>
          ))}
        </ChipSet>
      </Typography>
    )
  }

  renderSummary() {
    return (
      <Typography
        use="body1"
        tag="div"
        style={{
          color: '#90A4AE',
          padding: '10px'
        }}
      >
        {this.props.challenge.summary}
      </Typography>
    )
  }

  renderAuthor() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          display: 'flex',
          height: '50px',
          padding: '0px'
        }}
      >
        <Typography
          use="caption"
          tag="div"
          style={{
            color: '#B0BEC5',
            textAlign: 'left',
            cursor: 'pointer'
          }}
          onClick={() => window.open(this.props.challenge.author.link)}
        >
          <Icon type="user" style={{ marginRight: '5px' }} />
          {this.props.challenge.authorName}
        </Typography>
      </div>
    )
  }

  renderDifficulty() {
    let s = 0
    for (let key in this.props.challenge.skills) {
      s += this.props.challenge.skills[key]
    }
    const xp = s * 5
    const level = this.props.challenge.level

    return (
      <Typography
        use="body1"
        tag="div"
        style={{
          color: '#00bcd4',
          textAlign: 'right',
          display: 'flex',
          height: '50px',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: '0px'
        }}
      >
        <Chip
          style={{
            backgroundColor: '#ffffff',
            color: '#00bcd4',
            border: '1px solid #00bcd4',
            padding: '0px'
          }}
        >
          <span style={{ padding: '0px 10px 0px 10px' }}>{level}</span>
          <Chip
            style={{
              backgroundColor: '#00bcd4',
              color: '#ffffff',
              margin: '-1px'
            }}
          >
            <ChipText> {xp} XP </ChipText>
          </Chip>
        </Chip>
      </Typography>
    )
  }

  renderDetails() {
    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '10px',
          marginTop: '-10px'
        }}
      >
        {this.renderAuthor()}
        {this.renderDifficulty()}
      </div>
    )
  }

  renderTitle() {
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        {this.renderEnv()}
        <Typography
          use="headline5"
          tag="div"
          style={{
            color: '#455A64',
            maxWidth: '90%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            display: 'inline-block'
          }}
        >
          {this.props.challenge.title}
        </Typography>
        <Ribbon backgroundColor={'#00BCD4'}>
          {this.props.challenge.type.toUpperCase()}
        </Ribbon>
      </div>
    )
  }

  renderEnv() {
    const content =
      this.props.challenge.type === 'Professional'
        ? 'By getting Chunky Cli you will have a real development environment setup.'
        : 'You can do it without installing anything.'
    const title =
      this.props.challenge.type === 'Professional'
        ? 'This is a Cli Challenge.'
        : 'This is a Playground Challenge.'
    const icon =
      this.props.challenge.type === 'Professional' ? 'code' : 'global'
    return (
      <div
        style={{
          cursor: 'pointer',
          background: '#fff',
          borderRadius: '20px',
          borderColor: '#00bcd4',
          height: '35px',
          lineHeight: '35px',
          textAlign: 'center',
          margin: '5px',
          display: 'inline-block'
        }}
      >
        <Popover content={content} title={title} placement={'top'}>
          <Icon type={icon} style={{ color: '#00bcd4', fontSize: '12px' }} />
        </Popover>
      </div>
    )
  }

  render() {
    const { challenge } = this.props
    let prompt = 'Take Challenge'

    if (challenge.history && challenge.history.status === 'completed') {
      prompt = `Rate Challenge`
    }
    return (
      <Card title={this.renderTitle()} className={'challenge-card'}>
        {this.renderSummary()}
        {this.renderDetails()}
        {this.renderSkills()}
        {!this.props.hideButton && (
          <Button
            onClick={() => this.props.onSelectChallenge(challenge)}
            style={{
              display: 'flex',
              color: '#ffffff',
              backgroundColor: challenge.history ? '#03A9F4' : '#00bcd4',
              border: 'none',
              margin: '10px auto 0',
              height: '35px',
              lineHeight: '15px'
            }}
          >
            {prompt} <Icon type="caret-right" />
          </Button>
        )}
      </Card>
    )
  }
}
