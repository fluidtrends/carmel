import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class MainIntroScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onCloudPrimary () {
    console.log('on cloud primary action....')
  }

  get features () {
    return ([])
  }

  components () {
    return super.components()
          .concat(this.features)
  }
}
