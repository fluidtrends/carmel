import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Typography } from 'rmwc/Typography'
import { Card } from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { List, Icon, Input, notification, Steps } from 'antd'

const Step = Steps.Step

export default class ClaimComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: false, step: 1 }
    this._renderItem = this.renderItem.bind(this)
    this._onItemEdit = (item) => this.onItemEdit.bind(this, item)
    this._next = this.next.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onItemEdit (item) {
    if (!this.state[item.id]) {
      notification.error({
        message: 'Missing username',
        description: `${item.placeholder}`
      })
      return
    }

    this.props.onClaimAction && this.props.onClaimAction(item, { [item.id]: this.state[item.id] })
  }

  next () {
    this.props.onContinue && this.props.onContinue()
  }

  renderItemActions (item) {
    return [<Button
      style={{ marginTop: '-12px' }}
      theme='secondary-bg on-secondary'
      raised
      onClick={this._onItemEdit(item)}>
      { item.action }
    </Button>]
  }

  renderItem (item) {
    return <List.Item actions={this.renderItemActions(item)}>
      <div style={{ width: '100%', marginTop: '20px' }}>
        <List.Item.Meta
          title={<Input
            style={{ height: '48px' }}
            value={this.state[item.id] || this.props.account[item.id]}
            onChange={val => this.setState({ [item.id]: val.target.value, error: '' })}
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder={item.placeholder} />} />
        <Typography use='caption' tag='h2' style={{ textAlign: 'left', paddingLeft: '10px', color: '#03A9F4' }}>
          { item.details }
        </Typography>
      </div>
    </List.Item>
  }

  renderItems () {
    return <List
      style={{ marginTop: '20px' }}
      itemLayout='horizontal'
      dataSource={this.itemData}
      renderItem={this._renderItem} />
  }

  renderError () {
    if (!this.state.error) {
      return <div />
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          marginTop: '10px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Typography use='title' style={{ color: '#ef5350', padding: '10px' }} tag='h1'>
          { this.state.error }
        </Typography>
      </div>
    )
  }

  get itemData () {
    return [{
      id: 'telegram',
      title: 'Telegram',
      details: 'Join our Telegram Channel and meet the rest of the community',
      placeholder: 'Enter your Telegram username',
      url: 'https://t.me/carmelplatform',
      action: 'Go'
    }, {
      id: 'twitter',
      title: 'Twitter',
      details: 'Follow us on Twitter to stay up to date with our progress',
      placeholder: 'Enter your Twitter username',
      url: 'https://twitter.com/carmelplatform',
      action: 'Go'
    }, {
      id: 'youtube',
      title: 'YouTube',
      details: 'Subscribe to our YouTube Channel and tune in to our Devlog',
      placeholder: 'Enter your YouTube username',
      url: 'https://www.youtube.com/channel/UCjiQXohOk0pBmJ6PFElQL-g',
      action: 'Go'
    }, {
      id: 'facebook',
      title: 'Facebook',
      details: 'Like our Facebook Page and join the conversation',
      placeholder: 'Enter your Facebook username',
      url: 'https://www.facebook.com/carmelio-347131802460343/',
      action: 'Go'
    }, {
      id: 'medium',
      title: 'Medium',
      details: 'Follow our Medium Publication and get to know our story',
      placeholder: 'Enter your Medium username',
      url: 'http://medium.com/carmelplatform',
      action: 'Go'
    }]
  }

  renderContinue () {
    if (!this.props.isSocialMediaComplete) {
      return <div />
    }

    return <Typography use='title' tag='h2' style={{ marginTop: '5px', marginBottom: '30px' }}>
      <Button onClick={this._next}> Continue </Button>
    </Typography>
  }

  renderComponent () {
    const width = this.props.isSmallScreen ? '95vw' : '600px'
    const padding = this.props.isSmallScreen ? '2px' : '30px'

    if (this.state.loading) {
      return <Components.Loading message={this.state.loadingMessage} />
    }

    return <Card style={{ width, margin: '10px', marginTop: '30px', padding }}>
      <Icon type='gift' style={{
        fontSize: '48px',
        color: '#607D8B',

        padding: '10px'
      }} />

      <Typography use='title' tag='h2'>
          Claim Your FREE CARMEL Tokens
      </Typography>

      <Steps current={this.state.step} style={{ marginTop: '30px', marginBottom: '30px' }}>
        <Step title='Reservation' description='Reserve your tokens' />
        <Step title='Social Media' description='Join our community' />
        <Step title='Activation' description='Final validation' />
      </Steps>

      { this.renderError() }
      { this.renderItems() }
      { this.renderContinue() }

    </Card>
  }
}
