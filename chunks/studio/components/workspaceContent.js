import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import path from 'path'
import { Layout, notification } from 'antd'
import { Typography } from 'rmwc/Typography'
import { Button, ButtonIcon } from 'rmwc/Button'
import Prompt from './prompt'
import TabBar from './tabbar'
import Toolbar from '../components/toolbar'

const { Header } = Layout

export default class WorkspaceContent extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._onFileClose = this.onFileClose.bind(this)
    this._onFileTabChanged = this.onFileTabChanged.bind(this)
    this._onFileTabSelected = this.onFileTabSelected.bind(this)
    this._onProductOption = this.onProductOption.bind(this)
    this._onScreenChanged = this.onScreenChanged.bind(this)
    this._onTogglePreview = this.onTogglePreview.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get openFiles () {
    return Object.assign({}, this.state.openFiles, this.props.lastOpenedFile && { [this.props.lastOpenedFile]: true })
  }

  get hasOpenFiles () {
    return this.openFiles && Object.keys(this.openFiles).length > 0
  }

  onFileClose (file) {
    if (this.openFiles && this.openFiles[file]) {
      const openFiles = Object.assign({}, this.openFiles)
      delete openFiles[file]
      this.setState({ openFiles })
    }
  }

  onFileTabSelected (file) {
    if (this.state.showEditor) {
      return
    }
    this.setState({ showEditor: true })
  }

  onFileTabChanged (file) {
    if (this.state.showEditor) {
      return
    }
    this.setState({ showEditor: true })
  }

  onProductOption (type) {
    this.props.onProductOption && this.props.onProductOption(type)
  }

  onTogglePreview (preview) {
    this.props.onTogglePreview && this.props.onTogglePreview(preview)
  }

  onScreenChanged (type) {
    this.props.onScreenChanged && this.props.onScreenChanged(type)
  }

  openFile (file) {
    const openFiles = Object.assign({}, this.openFiles)

    openFiles[file] = { openTimestamp: `${Date.now}`, fullPath: path.join(this.props.dir, file) }

    this.setState({
      openFiles,
      showEditor: true,
      lastOpenedFile: file
    })
  }

  renderStartingMessage () {
    return <Prompt
      title='Tweek-N-Learn'
      subtitle='Get Ready To Learn The Carmel Way'>
      <Typography use='subtitle1' style={{
        textAlign: 'center',
        margin: '20px',
        color: '#78909C'
      }}>
          Learning the <strong> Carmel Way </strong> means starting with a real product
          and then taking challenges that teach you to tweak your product by writing small
          chunks of code.
        </Typography>
    </Prompt>
  }

  renderPublishingMessage () {
    return <Prompt
      title='Publishing'
      subtitle='Get Ready To See It Live'>
      <Typography use='subtitle1' style={{
        textAlign: 'center',
        margin: '20px',
        color: '#78909C'
      }}>
          Your website is being packaged right now and
          it may take a minute or two. Once complete, it
          will be published live.
        </Typography>
    </Prompt>
  }

  renderMenu () {
    return <div key='header' style={{
      width: '100%',
      marginBottom: '10px'
    }}>
      <Toolbar
        account={this.props.account}
        onTogglePreview={this._onTogglePreview}
        onProductOption={this._onProductOption}
        onScreenChanged={this._onScreenChanged}
        product={this.props.product} />
    </div>
  }

  renderTabs () {
    if (!this.hasOpenFiles) {
      return <div key='tabs' />
    }

    return <TabBar
      key='tabs'
      hideContent={!this.state.showEditor}
      onTabChanged={this._onFileTabChanged}
      onFileClose={this._onFileClose}
      onTabSelected={this._onFileTabSelected}
      file={this.state.lastOpenedFile}
      dir={this.props.dir}
      files={this.openFiles} />
  }

  renderChildren () {
    if (!this.hasOpenFiles || !this.state.showEditor) {
      return this.props.children
    }

    return <Button onClick={() => {
      this.setState({ showEditor: false })
    }} style={{
      color: '#FFFFFF',
      backgroundColor: '#00bcd4',
      margin: '10px'
    }}>
      { this.props.challengeId ? 'See Challenge Details' : 'Choose a challenge' }
    </Button>
  }

  render () {
    if (this.props.isProductPublishing) {
      return this.renderPublishingMessage()
    }

    if (this.props.isProductStarting) {
      return this.renderStartingMessage()
    }

    return [this.renderMenu(), this.renderTabs(), this.renderChildren()]
  }
}
