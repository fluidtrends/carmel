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

  render () {
    return <div style={{
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      display: 'flex',
      flex: 1
    }}>
      <img src={'../../../../assets/chunky-logo.gif'} style={{
        display: 'block',
        alignSelf: 'center',
        width: '200px',
        height: '200px'
      }} />
      <Typography use='headline5' tag='h2' style={{ color: '#00bcd4', textAlign: 'center' }}>
        <Icon type='hourglass' spin style={{ marginRight: '10px'}} />
        { this.props.message }
      </Typography>
    </div>
  }
}
