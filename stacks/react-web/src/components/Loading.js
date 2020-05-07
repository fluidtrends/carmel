import React from 'react'
import Component from '../Component'
import { Typography } from '@rmwc/typography'
import { Spin } from 'antd'

export default class LoadingComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  render () {
    return <div
        style={{
          display: 'flex',
          flex: 1,
          height: '300px',
          height: '60vh',
          margin: '10px',
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Spin style={{padding: '40px'}} />
        <Typography use='headline' style={{ color: '#B0BEC5' }} tag='h2'>
          {this.props.message}
        </Typography>
      </div>
  }
}
