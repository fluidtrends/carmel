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

    if (!this.state.username) {
      this.setState({ error: errors.username, errorType: 'username', loading: false })
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

    // if (!this.props.desktop && !this.state.verifiedCaptcha) {
    //   this.setState({
    //     error: errors.captcha,
    //     errorType: 'captcha',
    //     loading: false
    //   })
    //   return
    // }

    this.setState({ loading: true, loadingMessage: messages.loading })

    const bios = ['Amazing human being', 'Awesome Carmel supporter', 'Fast learner', 'Tech savy and future entrepreneur', 'Developer in development', 'The family champion']
    const pics = ['https://github.com/fluidtrends/carmel/blob/master/assets/avatars/avatar1.png?raw=true', 'https://github.com/fluidtrends/carmel/blob/master/assets/avatars/avatar2.png?raw=true', 'https://github.com/fluidtrends/carmel/blob/master/assets/avatars/avatar3.png?raw=true', 'https://github.com/fluidtrends/carmel/blob/master/assets/avatars/avatar4.png?raw=true', 'https://github.com/fluidtrends/carmel/blob/master/assets/avatars/avatar5.png?raw=true', 'https://github.com/fluidtrends/carmel/blob/master/assets/avatars/avatar6.png?raw=true']
    const rand = this.random(1, 6)

    setTimeout(() => {
      this.props.register({
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        pic: pics[rand],
        bio: bios[rand],
        password: this.state.password
      })
    }, 300)
  }

  random(min , max) {
      return Math.floor(Math.random() * (max - min) + min) ;
  }

  registerOk () {
    try {
      window.location.reload(true)
    } catch (error) {
      this.triggerRedirect('/me')
    }
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
      alignItems: 'center'
    }}>
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
          value={this.state.username}
          style={{ height: '48px' }}
          onChange={val => this.setState({ username: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholders.username} />
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
      {this.renderCaptcha()}
    </div>
  }

  renderMainContentFooter () {
    return <div />
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
        <Typography use='headline' tag='h3'>
          Create Your Carmel Account
        </Typography>
      </div>

      {this.renderError()}
      {this.renderFields()}

      <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
        <CardActionButtons>
          <Button
            disabled={this.state.loading && !this.error}
            raised
            onClick={this._done}
            theme='secondary-bg text-primary-on-secondary'>
            <ButtonIcon icon='done' />
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

  get containerStyle () {
    const margin = this.isSmallScreen ? '0' : '40px'
    return {
      display: 'flex',
      flex: 1,
      margin,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  get formWidth () {
    return this.isSmallScreen ? '95vw' : '600px'
  }

  get formPadding () {
    return this.isSmallScreen ? '10px' : '30px'
  }

  renderForm () {
    const width = this.formWidth
    const padding = this.formPadding
    return (
      <div
        style={this.containerStyle}>
        {this.renderFormContent(width, padding)}
        { this.renderMainContentFooter() }
      </div>
    )
  }

  components () {
    return [this.renderForm()]
  }
}

const placeholders = {
  name: 'Please enter your full name',
  username: 'Please enter your username',
  email: 'Please enter your email address',
  password: 'Please choose a password',
  password2: 'Please confirm your password'
}

const errors = {
  name: "Don't forget your name",
  username: "Don't forget your username",
  email: "Don't forget your email address",
  password: 'Please choose a password',
  password2: 'Please confirm your password',
  passwordMismatch: 'Please make sure your passwords match',
  captcha: 'Please fill out the captcha'
}

const messages = {
  loading: 'Creating your Carmel Account, just a second please ...'
}
