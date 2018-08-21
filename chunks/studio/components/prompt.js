import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Elevation } from 'rmwc/Elevation'
import { Typography } from 'rmwc/Typography'

export default class Prompt extends Component {
  constructor (props) {
    super(props)

    this.state = { }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderChildren () {
    if (this.props.children) {
      return this.props.children
    }

    return <div />
  }

  render () {
    return <Elevation z={2} style={{
      backgroundColor: '#ffffff',
      marginTop: '40px',
      marginBottom: '10px'
    }}>
      <Typography use='title' tag='h2' style={{ textAlign: 'center' }}>
        <img src={'../../../../assets/chunky-logo.gif'} style={{ marginTop: '-60px', width: '100px', height: '100px' }} />
      </Typography>
      <Typography use='title' tag='h2' style={{ marginTop: '-20px', color: '#00bcd4', textAlign: 'center' }}>
        { this.props.title }
      </Typography>
      <Typography use='caption ' tag='h2' style={{ color: '#90A4AE', textAlign: 'center', marginBottom: '10px' }}>
        { this.props.subtitle }
      </Typography>
      { this.renderChildren() }
    </Elevation>
  }
}
