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
      display: 'block',
      flex: 1,
      overflow: 'scroll',
      height: '100vh',
      padding: '20px',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      { this.renderPrimaryContent() }
    </div>
  }
}
