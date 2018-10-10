import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions } from '@rmwc/card'
import { Button, ButtonIcon } from '@rmwc/button'
import { ListDivider } from '@rmwc/list'
import { Typography } from '@rmwc/typography'
import { List, Avatar, Rate, Progress, Row, Col, Icon } from 'antd'
import { Chip, ChipText, ChipIcon, ChipSet } from '@rmwc/chip'

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
      textAlign: 'center',
      padding: '0px'
    }}>
      <ChipSet style={{ margin: '0px' }}>
        {
          this.props.challenge.skills.map(skill => <Chip style={{ backgroundColor: '#ECEFF1', color: '#00bcd4'}} key={skill}>
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
      { this.props.challenge.summary }
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
    return <div style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      display: 'flex',
      height: '50px',
      padding: '0px'
    }}>
      <Typography use='caption' tag='div' style={{
        color: '#B0BEC5',
        textAlign: 'left'
      }}>
        <Icon type='user' style={{marginRight: '5px'}} />
        { this.props.challenge.author.name }
      </Typography>
    </div>
  }

  renderDifficulty () {
    const xp = (this.props.challenge.level + 1) * 5
    const level = LEVELS[this.props.challenge.level]

    return <Typography use='body1' tag='div' style={{
      color: '#00bcd4',
      textAlign: 'right',
      display: 'flex',
      height: '50px',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: '0px'
    }}>
      <Chip style={{
        backgroundColor: '#ffffff',
        color: '#00bcd4',
        border: '1px solid #00bcd4',
        padding: '0px'
      }}>
        <span style={{padding: '0px 10px 0px 10px'}}>
          { level }
        </span>
        <Chip style={{ backgroundColor: '#00bcd4', color: '#ffffff', margin: '-1px'}}>
          <ChipText> { xp } XP </ChipText>
        </Chip>
      </Chip>
    </Typography>
  }

  renderDetails () {
    return <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '10px',
      marginTop: '-10px'
    }}>
      { this.renderAuthor() }
      { this.renderDifficulty() }
    </div>
  }

  render () {
    return <div style={{
      padding: '0px'
    }}>
      { this.renderTitle() }
      <div style={{
        padding: '10px'
      }}>
        { this.renderSummary() }
        { this.renderDetails() }
        { this.renderSkills() }
      </div>
    </div>
  }

}
