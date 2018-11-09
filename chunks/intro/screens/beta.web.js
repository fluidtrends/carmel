import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class MainPersonScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderScreenshots () {
  }

  get features () {
    return []
  }

  components () {
    return super.components().concat(this.features)
  }
}
