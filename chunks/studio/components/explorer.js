import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Icon, Button, Tree } from 'antd'
import path from 'path'

const TreeNode = Tree.TreeNode

export default class Explorer extends Component {

  constructor (props) {
    super(props)

    this.state = { }
    this._onSelect = this.onSelect.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onSelect (item, info) {
    this.props.onFileOpen && this.props.onFileOpen(item[0])
  }

  buildFileBrowser (nodes, parent) {
    const browser = Object.keys(nodes).map(node => {
      const key = path.resolve(parent, node)

      if (typeof nodes[node] !== 'object') {
        return <TreeNode
          title={node}
          selectable
          icon={<Icon type={'file-text'} />}
          key={key} />
      }

      return <TreeNode
        title={node}
        selectable={false}
        icon={<Icon type={'folder'} />}
        key={key}>
        { this.buildFileBrowser(nodes[node], key) }
      </TreeNode>
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

    return <div style={{
      textAlign: 'left'
    }}>
      <Tree
        showIcon
        defaultExpandAll
        onSelect={this._onSelect}>
        { browser }
      </Tree>
    </div>
  }
}
