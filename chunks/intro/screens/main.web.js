import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Newsletter } from '../components'

export default class MainIntroScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get features () {
    return ([])
  }

  components () {
    return super.components()
          .concat(this.features)
  }
}
