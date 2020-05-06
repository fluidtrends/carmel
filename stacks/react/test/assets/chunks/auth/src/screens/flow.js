import React, { Component } from 'react'
import { Screen } from '../../../../../..'

export default class _ extends Screen {

  constructor (props) {
    super(props)
    this.state = { progress: false }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  getAccountSuccess(data) {
    
  }

  getAccountError(data) {
    
  }

  renderData () {
    return <div>
        Main
    </div>
  }

}
