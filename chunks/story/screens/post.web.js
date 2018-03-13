import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class PostScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  components () {
    return [
      <Components.Article {...this.variant.content} />
    ]
  }
}
