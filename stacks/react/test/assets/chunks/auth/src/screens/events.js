import React, { Component } from 'react'
import { Screen } from '../../../../../..'

export default class _ extends Screen {

  constructor (props) {
    super(props)
    this.state = { progress: false }
  }

  componentDidMount () {
    super.componentDidMount()
    this.triggerAnalyticsView()
    this.triggerAnalyticsEvent()
    this.triggerAnalyticsError()
    this.updateProgress('test')
    this.logout()
    this.login()
    this.didLogout()
    this.didLogin()
  }

  renderDataError () {
    return <div />
  }

  reloadMe () {
    this.transitions.test()
  }

  renderDataLoading () {
    return <div />
  }

  renderProgress() {
    return <div/>
  }

  renderDataDefaults () {
    return <div />
  }

  renderData () {
    const id = this.containerId
    const isContainer = this.isContainer

    return <div>
        { id }
        { isContainer }
    </div>
  }

}
