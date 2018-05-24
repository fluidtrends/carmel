import React from 'react'
import { Screen } from 'react-dom-chunky'
export default class MainRoadmapScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get features () {
    return []
  }

  components () {
    return super.components().concat(this.features)
  }
}
