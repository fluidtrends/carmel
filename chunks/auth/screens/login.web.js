import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { LinearProgress } from 'rmwc/LinearProgress'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Form, Input, Icon } from 'antd'
const FormItem = Form.Item

export default class LoginScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._done = this.done.bind(this)
    this._register = this.register.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this._resetPassword = this.resetPassword.bind(this)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  done () {
    if (!this.state.email) {
      this.setState({ error: errors.email, errorType: 'email', loading: false })
      return
    }

    if (!this.state.password) {
      this.setState({
        error: errors.password,
        errorType: 'password',
        loading: false
      })
      return
    }

    this.setState({ loading: true, loadingMessage: messages.loading })

    setTimeout(() => {
      this.props.login({
        email: this.state.email,
        password: this.state.password
      })
    }, 300)
  }

  loginOk (account) {
    this.setState({ account })
    this.props.getProfile({ userId: account._id })
  }

  profileOk (profile) {
    this.login(Object.assign({}, this.state.account, profile[0]))
  }

  loginError (error) {
    this.setState({ loading: false, password: '', error: error.message })
  }

  register () {
    this.triggerRedirect('/register')
  }

  resetPassword () {
    this.triggerRedirect('/reset')
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

  renderFormContent (width, padding) {
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
          Login To Your Carmel Account
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
            Login Now
          </Button>
        </CardActionButtons>
      </CardActions>
      <CardActions style={{ justifyContent: 'center', margin: '0px' }}>
        <CardActionButtons style={{ marginRight: '10px' }}>
          <Button
            disabled={this.state.loading && !this.error}
            onClick={this._register}>
            Get A Carmel Account
          </Button>
        </CardActionButtons>
        <CardActionButtons style={{ marginLeft: '10px' }}>
          <Button
            disabled={this.state.loading && !this.error}
            onClick={this._resetPassword}>
            Reset Your Password
          </Button>
        </CardActionButtons>
      </CardActions>
    </Card>
  }

  renderFields () {
    return <div style={{
    }}>
      <FormItem style={{
      }}>
        <Input
          style={{ height: '48px' }}
          value={this.state.email}
          disabled={this.state.loading && !this.error}
          onChange={val => this.setState({ email: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholders.email} />
      </FormItem>
      <FormItem>
        <Input style={{ height: '48px' }}
          disabled={this.state.loading && !this.error}
          onChange={val => this.setState({ password: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
          type='password'
          placeholder={placeholders.password} />
      </FormItem>
    </div>
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
        { this.renderFormContent(width, padding)}
      </div>
    )
  }

  components () {
    return [this.renderForm()]
  }
}

const placeholders = {
  email: 'Please enter your email address',
  password: 'Please enter your password'
}

const errors = {
  email: "Don't forget your email address",
  password: 'Please enter your password'
}

const messages = {
  loading: 'Logging you in, just a sec please ...'
}
