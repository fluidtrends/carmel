import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Telegram } from '../components'
import { Tokens } from 'chunks/dashboard/components/index.web'

export default class MainIntroScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get telegram () {
    return (<Telegram onAction={() => { this.triggerRawRedirect('https://t.me/carmelplatform') }} />)
  }

  components () {
    return super.components()
          .concat([this.telegram])
  }
}
