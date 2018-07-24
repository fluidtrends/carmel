import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
// import fs from 'fs-extra'
// import path from 'path'
// import os from 'os'
// import NewWorkspaceForm from '../components/newWorkspace'
// import { Typography } from 'rmwc/Typography'
// import { Card, CardActions, CardMedia, CardActionButtons } from 'rmwc/Card'
// import { Button, ButtonIcon } from 'rmwc/Button'
// import { LinearProgress } from 'rmwc/LinearProgress'
// import { Icon } from 'antd'
// import { Data } from 'react-chunky'
// import Shell from '../components/shell'
// import chokidar from 'chokidar'
// import browserSync from 'browser-sync'

export default class PreviewScreen extends Screen {
  constructor (props) {
    super(props)
    this._onStartLoad = this.onStartLoading.bind(this)
    this._onStopLoad = this.onStopLoading.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    console.log('PREIVEWWWWWW')

    // const webview = document.getElementById('webview')
    // const indicator = document.querySelector('.indicator')

    // console.log(indicator)

    // webview.addEventListener('did-start-loading', this._onStartLoad)
    // webview.addEventListener('did-stop-loading', this._onStartLoad)
  }

  onStartLoading () {
    console.log('START LOADING')
    // this.se
  }

  onStopLoading () {
    console.log('STOP LOADING')
    // this.se
  }
  renderMainContent () {
    // if (this.state.error) {
    //   console.log(this.state.error)
    // }
    //
    // if (this.state.create) {
    //   return <NewWorkspaceForm
    //     cancel
    //     onCancel={this._onCancel}
    //     onCreate={this._onCreate} />
    // }
    //
    // if (this.state.loadingWorkspace) {
    //   return <Components.Loading message='Loading Your Carmel Learning Workspace ...' />
    // }

    // const width = '400px'
    // const padding = this.props.isSmallScreen ? '2px' : '5px'
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          padding: '30px',
          margin: '40px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <webview src='http://localhost:180' style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#ffff00'
        }} />

      </div>
    )
  }

  components () {
    return [this.renderMainContent()]
  }
}
