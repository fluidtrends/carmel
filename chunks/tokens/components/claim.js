import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Ethereum } from 'react-blockchain-chunky/lib'
import { Form, Input, Icon } from 'antd'
const FormItem = Form.Item

export default class ClaimComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: false }
    this._send = this.send.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
  }

  claim (eosBalance) {
    if (parseInt(eosBalance) === 0) {
      this.setState({ loading: false, error: 'You need to have an EOS stake' })
      return
    }

    this.props.newClaim({ eosBalance, ethAddress: this.state.ethereumAddress })
  }

  send () {
    if (!this.state.ethereumAddress) {
      this.setState({ error: 'Please enter your Ethereum Address first' })
      return
    }

    this.setState({ loading: true, error: '', sentAt: Date.now(), loadingMessage: 'Processing your claim, just a sec please ...' })

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

  get alreadyClaimed () {
    if (!this.props.claims) {
      return false
    }

    var claimed = false
    this.props.claims.forEach(claim => {
      claimed = true
    })

    return claimed
  }

  renderMainContent () {
    if (this.alreadyClaimed) {
      return <div />
    }

    console.log(this.props.period)

    const title = 'Claim Your Free CARMEL Tokens'
    return (
      <div>
        <Typography
          use='headline'
          tag='div'
          style={{
            textAlign: 'center',
            paddingTop: '30px',
            paddingBottom: '30px',
            marginBottom: '40px',
            borderBottom: '1px #E0E0E0 solid'
          }}
          theme='text-secondary-on-background'>
          { title }
        </Typography>

        { this.renderError() }
        { this.renderAction() }
      </div>
    )
  }

  renderAction () {
    const title = (this.props.period ? `Day ${this.props.period.data.day + 1}: ${this.props.period.data.tokens} CARMEL` : '')

    return <div>
      <Typography
        use='headline'
        tag='div'
        style={{
          textAlign: 'center'
        }}>
        { title }
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
            onClick={this._send}
            raised
            style={{ marginTop: '0px', marginBottom: '20px' }}>
            <ButtonIcon use='done' />
            Claim Now
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
          { this.state.error || this.props.error}
        </Typography>
      </div>
    )
  }

  render () {
    const width = this.props.compact ? '95vw' : '600px'

    if (this.props.loading) {
      return <Components.Loading message={this.state.loadingMessage} />
    }

    return (<div
      style={{
        display: 'flex',
        flex: 1,
        margin: '10px',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Card style={{ width, margin: '10px', marginBottom: '20px', padding: '0px' }}>
        {this.renderMainContent()}
      </Card>
    </div>)
  }
}
