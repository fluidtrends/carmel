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
import { remote } from 'electron'
import { Button, ButtonIcon } from 'rmwc/Button'

const TabPane = Tabs.TabPane

export default class EditorComponent extends Component {
  constructor (props) {
    super(props)

    this.state = { ...super.state, mode: 'javascript' }

    this._onTabEdited = this.onTabEdited.bind(this)
    this._onTabChanged = this.onTabChanged.bind(this)
    this._onTabSelected = this.onTabSelected.bind(this)

    this._onContentChanged = this.onContentChanged.bind(this)
    this._onFileTabChanged = this.onFileTabChanged.bind(this)
    this._onFileTabSelected = this.onFileTabSelected.bind(this)
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
      this.setState({ content, mode, activeFile: file, showEditor: true, activeFileTimestamp: `${Date.now()}` })
    } catch (error) {
    }
  }

  onTabEdited (file) {
    this.closeFile(file)
  }

  onTabSelected (file) {
    if (this.state.showEditor) {
      return
    }
    this.setState({ showEditor: true })
  }

  onTabChanged (file) {
    this.reloadFile(file)
  }

  openFile (file) {
    const openFiles = Object.assign({}, this.openFiles)

    const timestamp = `${Date.now()}`
    openFiles[file] = { timestamp, fullPath: path.join(this.props.dir, file) }

    this.props.onMaximize && this.props.onMaximize()

    this.setState({
      openFiles,
      showEditor: true,
      lastOpenedFile: { file, timestamp }
    })
  }

  get openFiles () {
    return Object.assign({}, this.state.openFiles)
  }

  closeFile (file) {
    if (!this.openFiles || !this.openFiles[file]) {
      return
    }
    const openFiles = Object.assign({}, this.openFiles)
    delete openFiles[file]
    this.setState({ openFiles })
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

  renderTab (filename, options, index) {
    const base = `${path.basename(filename)}`

    return <TabPane
      tab={base}
      closable
      key={filename} />
  }

  renderContent () {
    if (!this.state.showEditor) {
      return <div style={{ marginBottom: '10px'}} />
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
    var file = (this.state.activeFile || Object.keys(this.openFiles)[0])
    return file
  }

  renderSnack () {
    if (!this.state.showEditor) {
      return <div />
    }

    return <Snackbar
      key='alert'
      show={this.state.showSnack}
      message={this.state.snack}
      onHide={() => this.setState({ showSnack: false })} / >
  }

  renderChildren () {
    if (!this.state.showEditor) {
      return this.props.children
    }

    return <Button key='more' onClick={() => this.setState({ showEditor: false })} style={{
      color: '#FFFFFF',
      backgroundColor: '#00bcd4',
      margin: '10px'
    }}>
      { 'See Details' }
    </Button>
  }

  render () {
    if (!this.hasOpenFiles) {
      return this.props.children
    }

    var index = 0
    const tabs = Object.keys(this.openFiles).map(f => this.renderTab(f, this.openFiles[f], index++))

    return <div style={{
      padding: '0px',
      margin: '10px',
      width: '100%',
      height: '50px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      height: '100%' }}>
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
      { this.renderContent() }
      { this.renderChildren() }
      { this.renderSnack() }
    </div>
  }

  openFileBrowser () {
    remote.dialog.showOpenDialog({
      defaultPath: this.props.dir,
      properties: ['openFile']
    }, (files) => {
      if (!files || files.length < 1) {
        return
      }
      const relative = path.relative(this.props.dir, files[0])
      const isOk = !relative.startsWith('..')

      if (!isOk) {
        return
      }

      this.openFile(relative)
    })
  }

  get hasOpenFiles () {
    return this.openFiles && Object.keys(this.openFiles).length > 0
  }
}
