import React from 'react'
import { Component } from 'react-dom-chunky'
import Toolbox from '../../studio/components/toolbox'

export default class ToolboxComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: true }
  }

  render () {
    return <Toolbox {...this.props} />
  }
}
