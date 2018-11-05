import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import { Icon } from 'antd'

export default class Progress extends Component {
  constructor (props) {
    super(props)

    this.state = { }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  render() {
    const video = `../../../../assets/background.mp4`

    return <div style={{
      height: "100vh",
      width: "100vw",
      position: "relative",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <video loop autoPlay="autoplay" muted
      style={{
        objectFit: "cover",
        height: "100vh",
        width: "100vw",
        overflow: "hidden"
      }}>
      <source src={video} type="video/mp4" />
      </video>
      <div style={{
        background: "rgba(0,0,0,0.7)",
       position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
         display: "flex",
         alignItems: "center",
         flexDirection: "column",
         justifyContent: "center"
      }}>
      <div style={{
        width: "80vw",
        flex: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
      }}>
      <img src={'../../../../assets/chunky-logo.gif'} style={{
        display: 'block',
        alignSelf: 'center',
        width: '200px',
        height: '200px'
      }} />
      <Typography use='headline5' tag='h2' style={{ color: '#ffffff', textAlign: 'center' }}>
        <Icon type='hourglass' spin style={{ marginRight: '10px'}} />
        { this.props.message }
      </Typography>``
        </div>
      </div>
    </div>
  }
}
