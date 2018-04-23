
import React from 'react'
import { Component } from 'react-dom-chunky'
import { Typography } from 'rmwc/Typography'
import { ListDivider } from 'rmwc/List'
import { LinearProgress } from 'rmwc/LinearProgress'
import { Card } from 'rmwc/Card'
import { Spin, Icon } from 'antd'

export default class LoadingComponent extends Component {

  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  render () {
    const height = '100vh'
    const indicator = <Icon type='loading' style={{ fontSize: 48, color: '#039BE5' }} spin />

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          height,
          margin: '10px',
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Spin indicator={indicator} style={{padding: '40px'}} />
        <Typography use='title' style={{ color: '#B0BEC5' }} tag='h1'>
          {this.props.message}
        </Typography>
      </div>
    )
  }
}
