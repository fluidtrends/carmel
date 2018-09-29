import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { ListDivider } from 'rmwc/List'
import { Typography } from 'rmwc/Typography'
import { List, Avatar, Rate, Progress, Row, Col, Icon } from 'antd'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'

const LEVELS = ['Beginner', 'Entry', 'Intermediate', 'Advanced', 'Expert']

export default class ChallengeHeader extends Component {
  constructor (props) {
    super(props)

    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderSkills () {
    return <Typography use='body1' tag='div' style={{
      color: '#90A4AE',
      padding: '0px'
    }}>
      <ChipSet style={{ margin: '0px' }}>
        {
          this.props.challenge.skills.map(skill => <Chip style={{ backgroundColor: '#FAFAFA', color: '#00bcd4'}} key={skill}>
            <ChipText> { skill } </ChipText>
          </Chip>)
        }
      </ChipSet>
    </Typography>
  }

  renderSummary () {
    return <Typography use='body1' tag='div' style={{
      color: '#90A4AE',
      padding: '10px'
    }}>
      { this.props.challenge.summary}
    </Typography>
  }

  renderTitle () {
    return <Typography use='title' tag='div' style={{
      color: '#ffffff',
      backgroundColor: '#00bcd4',
      padding: '10px'
    }}>
      { this.props.challenge.title}
    </Typography>
  }

  renderAuthor () {
    if (!this.props.challenge.author || !this.props.challenge.author.name) {
      return <div />
    }

    return <Typography use='overline' tag='div' style={{
      color: '#90A4AE',
      textAlign: 'left',
      padding: '10px'
    }}>
      <Icon type='user' theme='filled' /> { this.props.challenge.author.name }
    </Typography>
  }

  renderDifficulty () {
    const xp = (this.props.challenge.level + 1) * 5
    const tokens = parseFloat(xp * 1.00).toFixed(2)

    return <Typography use='body1' tag='div' style={{
      color: '#00bcd4',
      textAlign: 'left',
      padding: '10px'
    }}>
      <Rate character={<Icon type='rocket' />} disabled defaultValue={this.props.challenge.level + 1} style={{
        color: '#00bcd4'
      }} />
      <Chip style={{ backgroundColor: '#00bcd4', color: '#ffffff'}}>
        <ChipText> { xp } XP </ChipText>
      </Chip>
      <Chip style={{ backgroundColor: '#ffffff', color: '#4CAF50', border: '1px solid #4CAF50'}}>
        <ChipText> { tokens } CARMEL </ChipText>
      </Chip>
    </Typography>
  }

  render () {
    return <div style={{
      padding: '0px'
    }}>
      { this.renderTitle() }
      <div style={{
        padding: '10px'
      }}>
        { this.renderAuthor() }
        { this.renderSummary() }
        { this.renderSkills() }
        { this.renderDifficulty() }
      </div>
    </div>
  }

}
