import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Telegram } from '../components'

export default class MainIntroScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get telegram() {
    return (<Telegram onAction={() => { this.triggerRawRedirect('https://t.me/carmelplatform') }} />)
  }

  components() {
    return super.components()
      .concat([this.telegram])
  }
}
