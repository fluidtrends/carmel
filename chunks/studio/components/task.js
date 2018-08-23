import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { List, Avatar, IconText, Popover, Progress, Tag, Rate, Spin, Icon, notification, Badge } from 'antd'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Elevation } from 'rmwc/Elevation'
import Shell from './shell'
import Prompt from './prompt'
const { Button: AntdButton } = require('antd')

const successMessagesJson = require('../../../assets/successMessages.json')
const errorMessagesJson = require('../../../assets/errorMessages.json')
const { successMessages } = successMessagesJson
const { errorMessages } = errorMessagesJson

export default class Task extends Component {
  constructor (props) {
    super(props)

    this.state = { ...this.state, taskIndex: 1, loading: true, started: false, verifyInProgress: false, showTaskDetails: false }
    this._shell = new Shell()
    this._onShowChallenge = this.onShowChallenge.bind(this)
    this._onOpenFile = this.onOpenFile.bind(this)
    this._verifyTask = this.verifyTask.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onShowChallenge () {
    this.props.onShowChallenge && this.props.onShowChallenge()
  }

  onOpenFile () {
    this.props.onOpenFile && this.props.onOpenFile()
  }

  get shell () {
    return this._shell
  }

  showTaskError (tip) {
    notification.open({
      icon: <Icon type='frown' style={{ color: '#f44336' }} />,
      message: this.errorMessage,
      description: tip
    })

    this.setState({ tip, failed: true })
  }

  showTaskSuccess (tip) {
    notification.open({
      icon: <Icon type='smile' style={{ color: '#4CAF50' }} />,
      message: this.successMessage
    })

    this.props.onSuccess && this.props.onSuccess()
  }

  get successMessage () {
    return successMessages[Math.floor(Math.random() * successMessages.length)]
  }

  get errorMessage () {
    return errorMessages[Math.floor(Math.random() * errorMessages.length)]
  }

  verifyTask () {
    this.setState({ verifyInProgress: true, failed: false, tip: '' })

    this.shell.exec('verifyTask', { task: this.props.task, product: this.props.product, challenge: this.props.challenge })
              .then((result) => {
                if (!result.success) {
                  this.setState({ verifyInProgress: false, tip: result.tip })
                  this.showTaskError(result.tip)
                  return
                }
                this.setState({ verifyInProgress: false })
                this.showTaskSuccess()
              })
              .catch((error) => {
                this.setState({ verifyInProgress: false })
                this.showTaskError(error.message)
              })
  }

  renderVerifyAction () {
    if (this.state.verifyInProgress) {
      return <Typography use='body1' style={{
        textAlign: 'center',
        color: '#78909C',
        padding: '20px'
      }}>
        <Icon type='loading' style={{
          color: '#78909C',
          padding: '10px'
        }} />
        Hold on while I check your work ...
      </Typography>
    }
    return <Button
      onClick={this._verifyTask}
      style={{
        margin: '10px',
        color: '#ffffff',
        marginBottom: '20px',
        backgroundColor: `#4CAF50`
      }}>
      <ButtonIcon use={'check'} /> Mark Task As Complete
    </Button>
  }

  renderTip () {
    if (!this.state.tip) {
      return <div />
    }

    const tip = <Typography use='body1' style={{
      textAlign: 'left',
      color: '#78909C',
      padding: '20px'
    }}>
      <Icon type='warning' style={{
        color: '#78909C',
        padding: '10px'
      }} />
      { this.state.tip}
    </Typography>

    return <Popover placement='bottomRight' content={tip}>
      <Icon type='warning' style={{
        color: '#f44336',
        padding: '10px'
      }} />
    </Popover>
  }

  renderContent () {
    const popup = <Typography use='body1' style={{
      textAlign: 'left',
      color: '#78909C',
      padding: '20px'
    }}>
      <Icon type='question-circle' style={{
        color: '#78909C',
        padding: '10px'
      }} />
      { this.props.task.help}
    </Typography>

    return <Prompt>
      <Typography use='title' style={{
        textAlign: 'left',
        color: '#00bcd4'
      }}>
        <Avatar size='small' style={{
          backgroundColor: '#00bcd4',
          color: '#ffffff',
          marginTop: '-5px',
          marginRight: '10px'
        }}>
          { this.props.task.index}
        </Avatar>
        { this.props.task.title }
      </Typography>

      <Typography use='body1' style={{
        textAlign: 'left',
        color: '#78909C',
        margin: '10px'
      }}>
        { this.props.task.instructions}
        <Popover placement='bottomRight' content={popup}>
          <Icon type='question-circle' style={{
            color: '#78909C',
            padding: '10px'
          }} />
        </Popover>
        { this.renderTip() }
      </Typography>

      { this.renderVerifyAction() }
    </Prompt>
  }

  renderFooter () {
    if (this.state.verifyInProgress) {
      return <div />
    }

    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }}>
      <Typography use='title' tag='h2' style={{
        marginTop: '20px',
        flex: 1,
        textAlign: 'left'
      }}>
        <Button onClick={this._onShowChallenge}>
          <ButtonIcon use='arrow_back' />
          Back to challenge
        </Button>
      </Typography>
      <Typography use='title' tag='h2' style={{
        marginTop: '20px',
        flex: 1,
        textAlign: 'right'
      }}>
        <Button onClick={this._onOpenFile}>
          <ButtonIcon use='file_copy' />
          Open Source Code
        </Button>
      </Typography>
    </div>
  }

  render () {
    return <div>
      { this.renderContent() }
      { this.renderFooter() }
    </div>
  }

}
