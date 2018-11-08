import React from 'react'
import { Typography } from '@rmwc/typography'
import Screen from './base.desktop'
import { Button, ButtonIcon } from '@rmwc/button'

export default class FeedbackScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
    this.openExternal("http://t.me/carmelbeta")
  }

  get isSecondary () {
    return true
  }

  renderScreenContents () {
    return this.renderScreenContentsContainer(this.renderScreenMainMessage({
      message: 'Please leave your feedback in the @carmelbeta Telegram channel'
    }))
  }
}
