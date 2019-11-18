import React, { Component } from "react"
import { Progress, Button } from 'antd'
import { ipcRenderer } from 'electron'

class Download extends Component {

  constructor() {
    super()

    this.state = {}
    this._startDownload = this.startDownload.bind(this)
    this._startOpen = this.startOpen.bind(this)
  }

  componentDidMount() {
    ipcRenderer.on("download-complete", (event, fullPath) => {
      this.setState({ fullPath, finished: true })
    })

    ipcRenderer.on("download-progress", (event, status) => {
      const progress = Math.floor(status * 100)
      this.setState({ progress })
    })
  }

  componentWillUnmount() {
  }

  startDownload() {
    ipcRenderer.send("download", {
      url: this.props.url,
      properties: {}
    })

    this.setState({ started: true, progress: 0 })
  }

  startOpen() {
    console.log(this.state.fullPath)
    ipcRenderer.send("open", {
      path: this.state.localPath
    })
  }

  renderTitle () {
    return <div>
        <p> { this.props.title } </p>
    </div>
  }

  renderDownloadButton() {
    return <Button 
          onClick={this._startDownload}
          type="primary" 
          shape="round" 
          icon="download" 
          size='large'>
       Download Now
    </Button>
  }

  renderOpenButton() {
    return <Button 
          onClick={this._startOpen}
          type="primary" 
          shape="round" 
          icon="download" 
          size='large'>
       Open Now
    </Button>
  }

  renderProgress() {
    return <Progress type="circle" percent={this.state.progress} />
  }

  render() {
    if (this.state.finished) {
      return [this.renderTitle(), this.renderOpenButton()]
    }

    if (this.state.started) {
      return this.renderProgress() 
    }

    return [this.renderTitle(), this.renderDownloadButton()]
  }

}

export default Download