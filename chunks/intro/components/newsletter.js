import React from 'react'
import { Component } from 'react-dom-chunky'
import moment from 'moment'
import validator from 'validator'
import { LinearProgress } from '@rmwc/linear-progress'
import base64 from 'base-64'
import { TextField, TextFieldIcon, TextFieldHelperText } from '@rmwc/textfield'
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
} from '@rmwc/card'
import { Button, ButtonIcon } from '@rmwc/button'
import { Typography } from '@rmwc/typography'
import { FormField } from '@rmwc/formfield'
import mailchimp from 'mailchimp-v3'

export default class NewsletterComponent extends Component {

  constructor (props) {
    super(props)
    this._done = this.done.bind(this)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  done () {
  }

  get error () {
    return (this.state.error ? this.state.error : this.props.error)
  }

  renderError () {
    if (!this.error) {
      return
    }

    return (
      <div style={{margin: '20px', color: '#ef5350', textAlign: 'center'}}>
        { this.error }
      </div>
    )
  }

  renderLoading () {
    if (!this.state.loading || this.error) {
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
      <Card style={{ width, margin: '10px', padding }} >
        <div style={{padding: '4px'}}>
          <Typography use='headline' tag='h2'> Get #CarmelWeekly in Your Inbox </Typography>
          <Typography use='title' tag='h2'> The Inside Story Of Teaching 1B People To Code </Typography>
          <Typography use='subheading2' tag='h2'> A weekly publication of awesomeness that documents the #CarmelStory and our journey of #HelpingChrisSleepAtNight by equipping him and 999,999,999 others with future-proof tech skills</Typography>
        </div>

        { this.renderError() }
        { this.renderLoading() }

        <TextField disabled={this.state.loading && !this.error} outlined withLeadingIcon='email' label={this.state.email ? '' : 'Enter your email address'}
          onChange={(val) => this.setState({ email: val.target.value, error: '' })} />

        <CardActions style={{justifyContent: 'center', margin: '20px'}}>
          <CardActionButtons>
            <Button disabled={this.state.loading && !this.error} raised onClick={this._done} theme='secondary-bg text-primary-on-secondary'> Subscribe </Button>
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
  password: 'Please enter your password'
}
