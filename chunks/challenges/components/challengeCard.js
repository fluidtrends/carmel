import React from 'react'
import { Component } from 'react-dom-chunky'
import { Card, Icon, Button, Popover } from 'antd'
import { Chip, ChipText, ChipSet } from '@rmwc/chip'
import { Typography } from '@rmwc/typography'
import { Ribbon } from './styledComponents'

const LEVELS = ['Beginner', 'Entry', 'Intermediate', 'Advanced', 'Expert']

export default class ChallengeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderSkills() {
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
          {this.props.challenge.category.map(cat => (
            <Chip
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
            textAlign: 'left'
          }}
        >
          <Icon type="user" style={{ marginRight: '5px' }} />
          {this.props.challenge.author.name}
        </Typography>
      </div>
    )
  }

  renderDifficulty() {
    const xp = (this.props.challenge.level + 1) * 5
    const level = LEVELS[this.props.challenge.level]

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
      <div style={{ position: 'relative' }}>
        <Typography
          use="headline5"
          tag="div"
          style={{
            color: '#455A64',
            maxWidth: '80%',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          }}
        >
          {this.props.challenge.title}
        </Typography>
        <Ribbon
          backgroundColor={
            this.props.challenge.pricePlan === 'free' ? '#00BCD4' : '#00695C'
          }
        >
          {this.props.challenge.pricePlan.toUpperCase()}
        </Ribbon>
        {this.renderEnv()}
      </div>
    )
  }

  renderEnv() {
    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        {this.props.challenge.type.map(t => {
          let content = (
            <p style={{ fontSize: '12px', margin: 0 }}>
              You can do it without installing anything.
            </p>
          )
          let title = 'This is a Playground Challenge.'
          title =
            t === 'playground'
              ? title
              : t === 'cli'
              ? 'This is a Cli Challenge.'
              : 'This is a Studio Challenge.'
          content =
            t === 'playground' ? (
              content
            ) : t === 'cli' ? (
              <p style={{ fontSize: '12px', margin: 0 }}>
                By getting Chunky Cli you will have a real development
                environment setup.
              </p>
            ) : (
              <p style={{ fontSize: '12px', margin: 0 }}>
                For doing this you just need to install the Carmel Studio.
              </p>
            )

          let icon = 'global'
          icon = t === 'playground' ? icon : t === 'cli' ? 'code' : 'desktop'

          return (
            <div
              style={{
                cursor: 'pointer',
                background: '#0288D1',
                borderRadius: '20px',
                height: '35px',
                width: '120px',
                lineHeight: '35px',
                textAlign: 'center',
                margin: '5px'
              }}
            >
              <Popover content={content} title={title} placement={'right'}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '5px',
                    color: '#fff'
                  }}
                >
                  {t.toUpperCase()}
                </span>
                <Icon type={icon} style={{ color: '#fff', fontSize: '12px' }} />
              </Popover>
            </div>
          )
        })}
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
      </Card>
    )
  }
}
