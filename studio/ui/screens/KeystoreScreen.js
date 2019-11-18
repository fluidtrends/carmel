import React, { Component } from "react"
import ListScreen from './ListScreen'
import WebScreen from './WebScreen'

class KeystoreScreen extends ListScreen {

  constructor() {
    super()

    this.state = {}
    this._actions = []
    this._onSetup = this.onSetup.bind(this)
    this._data = {}
  }

  onAction(item) {
    this.setState({ item })
  }

  onSetup(data) {
    this._data[this.state.item.id] = Object.assign({}, item, { data })
    this.setState({ item: undefined })
  }

  renderItem() {
    return <WebScreen done={this._onSetup}/>
  }

  render() {
    if (this.state.item) {
      return this.renderItem()
    }
    return super.render()
  }
}

export default KeystoreScreen