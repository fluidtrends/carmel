import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Shell } from '../../studio/components/index.desktop'
import Typist from 'react-typist'
import { LinearProgress } from 'rmwc/LinearProgress'
import { Icon } from 'antd'

export default class WelcomeScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, log: 'Initializing virtual machine ... ', progress: 0.0, initialized: false }
    this._shell = new Shell()
  }

  get shell () {
    return this._shell
  }

  componentDidMount () {
    super.componentDidMount()

    const self = this
    this.shell.exec('initialize', { }, ({ log }) => {
      self.setState({ log: log || 'Almost there ...' })
    }).then((data) => {
      self.setState({ initialized: true })
      self.triggerRedirect('/workspace')
    })
    .catch(error => {
      self.setState({ error, initialized: true })
      self.triggerRedirect('/workspace')
    })
  }

  get welcome () {
    if (this.isLoggedIn) {
      return <Typist cursor={{
        show: false
      }}>
        <h1 style={{ color: '#ffffff' }}> Hey {this.account.user.name}, welcome back to Carmel! </h1>
        <Typist.Delay ms={500} />
        <h2 style={{ color: '#ffffff' }}> Ready to get back into coding? </h2>
        <Typist.Delay ms={1000} />
        <h4 style={{ color: '#ffffff', marginTop: '40px', marginBottom: '40px' }}> { `Alright, let's do this...`} </h4>
      </Typist>
    }

    return <Typist cursor={{
      show: false
    }}>
      <h1 style={{ color: '#ffffff' }}> Hey there, welcome to Carmel! </h1>
      <Typist.Delay ms={500} />
      <h2 style={{ color: '#ffffff' }}> { `I'm Chunky` }
        <Typist.Delay ms={500} />
        , your personal Code Monkey.
      </h2>
      <h2 style={{ color: '#ffffff' }}> Ready to start your coding journey? </h2>
      <Typist.Delay ms={1000} />
      <h4 style={{ color: '#ffffff', marginTop: '40px', marginBottom: '40px' }}> { `Alright, let's do this...`} </h4>
    </Typist>
  }

  get header () {
    return <img src='../../../../assets/chunky-logo.gif' style={{
      width: '240px', height: '240px', padding: '40px'
    }} />
  }

  get progress () {
    if (this.state.initialized) {
      return <Typist cursor={{
        show: false
      }}>
        <h4 style={{ color: '#ffffff' }}> Starting... </h4>
      </Typist>
    }

    return <div style={{
      height: '100px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      width: '100vw',
      padding: '30px',
      flexDirection: 'column'
    }}>
      <h1 style={{ color: '#FFFFFF' }}> <Icon type='loading' /> </h1>
      <h3 style={{ color: '#FFFFFF' }}> Loading Your Carmel Learning Environment ... </h3>
      <p style={{ color: '#EEEEEE' }}> { this.state.log } </p>
    </div>
  }

  renderScreenLayout () {
    return <div style={{
      backgroundColor: '#00bcd4',
      display: 'flex',
      color: '#ffffff',
      flex: 1,
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        position: 'absolute',
        top: '0px',
        marginTop: '20px',
        display: 'flex',
        flex: 1
      }}>
        { this.header }
      </div>
      { this.welcome }
      <div style={{
        position: 'absolute',
        bottom: '0px',
        marginBottom: '20px',
        display: 'flex',
        flex: 1
      }}>
        { this.progress }
      </div>
    </div>
  }
}
