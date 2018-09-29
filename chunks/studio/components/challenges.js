import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions, CardPrimaryAction, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { ListDivider } from 'rmwc/List'
import { Typography } from 'rmwc/Typography'
import { List, Avatar, Rate, Row, Col, Icon } from 'antd'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import Prompt from './prompt'
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
    this.props.onSelectChallenge && this.props.onSelectChallenge(item)
  }

  renderChallenge (item) {
    return <div key={item.title} style={{ marginBottom: '10px' }}>
      <Card outlined>
        <CardPrimaryAction onClick={this._selectChallenge(item)}>
          <ChallengeHeader challenge={item} />
        </CardPrimaryAction>
        <ListDivider />
        <div style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#FAFAFA',
          justifyContent: 'center',
          padding: '10px'
        }}>
          <Button
            onClick={this._selectChallenge(item)}
            style={{
              display: 'flex',
              color: '#ffffff',
              backgroundColor: '#4CAF50'
            }}>
            <strong> Take Challenge </strong>
          </Button>
        </div>
      </Card>
    </div>
  }

  render () {
    return <div style={{
      width: '100%',
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
