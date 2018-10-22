import React from 'react'
import Screen from './account.web'

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
    this.triggerRedirect('/profile')
  }
}
