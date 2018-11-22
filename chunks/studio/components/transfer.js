import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import { notification } from 'antd'

export default class Transfer extends Component {
  constructor (props) {
    super(props)

    this.state = { }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  transfer (amount, to, challengeId) {
    this.setState({ inProgress: true, progressMessage: 'Transferring tokens ...'})
    this.props.sendTokens({
      amount,
      to,
      type: 'challengePurchase',
      data: {
        challengeId
      }
    })
  }

  tokensSent (response) {
    if (response && response.data && response.data.error) {
      notification.error({ message: response.data.error })
      this.setState({ inProgress: false })
      return
    }

    // this.triggerRedirect('/workspace', { challenge: Object.assign({}, this.challenge, { purchased: true, started: true }) })
  }

  failedToSendTokens (error) {
    notification.error({ message: error.message })
    this.setState({ inProgress: false })
  }

  calculatePrice (level) {
    const rate = 1
    const factor = 5
    const precision = 2
    const p = (level + 1) * factor * rate
    return p.toFixed(precision)
  }

  render () {
    if (this.state.inProgress) {
      return   <div style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          display: 'flex',
          flex: 1
        }}>
          <img src={'../../../../assets/chunky-logo.gif'} style={{
            display: 'block',
            alignSelf: 'center',
            width: '200px',
            height: '200px'
          }} />
          <Typography use='headline5' tag='h2' style={{ color: '#00bcd4', textAlign: 'center' }}>
            <Icon type='hourglass' spin style={{ marginRight: '10px'}} />
            Transferring tokens ...
          </Typography>
        </div>
    }
    const { title, level, author, id } = this.props.challenge
    const price = this.calculatePrice(level)

    return <div style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      display: 'flex',
      flex: 1
    }}>
      <img src={'../../../../assets/chunky-logo.gif'} style={{
        display: 'block',
        alignSelf: 'center',
        width: '200px',
        height: '200px'
      }} />

      <Typography use='headline5' tag='h2' style={{ color: '#00bcd4', textAlign: 'center' }}>
        <Icon type='hourglass' spin style={{ marginRight: '10px'}} />
        To start the <strong> { title } </strong> Challenge
      </Typography>

      <Button onClick={() => this.transfer(price, author.id, id)}
        style={{
          color: '#ffffff',
          fontSize: '12px',
          backgroundColor: '#00bcd4'
        }}>
        <Icon
          icon={'verified_user'}
          style={{ marginRight: '5px' }} />
        <Typography use='overline' key='active-prompt' style={{
          textAlign: 'center'
        }}>
            Send <strong> { price.toLocaleString('en') } </strong> CARMEL
          </Typography>
      </Button>

      <Typography use='overline' key='active-footer' style={{
        textAlign: 'center'
      }}>
        to <strong> { author.name } </strong>
      </Typography>
    </div>
  }
}
