import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Modal, Button } from 'antd'
import { Typography } from 'rmwc/Typography'
import { Icon } from 'rmwc/Icon'
import Prompt from './prompt'

export default class Popup extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._onClose = this.onClose.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onClose () {
    this.props.onClose && this.props.onClose()
  }

  render () {
    return <Modal
      key='popup'
      title={this.props.title}
      centered
      closable
      onCancel={this._onClose}
      footer={[<div style={{textAlign: 'center', margin: '10px'}}><Button type='primary' key='back' onClick={this._onClose}>{this.props.buttonTitle}</Button></div>]}
      visible>
      <Typography use='title' key='icon' tag='h2' style={{ textAlign: 'center', color: '#00bcd4' }}>
        <img src={`../../../../assets/${this.props.icon}.png`} style={{
          marginTop: '0px', width: '140px', height: '140px'
        }} />
      </Typography>
      <Typography key='message' use='title' tag='h2' style={{ textAlign: 'center', color: '#00bcd4' }}>
        { this.props.message }
      </Typography>
    </Modal>
  }
}
