import React from 'react'
import { Screen } from 'react-dom-chunky'
const challenges = require('challenges/index.json')

export default class InitialChallenge extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  components() {
    console.log(challenges)
    return super.components().concat([])
  }
}
