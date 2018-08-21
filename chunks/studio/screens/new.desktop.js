import React from 'react'
import { Component, Components, Screen } from 'react-dom-chunky'
import NewProduct from '../components/newProduct'

export default class New extends Screen {
  constructor (props) {
    super(props)

    this.state = { }
    this._onCreate = this.onCreate.bind(this)
    this._onCancel = this.onCancel.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onCreate (product) {
    this.triggerRedirect('/workspace')
  }

  onCancel () {
    this.triggerRedirect('/workspace')
  }

  renderPrimaryContent () {
    return <NewProduct
      onCancel={this._onCancel}
      session={this.props.session}
      onCreate={this._onCreate} />
  }

  renderScreenLayout () {
    return <div style={{
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flex: 1,
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      { this.renderPrimaryContent() }
    </div>
  }
}
