import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import { Icon } from '@rmwc/icon'
import Prompt from './prompt'
import { Modal, Button } from 'antd'

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
      title={this.props.title}
      centered
      closable
      onCancel={this._onClose}
      footer={[<div key='footerMain' style={{textAlign: 'center', margin: '10px'}}><Button type='primary' key='back' onClick={this._onClose}>{this.props.buttonTitle}</Button></div>]}
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
