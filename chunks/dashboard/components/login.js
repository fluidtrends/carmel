import React from 'react'
import { Component } from 'react-dom-chunky'
import moment from 'moment'
import validator from 'validator'
import { LinearProgress } from 'rmwc/LinearProgress'

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

export default class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this._done = this.done.bind(this)
    this._register = this.register.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this._resetPassword = this.resetPassword.bind(this)
    this.state = { ...super.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  done() {
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

    this.setState({ loading: true })
    this.props.signIn({
      email: this.state.email,
      password: this.state.password
    })
  }

  register() {
    this.props.onRegister && this.props.onRegister()
  }

  resetPassword() {
    this.props.onResetPassword && this.props.onResetPassword()
  }

  get error() {
    return this.state.error ? this.state.error : this.props.error
  }

  renderError() {
    if (!this.error) {
      return
    }

    return (
      <div style={{ margin: '20px', color: '#ef5350', textAlign: 'center' }}>
        {this.error}
      </div>
    )
  }

  renderLoading() {
    if (!this.state.loading || this.error) {
      return
    }
    return (
      <div>
        <LinearProgress determinate={false} />
      </div>
    )
  }

  onKeyPress(event) {
    if (event.key == 'Enter') {
      this._done()
    }
  }

  render() {
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
            <Typography use="title" tag="h2">
              {' '}
              Welcome back{' '}
            </Typography>
          </div>

          {this.renderError()}
          {this.renderLoading()}
          <TextField
            disabled={this.state.loading && !this.error}
            outlined
            withLeadingIcon="email"
            label={this.state.email ? '' : 'Enter your email address'}
            onChange={val =>
              this.setState({ email: val.target.value, error: '' })
            }
            onKeyPress={this.onKeyPress}
          />

          <TextField
            type="password"
            disabled={this.state.loading && !this.error}
            outlined
            withLeadingIcon="lock"
            label={this.state.password ? '' : 'Enter your password'}
            onChange={val =>
              this.setState({ password: val.target.value, error: '' })
            }
            onKeyPress={this.onKeyPress}
          />

          <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
            <CardActionButtons>
              <Button
                disabled={this.state.loading && !this.error}
                raised
                onClick={this._done}
                theme="secondary-bg text-primary-on-secondary"
              >
                {' '}
                Sign In
              </Button>
            </CardActionButtons>
          </CardActions>
          <CardActions style={{ justifyContent: 'center', margin: '0px' }}>
            <CardActionButtons>
              <Button
                disabled={this.state.loading && !this.error}
                onClick={this._register}
              >
                {' '}
                Need an account?{' '}
              </Button>
            </CardActionButtons>
          </CardActions>
          <CardActions style={{ justifyContent: 'center', margin: '0px' }}>
            <CardActionButtons>
              <Button
                disabled={this.state.loading && !this.error}
                onClick={this._resetPassword}
              >
                {' '}
                Forgot your password?{' '}
              </Button>
            </CardActionButtons>
          </CardActions>
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
  email: "Don't forget your email address",
  password: 'Please enter your password'
}
