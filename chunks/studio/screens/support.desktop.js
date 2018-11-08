import React from 'react'
import { Typography } from '@rmwc/typography'
import Screen from './base.desktop'
import { Button, ButtonIcon } from '@rmwc/button'

export default class SupportScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get isSecondary () {
    return true
  }

  renderScreenContents () {
    return this.renderScreenContentsContainer(this.renderScreenMainMessage({
      message: 'Support coming soon'
    }))
  }
}
