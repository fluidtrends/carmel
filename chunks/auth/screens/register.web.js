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
import Recaptcha from 'react-recaptcha'
const FormItem = Form.Item

export default class RegisterScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._done = this.done.bind(this)
    this._login = this.login.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  done () {
    if (!this.state.name) {
      this.setState({ error: errors.name, errorType: 'name', loading: false })
      return
    }

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

    if (!this.state.password2) {
      this.setState({
        error: errors.password2,
        errorType: 'password2',
        loading: false
      })
      return
    }

    if (this.state.password !== this.state.password2) {
      this.setState({
        error: errors.passwordMismatch,
        errorType: 'passwordMismatch',
        loading: false
      })
      return
    }

    if (!this.props.desktop && !this.state.verifiedCaptcha) {
      this.setState({
        error: errors.captcha,
        errorType: 'captcha',
        loading: false
      })
      return
    }

    this.setState({ loading: true, loadingMessage: messages.loading })

    setTimeout(() => {
      this.props.register({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    }, 300)
  }

  registerOk (account) {
    console.log(account)
  }

  registerError (error) {
    this.setState({ loading: false, password: '', password2: '', error: error.message })
  }

  login () {
    this.triggerRedirect('/login')
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

  renderCaptcha () {
    if (this.props.desktop) {
      return <div />
    }

    return <div style={{
      display: 'flex',
      flex: 1,
      marginTop: '20px',
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center' }}>
      <Recaptcha
        sitekey={this.props.recaptchaKey}
        verifyCallback={resp => { if (resp) { this.setState({ verifiedCaptcha: true, error: '' }) } }}
        render='explicit'
        onloadCallback={() => this.setState({ verifiedCaptcha: false })}
        />
    </div>
  }

  renderFields () {
    return <div>
      <FormItem>
        <Input
          value={this.state.name}
          style={{ height: '48px' }}
          onChange={val => this.setState({ name: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholders.name} />
      </FormItem>
      <FormItem>
        <Input
          value={this.state.email}
          style={{ height: '48px' }}
          onChange={val => this.setState({ email: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholders.email} />
      </FormItem>
      <FormItem>
        <Input style={{ height: '48px' }}
          onChange={val => this.setState({ password: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
          type='password'
          placeholder={placeholders.password} />
      </FormItem>
      <FormItem>
        <Input style={{ height: '48px' }}
          onChange={val => this.setState({ password2: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
          type='password'
          placeholder={placeholders.password2} />
      </FormItem>
      { this.renderCaptcha() }
    </div>
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
          Create Your Carmel Account
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
            Register Now
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
  name: 'Please enter your full name',
  email: 'Please enter your email address',
  password: 'Please choose a password',
  password2: 'Please confirm your password'
}

const errors = {
  name: "Don't forget your name",
  email: "Don't forget your email address",
  password: 'Please choose a password',
  password2: 'Please confirm your password',
  passwordMismatch: 'Please make sure your passwords match',
  captcha: 'Please fill out the captcha'
}

const messages = {
  loading: 'Creating your Carmel Account, just a second please ...'
}
