import React from 'react'
import { Component, Components, Utils } from 'react-dom-chunky'
import { Tabs } from 'antd'
import path from 'path'
import { TabBar, Tab, TabIcon, TabIconText, TabBarScroller } from 'rmwc/Tabs'
import brace from 'brace'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/github'
import chokidar from 'chokidar'
import fs from 'fs-extra'
import { Snackbar } from 'rmwc/Snackbar'

const TabPane = Tabs.TabPane

export default class TabBarComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, mode: 'javascript' }
    this._onTabEdited = this.onTabEdited.bind(this)
    this._onTabChanged = this.onTabChanged.bind(this)
    this._onTabSelected = this.onTabSelected.bind(this)
    this._onContentChanged = this.onContentChanged.bind(this)
    this._onFileChanged = this.onFileChanged.bind(this)
    this._onFileRemoved = this.onFileRemoved.bind(this)
    this._onSave = this.onSave.bind(this)
    this._cache = {}
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
    this.watcher && this.watcher.close()
  }

  loadEditor (e) {
    if (this.editor) {
      return
    }

    this._editor = e.editor

    this._watcher = chokidar.watch(path.resolve(this.props.dir, this.activeFile))
    this.watcher.on('change', this._onFileChanged)
    this.watcher.on('unlink', this._onFileRemoved)

    this.reloadFile(this.activeFile)

    this.editor.commands.addCommand({
      name: 'save',
      bindKey: {win: 'Ctrl-S', 'mac': 'Cmd-S'},
      exec: this._onSave
    })
  }

  onContentChanged (content) {
    this.setState({ content })
  }

  onFileChanged () {
    this.reloadFile(this.activeFile)
  }

  onFileRemoved () {
  }

  get editor () {
    return this._editor
  }

  get watcher () {
    return this._watcher
  }

  get cache () {
    return this._cache
  }

  onSave () {
    try {
      fs.writeFileSync(path.resolve(this.props.dir, this.activeFile), this.state.content, 'utf8')
      this.cache[this.activeFile] = this.state.content
      this.setState({ snack: 'Changes saved', showSnack: true })
    } catch (error) {
    }
  }

  reloadFile (file) {
    const mode = 'javascript'

    if (this.cache[file]) {
      this.setState({ content: this.cache[file], mode, activeFile: file })
      return
    }

    try {
      const content = fs.readFileSync(path.resolve(this.props.dir, file), 'utf8')
      this.cache[file] = content
      this.setState({ content, mode, activeFile: file })
    } catch (error) {
    }
  }

  onTabEdited (file) {
    this.props.onFileClose && this.props.onFileClose(file)
  }

  onTabSelected (file) {
    this.props.onTabSelected && this.props.onTabSelected(file)
  }

  onTabChanged (file) {
    this.props.onTabChanged && this.props.onTabChanged(file)
    this.reloadFile(file)
  }

  renderTab (filename, options, index) {
    const base = `${path.basename(filename)}`

    return <TabPane
      tab={base}
      closable
      key={filename} />
  }

  renderEditor () {
    if (this.props.hideContent) {
      return
    }

    return <AceEditor
      key='editor'
      ref={(e) => this.loadEditor(e)}
      height='100%'
      width='100%'
      fontSize={14}
      mode={this.state.mode}
      theme='github'
      style={{
        borderBottom: '1px solid #EEEEEE',
        borderLeft: '1px solid #EEEEEE',
        borderRight: '1px solid #EEEEEE',
        display: 'flex',
        height: '100%',
        flex: 1
      }}
      showPrintMargin
      showGutter={false}
      highlightActiveLine
      onChange={this._onContentChanged}
      value={this.state.content}
      wrapEnabled
      editorProps={{ blockScrolling: true }} />
  }

  get activeFile () {
    return this.state.activeFile || Object.keys(this.props.files)[0]
  }

  renderSnack () {
    if (this.props.hideContent) {
      return <div />
    }

    return <Snackbar
      key='alert'
      show={this.state.showSnack}
      message={this.state.snack}
      onHide={() => this.setState({ showSnack: false })} / >
  }

  render () {
    if (!this.props.files || this.props.files.length === 0) {
      return <div />
    }

    var index = 0
    const tabs = Object.keys(this.props.files).map(f => this.renderTab(f, this.props.files[f], index++))

    return <div style={Object.assign({}, {
      padding: '0px',
      margin: '10px',
      width: '100%',
      height: '50px',
      display: 'flex',
      flexDirection: 'column'
    }, this.props.hideContent || { flex: 1, height: '100%' })}>
      <Tabs
        hideAdd
        animated={false}
        activeKey={this.activeFile}
        tabPosition='top'
        type='editable-card'
        tabBarStyle={{
          padding: '0px',
          margin: '0px',
          flex: 1,
          width: '100%',
          display: 'flex'
        }}
        onTabClick={this._onTabSelected}
        onChange={this._onTabChanged}
        onEdit={this._onTabEdited}>
        { tabs }
      </Tabs>
      { this.renderEditor() }
      { this.renderSnack() }
    </div>
  }
}
