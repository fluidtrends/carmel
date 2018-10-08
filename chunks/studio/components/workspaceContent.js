import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import path from 'path'
import { Layout, notification } from 'antd'
import { Typography } from 'rmwc/Typography'
import { Button, ButtonIcon } from 'rmwc/Button'
import Prompt from './prompt'
import Editor from './editor'
import Toolbar from '../components/toolbar'
import { Flipper, Flipped } from 'react-flip-toolkit'

const { Header } = Layout

export default class WorkspaceContent extends Component {
  constructor (props) {
    super(props)

    this.state = { }

    this._onProductOption = this.onProductOption.bind(this)
    this._onScreenChanged = this.onScreenChanged.bind(this)
    this._onTogglePreview = this.onTogglePreview.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get editor () {
    return this._editor
  }

  onProductOption (type) {
    switch (type) {
      case 'publishProduct':
        // this.onPublishProduct()
        break
      case 'switchProduct':
        // this.triggerRedirect('/new')
        break
      case 'openFile':
        this.editor && this.editor.openFileBrowser()
        break
      case 'editSettings':
        break
      default:
    }
  }

  onTogglePreview (preview) {
    this.props.onTogglePreview && this.props.onTogglePreview(preview)
  }

  onScreenChanged (type) {
    this.props.onScreenChanged && this.props.onScreenChanged(type)
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
      width: '100%'
    }}>
      <Toolbar
        account={this.props.account}
        onTogglePreview={this._onTogglePreview}
        onProductOption={this._onProductOption}
        onScreenChanged={this._onScreenChanged}
        product={this.props.product} />
    </div>
  }

  renderEditor () {
    return <Editor
      key='editor'
      challengeId={this.props.challengeId}
      ref={(e) => this._editor = e}
      dir={this.props.dir}>
      { this.props.children }
    </Editor>
  }

  render () {
    if (this.props.isProductPublishing) {
      return this.renderPublishingMessage()
    }

    if (this.props.isProductStarting) {
      return this.renderStartingMessage()
    }

    return [this.renderMenu(), this.renderEditor()]
  }
}
