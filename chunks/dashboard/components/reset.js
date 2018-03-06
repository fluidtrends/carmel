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

    this.setState({ message: succes.email, messageType: 'succes', loading: false })

    this.props.resetPassword({
      email: this.state.email
    })
  }

  login () {
    this.props.onLogin && this.props.onLogin()
  }

  get message () {
    return (this.state.message ? this.state.message : this.props.message)
  }

  get messageType () {
    return (this.state.messageType ? this.state.messageType : this.props.messageType)
  }

  renderMessage () {
    if (!this.message) {
      return
    }

    return (
      <div style={{margin: '20px', color: this.messageType == 'succes'? '#4CAF50':'#ef5350', textAlign: 'center'}}>
        { this.message }
      </div>
    )
  }

  renderLoading () {
    if (!this.state.loading || this.message) {
      return
    }
    return <div>
      <LinearProgress determinate={false} />
    </div>
  }

  render () {
    const width = this.props.isSmallScreen ? '95vw' : '600px'
    const padding = this.props.isSmallScreen ? '2px' : '30px'

    return (<div style={{ display: 'flex', flex: 1, margin: '40px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
      <Card style={{width, margin: '10px', padding}} >
        <div style={{padding: '4px'}}>
          <Typography use='title' tag='h2'> Forgot password? </Typography>
        </div>

        { this.renderMessage() }
        { this.renderLoading() }

        <TextField disabled={this.state.loading && !this.message} outlined withLeadingIcon='email' label={this.state.email ? '' : 'Enter your email address'}
          onChange={(val) => this.setState({ email: val.target.value, message: '' })} />

        <CardActions style={{justifyContent: 'center', margin: '20px'}}>
          <CardActionButtons>
            <Button raised disabled={this.state.loading && !this.message} onClick={this._done} theme='secondary-bg text-primary-on-secondary'> Reset password</Button>
          </CardActionButtons>
        </CardActions>
        <CardActions style={{justifyContent: 'center', margin: '0px'}}>
          <CardActionButtons>
            <Button disabled={this.state.loading && !this.message} onClick={this._login}> Sign back in </Button>
          </CardActionButtons>
        </CardActions>
      </Card>
    </div>)
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
}

const succes = {
  email: "We sent you an email with a password reset link ",
}
