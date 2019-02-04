import React from 'react'
import Screen from './base.web'

export default class MainScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }
}
