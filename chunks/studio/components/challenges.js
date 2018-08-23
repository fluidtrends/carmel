import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { List, Avatar, Icon } from 'antd'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'

export default class Challenges extends Component {
  constructor (props) {
    super(props)

    this.state = { ...this.state }
    this._selectChallenge = (item) => this.selectChallenge.bind(this, item)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  selectChallenge (item) {
    this.props.onSelectChallenge && this.props.onSelectChallenge(item)
  }

  renderChallengeTitle (challenge) {
    return <Typography use='title' style={{
      textAlign: 'center',
      color: '#00bcd4'
    }}>
      { challenge.title }
    </Typography>
  }

  renderChallengeSubtitle (challenge) {
    return <Typography use='body2' style={{
      textAlign: 'center',
      color: '#455A64'
    }}>
      { challenge.summary }
    </Typography>
  }

  renderMainAction (item) {
    if (item.completed) {
      return <Typography use='body2' style={{
        textAlign: 'center',
        color: '#4CAF50'
      }}>
        <Icon type={'check-circle'} style={{ marginRight: 8, color: '#4CAF50' }} />
        You already completed this challenge
      </Typography>
    }
    return <Button
      style={{
        color: '#00bcd4',
        backgroundColor: `#ffffff`
      }}
      onClick={this._selectChallenge(item)}>
      See Challenge Details
    </Button>
  }

  renderChallenge (item, index) {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )

    const skills = item.skills.map(skill => {
      return <Chip style={{ backgroundColor: '#03A9F4', color: '#ffffff'}} key={skill}>
        <ChipText> { skill } </ChipText>
      </Chip>
    })

    const xp = (item.level + 1) * 5

    return <Card
      key={item.title}
      style={{
        marginBottom: '10px',
        padding: '10px',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column'
      }}>

      <List.Item>
        <List.Item.Meta
          title={this.renderChallengeTitle(item)}
          description={this.renderChallengeSubtitle(item)} />

        <ChipSet style={{ textAlign: 'center', marginBottom: '20px' }}>
          { skills }
          <Chip style={{
            backgroundColor: '#4CAF50', color: '#ffffff'
          }} key='price'>
            <ChipText>
              { xp } XP
          </ChipText>
          </Chip>
        </ChipSet>

        { this.renderMainAction(item) }

      </List.Item>
    </Card>
  }

  render () {
    return <List
      itemLayout='vertical'
      size='large'
      dataSource={this.props.challenges}
      renderItem={item => this.renderChallenge(item)} />
  }

}
