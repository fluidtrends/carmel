import React from 'react'
import { Component } from 'react-dom-chunky'
import moment from 'moment'
import validator from 'validator'
import { LinearProgress } from 'rmwc/LinearProgress'
import Recaptcha from 'react-recaptcha'

import { Icon } from 'rmwc/Icon'
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField'
import {
  Card,
  CardMedia,
  CardMediaItem,
  CardPrimary,
  CardTitle,
  CardActions,
  CardActionButtons,
  CardAction,
  CardActionIcons,
  CardSubtitle,
  CardSupportingText,
  CardHorizontalBlock
} from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { FormField } from 'rmwc/FormField'

export default class RegisterComponent extends Component {
  constructor (props) {
    super(props)
    this._done = this.done.bind(this)
    this._login = this.login.bind(this)
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

    if (this.state.password !== this.state.password2) {
      this.setState({
        error: errors.password2,
        errorType: 'password2',
        loading: false
      })
      return
    }

    if (!this.state.verifiedCaptcha) {
      this.setState({
        error: errors.captcha,
        errorType: 'captcha',
        loading: false
      })
      return
    }

    this.setState({ loading: true })

    this.props.signUp({
      email: this.state.email,
      name: this.state.name,
      password: this.state.password
    })
  }

  login () {
    this.props.onLogin && this.props.onLogin()
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

  renderLoading () {
    if (!this.state.loading || this.error) {
      return
    }
    return (
      <div>
        <LinearProgress determinate={false} />
      </div>
    )
  }

  renderCaptcha () {
    if (this.props.desktop) {
      return <div />
    }

    return <div style={{alignSelf: 'center', marginTop: '20px'}}>
      <Recaptcha
        sitekey='6Lex_1AUAAAAALdQO95hdq9WeiG_tbKbhF2WDB3s'
        verifyCallback={resp => { if (resp) { this.setState({ verifiedCaptcha: true, error: '' }) } }}
        render='explicit'
        onloadCallback={() => this.setState({ verifiedCaptcha: false })}
      />
    </div>
  }

  render () {
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
        }}
      >
        <Card style={{ width, margin: '10px', padding }}>
          <div style={{ padding: '4px' }}>
            <Typography use='title' tag='h2'>
              {' '}
              Create Your Carmel Account
            </Typography>
          </div>

          {this.renderError()}
          {this.renderLoading()}

          <TextField
            disabled={this.state.loading && !this.error}
            outlined
            withLeadingIcon='perm_identity'
            label={this.state.name ? '' : 'Enter your name'}
            onChange={val =>
              this.setState({ name: val.target.value, error: '' })
            }
          />

          <TextField
            disabled={this.state.loading && !this.error}
            outlined
            withLeadingIcon='email'
            label={this.state.email ? '' : 'Enter your email address'}
            onChange={val =>
              this.setState({ email: val.target.value, error: '' })
            }
          />

          <TextField
            type='password'
            disabled={this.state.loading && !this.error}
            outlined
            withLeadingIcon='lock_outline'
            label={this.state.password ? '' : 'Choose a password'}
            onChange={val =>
              this.setState({ password: val.target.value, error: '' })
            }
          />

          <TextField
            type='password'
            disabled={this.state.loading && !this.error}
            outlined
            withLeadingIcon='lock'
            label={this.state.password ? '' : 'Confirm your password'}
            onChange={val =>
              this.setState({ password2: val.target.value, error: '' })
            }
          />
          { this.renderCaptcha() }

          <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
            <CardActionButtons>
              <Button
                raised
                disabled={this.state.loading && !this.error && !this.state.verifiedCaptcha}
                onClick={this._done}
                theme='secondary-bg text-primary-on-secondary'
              >
                {' '}
                Create Account
              </Button>
            </CardActionButtons>
          </CardActions>
          {this.props.onLogin ? (
            <CardActions style={{ justifyContent: 'center', margin: '0px' }}>
              <CardActionButtons>
                <Button
                  disabled={this.state.loading && !this.error}
                  onClick={this._login}
                >
                  {' '}
                  Already have an account?{' '}
                </Button>
              </CardActionButtons>
            </CardActions>
          ) : null}
        </Card>
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '20px'
  },
  toolbar: {
    paddingTop: '15px',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '18px',
    margin: '5px'
  },
  day: {
    color: '#FFFFFF',
    height: '60px',
    backgroundColor: '#6BBCF4',
    alignItems: 'flex-start'
  }
}

const errors = {
  name: "Don't forget your name",
  email: "Don't forget your email address",
  ethereum: "Don't forget your Ethereum address",
  password: 'Please choose a password',
  password2: 'Please make sure your passwords match',
  captcha: 'Please fill out the captcha'
}
