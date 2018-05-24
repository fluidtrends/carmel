import React from 'react'
import { Screen } from 'react-dom-chunky'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Form, Input, Icon } from 'antd'
const FormItem = Form.Item

export default class ResetScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, loading: false, loadingMessage: '' }
    this._done = this.done.bind(this)
    this._login = this.login.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()

    if (this.isLoggedIn) {
      this.triggerRedirect('/me')
    }
  }

  done () {
    if (!this.state.email) {
      this.setState({ error: errors.email, errorType: 'email', loading: false })
      return
    }

    this.setState({ loading: true, loadingMessage: messages.loading })

    setTimeout(() => {
      this.props.reset({
        email: this.state.email
      })
    }, 300)
  }

  login () {
    this.triggerRedirect('/login')
  }

  resetOk (result) {
    this.triggerRedirect('/login')
  }

  resetError (error) {
    this.setState({ loading: false, error: error.message })
  }

  get error () {
    return this.state.error ? this.state.error : this.props.error
  }

  renderError () {
    if (!this.error) {
      return
    }

    return (
      <div style={{ margin: '20px', color: '#ef5350', textAlign: 'center' }}>
        {this.error}
      </div>
    )
  }

  onKeyPress (event) {
    if (event.key === 'Enter') {
      this._done()
    }
  }

  renderFields () {
    return <div>
      <FormItem>
        <Input
          style={{ height: '48px' }}
          value={this.state.email}
          onChange={val => this.setState({ email: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholders.email} />
      </FormItem>
    </div>
  }

  renderFormContent (width, padding) {
    if (this.state.sent) {
      return <Card style={{ width, margin: '10px', padding }}>
        <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
          <Icon type='user' style={{
            fontSize: '64px',
            padding: '10px'
          }} />
          <Typography use='title' tag='h2'>
            { messages.sent }
          </Typography>
        </div>
      </Card>
    }

    if (this.state.loading) {
      return this.renderLoading()
    }

    return <Card style={{ width, margin: '10px', padding }}>
      <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
        <Icon type='user' style={{
          fontSize: '64px',
          padding: '10px'
        }} />
        <Typography use='title' tag='h2'>
          Reset Your Carmel Password
        </Typography>
      </div>

      { this.renderError() }
      { this.renderFields() }

      <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
        <CardActionButtons>
          <Button
            disabled={this.state.loading && !this.error}
            raised
            onClick={this._done}
            theme='secondary-bg text-primary-on-secondary'>
            <ButtonIcon use='done' />
            Reset Now
          </Button>
        </CardActionButtons>
      </CardActions>
      <CardActions style={{ justifyContent: 'center', margin: '0px' }}>
        <CardActionButtons>
          <Button
            disabled={this.state.loading && !this.error}
            onClick={this._login}>
            Login To Your Existing Account
          </Button>
        </CardActionButtons>
      </CardActions>
    </Card>
  }

  renderForm () {
    const width = this.props.isSmallScreen ? '95vw' : '600px'
    const padding = this.props.isSmallScreen ? '2px' : '30px'

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          margin: '40px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

        { this.renderFormContent(width, padding) }
      </div>
    )
  }

  components () {
    return [this.renderForm()]
  }
}

const placeholders = {
  email: 'Please enter your email address'
}

const errors = {
  email: "Don't forget your email address"
}

const messages = {
  loading: 'Sending you a confirmation email, just a second please ...',
  sent: 'Almost there, please check your inbox.'
}
