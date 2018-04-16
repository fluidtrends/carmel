import React from 'react'
import { Component, Components, Utils } from 'react-dom-chunky'
import moment from 'moment'
import validator from 'validator'
import { LinearProgress } from 'rmwc/LinearProgress'
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
  CardPrimaryAction,
  CardActionIcons,
  CardSubtitle,
  CardSupportingText,
  CardHorizontalBlock
} from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { FormField } from 'rmwc/FormField'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { ListDivider } from 'rmwc/List'
import { Fab } from 'rmwc/Fab'
import { Icon } from 'rmwc/Icon'

const ToolboxIndex = `https://raw.githubusercontent.com/fluidtrends/carmel/content/studio/toolbox/index.json`

export default class ToolboxComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: true }
  }

  componentDidMount () {
    super.componentDidMount()
    this.loadTools()
  }

  componentWillUnmount () {
  }

  loadTools () {
    const level = this.user.level || 0
    const tokens = this.user.tokens || 0
    const loading = false

    this.props.importRemoteData(ToolboxIndex).then(tools => {
      this.setState({
        tokens,
        loading,
        level,
        tools
      })
    })
  }

  get user () {
    return this.props.account || {}
  }

  renderContentHeader () {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            padding: '10px',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Typography
            use='headline'
            tag='h1'
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'flex-start'
            }}
          >
            <Icon style={{ fontSize: '50px' }} strategy='ligature'>
              account_circle
            </Icon>
          </Typography>
          <Typography
            use='title'
            tag='h1'
            style={{
              display: 'flex',
              flex: 6,
              justifyContent: 'flex-start'
            }}
          >
            {this.user.name}
          </Typography>
          <Typography use='subheading1' tag='h1'>
            <ChipSet>
              <Chip style={{ backgroundColor: '#F5F5F5' }}>
                <ChipIcon style={{ color: '#66BB6A' }} leading use={`stars`} />
                <ChipText>
                  {' '}
                  {this.state.tokens.toLocaleString('en')} CARMEL{' '}
                </ChipText>
              </Chip>
            </ChipSet>
            Level {this.state.level.toLocaleString('en')}
          </Typography>
        </div>
      </div>
    )
  }

  renderMainContent () {
    return (<div>
      <Components.Collection id='tools' categories={this.state.tools} />
    </div>)
  }

  renderError () {
    if (!this.state.error) {
      return <div />
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          margin: '10px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography use='title' style={{ color: '#ef5350' }} tag='h1'>
          {this.state.error}
        </Typography>
      </div>
    )
  }

  render () {
    const width = '100%'
    if (this.state.loading) {
      return (
        <div
          style={{
            display: 'flex',
            flex: 1,
            margin: '10px',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Card style={{ width, margin: '20px', padding: '0px' }}>
            <Typography use='title' tag='h1'>
                Loading your tools ... Just a sec.
            </Typography>
            <ListDivider />
            <LinearProgress determinate={false} />
          </Card>
        </div>
      )
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          margin: '10px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Card style={{ width, margin: '10px', padding: '0px' }}>
          {this.renderContentHeader()}
        </Card>
        {this.renderError()}
        <Card style={{ width, margin: '0px', padding: '0px' }}>
          {this.renderMainContent()}
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

const errors = {}
