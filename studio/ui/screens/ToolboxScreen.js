import React, { Component } from "react"
import ListScreen from './ListScreen'

class ToolboxScreen extends ListScreen {

  constructor() {
    super()

    this.state = {}
  }

  loadData() {
    const data = [].concat(this.props.session.tools)
    console.log(data)
    this.setState({ data, ready: true })
  }

  componentDidMount() {
    super.componentDidMount()
  }

  onAction(tool) {
    if (!tool.installed) {
      this.props.eventManager.send('installTool', { tool })
      return
    }

    if (tool.command && tool.installed) {
      this.props.eventManager.send('openCommand', { cmd: tool.command.id })
      return 
    }
  }
}

export default ToolboxScreen