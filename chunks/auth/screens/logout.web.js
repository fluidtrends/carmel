import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class LogoutScreen extends Screen {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    if (!this.isLoggedIn) {
      this.triggerRedirect('/login')
    } else {
      this.logout()
      this.triggerRedirect('/register')
    }

  }

  components () {
    return []
  }
}
