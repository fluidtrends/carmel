import React from 'react'
import { Component } from 'react-dom-chunky'

export default class CreateComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  render () {
    return <div />
  }
}
