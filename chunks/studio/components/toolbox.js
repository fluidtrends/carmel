import React from 'react'
import { Component, Utils } from 'react-dom-chunky'
import { LinearProgress } from 'rmwc/LinearProgress'
import { Card } from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
import { ListDivider } from 'rmwc/List'
import { Icon } from 'rmwc/Icon'
import * as DesktopUtils from 'react-electron-chunky/lib/utils'
import fs from 'fs-extra'
import path from 'path'
import { ipcRenderer } from 'electron'
import UserInfo from '../../dashboard/components/userInfo'
import Loading from '../../dashboard/components/loading'
import Status from './status'
import Tools from './tools'

export default class ToolboxComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: true }
    this._onOpenTool = this.onOpenTool.bind(this)
    this._onInstallTool = this.onInstallTool.bind(this)
  }

  shell (command) {
    return this.command('shell', command)
  }

  which (command) {
    return this.command('which', command)
  }

  command (type, command) {
    return new Promise((resolve, reject) => {
      const callId = `${type}-${Utils.newShortId()}`
      ipcRenderer.on(callId, (event, result) => {
        if (result.error) {
          resolve()
          return
        }
        resolve(result.data)
      })
      ipcRenderer.send(type, { command, callId })
    })
  }

  componentDidMount () {
    super.componentDidMount()
    this.initializeEnvironment()
    this.refreshTools()
  }

  componentWillUnmount () {
    this.stopTimer()
  }

  startTimer () {
    const timer = setInterval(() => this.timerFired(), 1000)
    this.setState({ timer })
  }

  timerFired () {
    this.shell(this.state.tool.exec)
        .then((data) => {
          this.stopTimer()
          this.setState({ downloaded: true, installing: false, installed: true, loading: true })
          this.refreshTools()
        })
  }

  stopTimer () {
    if (!this.state.timer) {
      return
    }
    clearInterval(this.state.timer)
  }

  get userHomeDir () {
    return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
  }

  get carmelHomeDir () {
    return path.resolve(this.userHomeDir, '.carmel')
  }

  get toolsHomeDir () {
    return path.resolve(this.carmelHomeDir, 'tools')
  }

  initializeEnvironment () {
    if (!fs.existsSync(this.carmelHomeDir)) {
      fs.mkdirsSync(this.carmelHomeDir)
    }
    if (!fs.existsSync(this.toolsHomeDir)) {
      fs.mkdirsSync(this.toolsHomeDir)
    }
  }

  findTool (name) {
    if (!this.state.tools) {
      return
    }

    var found

    this.state.tools.forEach(tool => {
      if (tool.name === name) {
        found = tool
      }
    })

    return found
  }

  onOpenTool (tool) {
    if (!tool || !tool.exec) {
      return
    }

    this.shell(tool.exec)
  }

  onInstallTool (tool) {
    if (!tool || !tool.installers) {
      return
    }

    var platform = 'mac'
    if (process.platform === 'darwin') {
      platform = 'mac'
    } else if (process.platform === 'win32') {
      platform = 'windows'
    } else if (platform) {
      platform = 'debian'
    }

    if (!tool.installers || !tool.installers[platform]) {
      return
    }

    const installer = tool.installers[platform]
    const binary = path.resolve(this.toolsHomeDir, `${path.basename(installer)}`)
    this.setState({ installing: tool.name, downloadProgress: 0 })
    DesktopUtils.install(installer,
                  binary,
                  (downloadProgress) => {
                    this.setState({ downloadProgress })
                  })
          .then(() => {
            this.setState({ downloaded: true, tool })
            this.startTimer()
            this.shell(`open ${binary}`)
          })
          .catch((error) => {
            this.setState({ installing: false, error })
          })
  }

  refreshTools () {
    const level = this.user.level || 0
    const tokens = this.user.tokens || 0
    const loading = false

    this.props.importRemoteData(`${this.props.toolboxUrl}/index.json`).then(raw => {
      var all = []
      raw.forEach(tool => {
        all.push(this.which(tool.exec).then(installed => Object.assign({}, { installed }, tool)))
      })

      Promise.all(all).then(tools => {
        this.setState({
          tokens,
          loading,
          level,
          tools
        })
      })
    })
  }

  get user () {
    return this.props.account || {}
  }

  renderMainContent () {
    return <Tools
      toolboxUrl={this.props.toolboxUrl}
      data={this.state.tools}
      onOpen={this._onOpenTool}
      onInstall={this._onInstallTool} />
  }

  renderError () {
    if (!this.state.error) {
      return <div />
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          margin: '10px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography use='title' style={{ color: '#ef5350' }} tag='h1'>
          {this.state.error}
        </Typography>
      </div>
    )
  }

  render () {
    const width = '100%'

    if (this.state.installing) {
      const title = this.state.downloaded ? `Download complete. Installing ...` : `Downloading the ${this.state.installing}, just a minute ...`
      return (
        <div
          style={{
            display: 'flex',
            flex: 1,
            margin: '10px',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Card style={{ width, margin: '20px', padding: '0px' }}>
            <Typography use='title' tag='h1'>
              { title }
            </Typography>
            <ListDivider />
            <LinearProgress determinate={false} />
          </Card>
        </div>
      )
    }

    if (this.state.loading) {
      return <Loading message={`Loading your Carmel Toolbox ... Just a sec, please.`} />
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          margin: '10px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Card style={{ width, margin: '10px', padding: '0px' }}>
          <UserInfo
            level={this.state.level}
            tokens={this.state.tokens}
            user={this.user} />
        </Card>
        <div style={{ width, margin: '10px', padding: '0px' }}>
          <Status />
        </div>
        { this.renderError()}
        <Card style={{
          width,
          margin: '0px',
          padding: '0px'
        }}>
          <div style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'left'
          }}>
            <Icon strategy='ligature' style={{
              color: '#039BE5',
              marginLeft: '10px',
              fontSize: '36px'
            }}>business_center</Icon>
            <Typography style={{
              textAlign: 'left',
              flex: 1,
              display: 'flex',
              margin: '20px',
              color: '#039BE5'
            }} use='display1' tag='div' >
            Toolbox
          </Typography>
            <div style={{
              marginRight: '10px'
            }} />
          </div>
          <Typography style={{
            textAlign: 'left',
            flex: 1,
            display: 'flex',
            marginLeft: '20px',
            marginBottom: '10px',
            color: '#B0BEC5'
          }} use='subheading2' tag='div' >
            Your Carmel Toolbox contains all the tools you need to develop Software Products.
          </Typography>
          {this.renderMainContent()}
        </Card>

      </div>
    )
  }
}
