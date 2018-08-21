import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card } from 'rmwc/Card'
import { Input, Icon } from 'antd'

export default class Browser extends Component {
  constructor (props) {
    super(props)

    this.state = { }
  }

  componentDidMount () {
    super.componentDidMount()
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

  render () {
    const url = `http://localhost:${this.props.port}`
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
        <div style={{
          width: '100%',
          height: '60px',
          backgroundColor: '#78909C',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon
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
        <webview src={url} style={{
          display: 'flex',
          width: '100%',
          flex: 1
        }} />
      </Card>
    </div>
  }

}
