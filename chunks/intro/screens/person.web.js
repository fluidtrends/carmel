import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class MainPersonScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()

    this._username = this.props.location.pathname.split('/')[1]
    console.log(this.username)
  }

  get cover () {
    return Object.assign({}, this.props.cover, {
      title: `${this.username}'s #CarmelStory`
    })
  }

  get username () {
    return this._username
  }

  get features () {
    return ([])
  }

  components () {
    return super.components()
          .concat(this.features)
  }
}
