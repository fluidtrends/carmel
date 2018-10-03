import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions, CardPrimaryAction, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { ListDivider } from 'rmwc/List'
import { Typography } from 'rmwc/Typography'
import { List, Avatar, Rate, Row, Col, Icon } from 'antd'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Data } from 'react-chunky'
import Prompt from './prompt'
import moment from 'moment'
import ChallengeHeader from './challengeHeader'

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
    this.props.onSelectChallenge && this.props.onSelectChallenge({ challengeId: item.id })
  }

  renderChallengeHeader (item) {
    if (!item.history) {
      return <div />
    }

    var since = moment(parseFloat(item.history.purchaseTimestamp)).fromNow()
    var header = `You got this challenge ${since}`

    if (item.history.status === 'completed' && item.history.completedTimestamp) {
      since = moment(parseFloat(item.history.completedTimestamp)).fromNow()
      header = `You completed this challenge ${since}`
    }

    return <Typography use='body1' style={{
      textAlign: 'center',
      color: '#81C784',
      padding: '5px',
      backgroundColor: '#eeee99'
    }}>
      { header }
    </Typography>
  }

  renderChallenge (item) {
    var prompt = (item.history ? 'Take Challenge' : 'Get Challenge')

    if (item.history && item.history.status === 'completed') {
      prompt = `Rate Challenge`
    }

    return <div key={item.title} style={{ marginBottom: '10px' }}>
      <Card outlined>
        <CardPrimaryAction onClick={this._selectChallenge(item)}>
          <ChallengeHeader challenge={item} />
        </CardPrimaryAction>
        { this.renderChallengeHeader(item)}
        <ListDivider />
        <div style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#FAFAFA',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <Button
            onClick={this._selectChallenge(item)}
            style={{
              display: 'flex',
              color: '#ffffff',
              backgroundColor: (item.history ? '#03A9F4' : '#4CAF50')
            }}>
            { prompt }
          </Button>
        </div>
      </Card>
    </div>
  }

  render () {
    return <div style={{
      width: '380px',
      alignSelf: 'center',
      marginBottom: '10px'
    }}>
      <List
        itemLayout='vertical'
        size='large'
        dataSource={this.props.challenges}
        renderItem={item => this.renderChallenge(item)} />
    </div>
  }

}
