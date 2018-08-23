import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Tree, Icon, Modal, Button } from 'antd'
import path from 'path'

const DirectoryTree = Tree.DirectoryTree
const TreeNode = Tree.TreeNode

export default class Explorer extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._onFileBrowserSelect = this.onFileBrowserSelect.bind(this)
    this._onClose = this.onClose.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onClose () {
    this.props.onClose && this.props.onClose()
  }

  onFileBrowserSelect (item) {
    this.props.onFileOpen && this.props.onFileOpen(item[0])
  }

  buildFileBrowser (nodes, parent) {
    var browser = []

    Object.keys(nodes).map(node => {
      const key = path.resolve(parent, node)

      if (typeof nodes[node] !== 'object') {
        const ext = path.extname(node).substring(1).toLowerCase()
        var icon = 'file-text'
        switch (ext) {
          case 'md':
            icon = 'file-markdown'
            break
          default:
        }

        browser.push(<TreeNode
          title={node}
          selectable
          icon={<Icon type={icon} />}
          key={key}
          isLeaf
          />)
        return
      }

      browser.push(<TreeNode
        title={node}
        selectable={false}
        key={key}>
        { this.buildFileBrowser(nodes[node], key) }
      </TreeNode>)
    })

    return browser
  }

  sortNodes (files) {
    var nodes = {}

    files.forEach(file => {
      const paths = file.split(path.sep)

      if (paths.length === 1) {
        nodes[file] = true
        return
      }

      var dir = paths.shift()

      nodes[dir] = nodes[dir] || []
      nodes[dir] = nodes[dir].concat(paths.join(path.sep))
    })

    Object.keys(nodes).forEach(file => {
      if (!Array.isArray(nodes[file])) {
        return
      }
      nodes[file] = this.sortNodes(nodes[file])
    })

    return nodes
  }

  render () {
    if (!this.props.files || !this.props.dir) {
      return <div />
    }

    const nodes = this.sortNodes(this.props.files)
    const browser = this.buildFileBrowser(nodes, this.props.dir)

    return <Modal
      title='Select a file to open'
      onCancel={this._onClose}
      footer={[<Button key='back' onClick={this._onClose}>Cancel</Button>]}
      visible>
      <DirectoryTree
        onSelect={this._onFileBrowserSelect}>
        { browser }
      </DirectoryTree>
    </Modal>
  }
}
