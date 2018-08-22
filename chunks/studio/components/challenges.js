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

  renderChallenge (item, index) {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )

    return <Card
      key={item.title}
      style={{
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#ffffff'
      }}>
      <List.Item>
        <List.Item.Meta
          title={item.title}
          description={item.summary} />
        <Typography use='title' tag='h2' style={{ textAlign: 'center' }}>
          <Button raised theme='secondary-bg on-secondary' onClick={this._selectChallenge(item)}>
            Take Challenge
          </Button>
        </Typography>
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
