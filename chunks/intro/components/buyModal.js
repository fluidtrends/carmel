import React from 'react'
import { Component } from 'react-dom-chunky'
import { Card, Modal } from 'antd';
import { Checkout } from '../../tokens/components'

import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Fab } from 'rmwc/Fab'
import { Slider } from 'rmwc/Slider'
import { Footer } from '.'
import { Radio } from 'rmwc/Radio'
import { Ethereum } from 'react-blockchain-chunky/lib'
import { Form, Input, Icon } from 'antd'


export default class BuyModal extends Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    super.componentDidMount()
  }

  render() {
    const width = this.props.isSmallScreen ? '90vh' : 750
    return <Modal width={width} style={{ maxWidth: 700 }} footer={null} visible={this.props.visible} onCancel={this.props.onCancel} >
      <h1 >Participate in the private token sale</h1>
      <Checkout newTransaction={this.props.newTransaction} triggerRawRedirect={this.props.triggerRawRedirect} transaction={this.props.transaction} />
    </Modal>
  }
}

const styles = {
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20
  },
  icon: {
    cursor: 'pointer',
    width: 60,
    height: 60
  }
}



