import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card } from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
import Typist from 'react-typist'

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
      backgroundColor: '#f5f5f5',
      display: 'flex',
      height: '100vh',
      width: '100vw',
      padding: '50px',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flex: 1
    }}>
      <Card key='progress' style={{
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        margin: '50px',
        height: '300px',
        flex: 1
      }}>
        <img src={'../../../../assets/chunky-logo.gif'} style={{
          display: 'block',
          width: '100px',
          marginTop: '-40px',
          height: '100px'
        }} />
        <Typography use='title' tag='h2' style={{ color: '#00bcd4', marginTop: '-10px', textAlign: 'center' }}>
          { this.props.title }
        </Typography>
        <Components.Loading message={this.props.message} />
      </Card>
    </div>
  }
}
