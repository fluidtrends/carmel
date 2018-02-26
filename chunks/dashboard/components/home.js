import React from 'react'
import { Component, Components } from 'react-dom-chunky'
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

export default class HomeComponent extends Component {

  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
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
    const width = this.props.compact ? '95vw' : '600px'
    return (<div style={{ display: 'flex', flex: 1, margin: '40px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
      <Card style={{width, margin: '10px', padding: '30px'}} >
        <div style={{padding: '4px'}}>
          <Typography use='headline' tag='h1'>
            Welcome back, { this.props.account.name }
          </Typography>
        </div>

        { this.renderLoading() }
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
}
