import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card } from 'rmwc/Card'
import { Input, Icon } from 'antd'
import Progress from './progress'

export default class Browser extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._next = this.next.bind(this)
    this._prev = this.prev.bind(this)
    this._reload = this.reload.bind(this)
    this._loaded = this.loaded.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  loaded (ref) {
    this._webview = ref
  }

  get webview () {
    return this._webview
  }

  renderMask () {
    if (!this.props.preview) {
      return <div />
    }

    const style = Object.assign({}, {
      position: 'absolute',
      top: '0px',
      left: '0px',
      height: '100vh',
      backgroundColor: '#000000',
      opacity: 0.5,
      width: '60px'
    })

    return <div style={style} />
  }

  get url () {
    if (!this.props.port) {
      return 'http://localhost'
    }

    return `http://localhost:${this.props.port}`
  }

  prev () {
    this.webview && this.webview.canGoBack() && this.webview.goBack()
  }

  next () {
    this.webview && this.webview.canGoForward() && this.webview.goForward()
  }

  reload () {
    this.webview && this.webview.reload()
  }

  renderToolbar () {
    return <div style={{
      width: '100%',
      height: '60px',
      backgroundColor: '#78909C',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Icon
        onClick={this._prev}
        style={{
          color: '#CFD8DC',
          display: 'flex',
          fontSize: '18px',
          marginLeft: '10px',
          lineHeight: '64px',
          padding: '0 10px',
          cursor: 'pointer',
          width: '40px',
          transition: 'color .3s'
        }}
        type='arrow-left' />
      <Icon
        onClick={this._next}
        style={{
          color: '#CFD8DC',
          display: 'flex',
          fontSize: '18px',
          marginLeft: '10px',
          lineHeight: '64px',
          padding: '0 10px',
          cursor: 'pointer',
          width: '40px',
          transition: 'color .3s'
        }}
        type='arrow-right' />
      <Icon
        onClick={this._reload}
        style={{
          color: '#CFD8DC',
          display: 'flex',
          fontSize: '18px',
          marginLeft: '10px',
          lineHeight: '64px',
          padding: '0 10px',
          cursor: 'pointer',
          width: '40px',
          transition: 'color .3s'
        }}
        type='reload' />
      <Input
        type='text'
        disabled
        defaultValue={this.url}
        style={{
          color: '#37474F',
          height: '30px',
          backgroundColor: '#FAFAFA',
          display: 'flex',
          padding: '10px',
          margin: '10px',
          flex: 1
        }} />
    </div>
  }

  renderWebview () {
    if (this.props.status.isStarting) {
      return <Progress title='Getting your product ready' message='This can take a minute or two' />
    }

    return <webview
      ref={this._loaded}
      src={this.url} style={{
        display: 'flex',
        width: '100%',
        flex: 1
      }} />
  }

  render () {
    const style = Object.assign({}, {
      height: '100vh',
      display: 'flex',
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5'
    })

    return <div style={style}>
      <Card style={{
        width: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        { this.renderToolbar() }
        { this.renderWebview() }
      </Card>
    </div>
  }

}
