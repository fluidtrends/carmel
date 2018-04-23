
import React from 'react'
import { Component } from 'react-dom-chunky'
import { Icon } from 'rmwc/Icon'
import { Steps } from 'antd'
const Step = Steps.Step

export default class StatusComponent extends Component {

  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  renderSteps () {
    return <Steps current={1}>
      <Step title='Complete' description='Download the Carmel Studio' />
      <Step title='Almost There' description='Install All Carmel Tools' />
      <Step title='Next' description='Take A Challenge' />
    </Steps>
  }

  render () {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          padding: '10px',
          backgroundColor: '#ffffff',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        { this.renderSteps()}
      </div>
    )
  }
}
