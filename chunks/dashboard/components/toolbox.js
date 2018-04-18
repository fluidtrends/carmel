import React from 'react'
import { Component, Components, Utils } from 'react-dom-chunky'
import moment from 'moment'
import validator from 'validator'
import { LinearProgress } from 'rmwc/LinearProgress'
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField'
import {
  Card,
  CardMedia,
  CardMediaItem,
  CardPrimary,
  CardTitle,
  CardActions,
  CardActionButtons,
  CardAction,
  CardPrimaryAction,
  CardActionIcons,
  CardSubtitle,
  CardSupportingText,
  CardHorizontalBlock
} from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { FormField } from 'rmwc/FormField'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { ListDivider } from 'rmwc/List'
import { Fab } from 'rmwc/Fab'
import { Icon } from 'rmwc/Icon'
import * as DesktopUtils from 'react-electron-chunky/lib/utils'
import fs from 'fs-extra'
import path from 'path'
import { ipcRenderer } from 'electron'

const ToolboxIndex = `https://raw.githubusercontent.com/fluidtrends/carmel/content/studio/toolbox/index.json`

export default class ToolboxComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: true }
    this._onEvent = this.onEvent.bind(this)
    this._renderCardButtons = this.renderCardButtons.bind(this)
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
    process.noAsar = true

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

  openTool (name) {
    const tool = this.findTool(name)

    if (!tool || !tool.exec) {
      return
    }

    this.shell(tool.exec)
  }

  installTool (name) {
    const tool = this.findTool(name)

    if (!tool || !tool.exec) {
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
    this.setState({ installing: name, downloadProgress: 0 })
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

  onEvent (name, data) {
    switch (data.type) {
      case 'open':
        this.openTool(name)
        break
      case 'install':
        this.installTool(name)
        break
      default:
    }
  }

  refreshTools () {
    const level = this.user.level || 0
    const tokens = this.user.tokens || 0
    const loading = false

    this.props.importRemoteData(ToolboxIndex).then(raw => {
      Promise.all(raw.map(tool => this.which(tool.exec).then(installed => Object.assign({}, { installed }, tool)))).then(tools => {
        this.setState({
          tokens,
          loading,
          level,
          tools
        })
      })
    })
  }

  renderCardButtons (item, index) {
    const tool = this.state.tools[index]
    const title = (tool.installed ? 'Open' : 'Install')
    const type = (tool.installed ? 'open' : 'install')

    return <CardActionButtons>
      <CardAction onClick={this.triggerEvent(item.name || index, Object.assign({}, item.action, { type }))}> { title } </CardAction>
    </CardActionButtons>
  }

  get user () {
    return this.props.account || {}
  }

  renderContentHeader () {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            padding: '10px',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Typography
            use='headline'
            tag='h1'
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'flex-start'
            }}
          >
            <Icon style={{ fontSize: '50px' }} strategy='ligature'>
              account_circle
            </Icon>
          </Typography>
          <Typography
            use='title'
            tag='h1'
            style={{
              display: 'flex',
              flex: 6,
              justifyContent: 'flex-start'
            }}
          >
            {this.user.name}
          </Typography>
          <Typography use='subheading1' tag='h1'>
            <ChipSet>
              <Chip style={{ backgroundColor: '#F5F5F5' }}>
                <ChipIcon style={{ color: '#66BB6A' }} leading use={`stars`} />
                <ChipText>
                  {' '}
                  {this.state.tokens.toLocaleString('en')} CARMEL{' '}
                </ChipText>
              </Chip>
            </ChipSet>
            Level {this.state.level.toLocaleString('en')}
          </Typography>
        </div>
      </div>
    )
  }

  renderMainContent () {
    return (<div>
      <Components.Collection
        id='tools'
        desktop={this.props.desktop}
        renderCardButtons={this._renderCardButtons}
        onEvent={this._onEvent}
        categories={this.state.tools} />
    </div>)
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
                Loading your tools ... Just a sec, please.
            </Typography>
            <ListDivider />
            <LinearProgress determinate={false} />
          </Card>
        </div>
      )
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
        <Card style={{ width, margin: '10px', padding: '0px' }}>
          {this.renderContentHeader()}
        </Card>
        {this.renderError()}
        <Card style={{ width, margin: '0px', padding: '0px' }}>
          {this.renderMainContent()}
        </Card>
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '20px'
  },
  toolbar: {
    paddingTop: '15px',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '18px',
    margin: '5px'
  },
  day: {
    color: '#FFFFFF',
    height: '60px',
    backgroundColor: '#6BBCF4',
    alignItems: 'flex-start'
  }
}

const errors = {}
