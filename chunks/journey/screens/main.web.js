import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class MainChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }
  }

  componentDidMount() {
    super.componentDidMount()
    this._username = this.props.location.pathname.split('/')[2]
    this.setState({
    })
  }

  get cover () {
    return Object.assign({}, this.props.cover, {
      title: this.username? `${this.username}'s #CarmelJourney` : 'Carmel Journeys'
    })
  }

  get username () {
    return this._username
  }


  components() {
    return super.components().concat([])
  }
}
