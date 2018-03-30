import React from 'react'
import { Screen } from 'react-dom-chunky'

export default class MainScreen extends Screen {

  componentDidMount () {
    super.componentDidMount()
    this.triggerRedirect('/welcome')
  }
}
