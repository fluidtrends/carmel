import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Picker } from '../components'

export default class MainTokensScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()

    if (this.isLoggedIn) {
      this.triggerRedirect(`/me/tokens`)
    }
  }

  // components () {
  //   return [<Picker />]
  // }
}
