import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import { Card, CardActionButtons, CardActions } from '@rmwc/card'
import { Button, ButtonIcon } from '@rmwc/button'
import { List, Icon, Form, Input, notification, Steps } from 'antd'
import { Ethereum } from 'react-blockchain-chunky/lib'

const Step = Steps.Step
const FormItem = Form.Item

export default class ClaimComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: false, step: 0 }
    this._reserve = this.reserve.bind(this)
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

  claim (eosBalance) {
    if (parseInt(eosBalance) === 0) {
      this.setState({ loading: false, error: 'You need to have an EOS stake' })
      return
    }

    this.props.newClaim({ eosBalance, ethAddress: this.state.ethereumAddress })
  }

  reserve () {
    if (!this.state.ethereumAddress) {
      this.setState({ error: 'Please enter your Ethereum Address first' })
      return
    }

    this.setState({ loading: true, loadingMessage: 'Reserving your tokens ...' })

    try {
      this._eth = new Ethereum(Object.assign({}, this.props.ethereum, { account: this.state.ethereumAddress }))
      this._eth.eos.getBalance()
        .then((balance) => this.claim(balance))
        .catch((e) => {
          this.setState({ loading: false, error: 'Invalid Ethereum Address' })
        })
    } catch (e) {
      this.setState({ loading: false, error: 'Invalid Ethereum Address' })
    }
  }

  renderReservation () {
    const title = (this.props.period ? `Day ${this.props.period.data.day + 1}: ${this.props.period.data.tokens} CARMEL` : '')

    return <div>
      <Typography
        use='headline'
        tag='div'
        style={{
          textAlign: 'center'
        }}>
        {title}
      </Typography>
      <CardActions style={{
        marginTop: '20px',
        justifyContent: 'center'
      }}>
        <CardActionButtons style={{
          width: '100%'
        }}>
          <FormItem style={{
            width: '100%',
            marginLeft: '30px',
            marginRight: '30px'
          }}>
            <Input
              style={{
                height: '52px'
              }}
              value={this.state.ethereumAddress}
              onChange={val => this.setState({ ethereumAddress: val.target.value, error: '' })}
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder={'Enter your Ethereum Address'} />
            <Typography use='subheading1' style={{ color: '#90A4AE', marginTop: '5px' }} tag='h1'>
              We need this so we can check your EOS balance
                </Typography>
          </FormItem>
        </CardActionButtons>
      </CardActions>
      <CardActions
        style={{
          justifyContent: 'center',
          marginTop: '0px'
        }}>
        <CardActionButtons>
          <Button
            onClick={this._reserve}
            raised
            style={{ marginTop: '0px', marginBottom: '20px' }}>
            <ButtonIcon icon='done' />
            Reserve Your Tokens Now
              </Button>
        </CardActionButtons>
      </CardActions>
    </div>
  }

  renderError () {
    if (!this.state.error && !this.props.error) {
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
          {this.state.error || this.props.error}
        </Typography>
      </div>
    )
  }

  renderComponent () {
    const width = this.props.isSmallScreen ? '95vw' : '600px'
    const padding = this.props.isSmallScreen ? '2px' : '30px'

    if (this.state.loading && !this.state.error && !this.props.error) {
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

      {this.renderError()}
      {this.renderReservation()}

    </Card>
  }
}
