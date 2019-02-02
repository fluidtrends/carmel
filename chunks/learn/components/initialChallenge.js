import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, Icon, Button } from 'antd'
import { Chip, ChipText, ChipIcon, ChipSet } from '@rmwc/chip'
import { Typography } from '@rmwc/typography'
const LEVELS = ['Beginner', 'Entry', 'Intermediate', 'Advanced', 'Expert']

export default class InitialChallenge extends Component {
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
          <Chip style={{ backgroundColor: '#ECEFF1', color: '#00bcd4' }}>
            <ChipText> Beginner </ChipText>
          </Chip>
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
      <Typography
        use="headline5"
        tag="div"
        style={{
          color: '#ffffff',
          backgroundColor: '#00bcd4',
          padding: '10px'
        }}
      >
        {this.props.challenge.title}
      </Typography>
    )
  }

  render() {
    const { challenge } = this.props
    let prompt = 'Take Challenge'

    if (challenge.history && challenge.history.status === 'completed') {
      prompt = `Rate Challenge`
    }
    return (
      <Card title={this.renderTitle()}>
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
