import React from 'react'
import { Component } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import { Button, ButtonIcon } from 'rmwc/Button'
import Bounce from 'react-reveal/Bounce'
import Typist from 'react-typist'
import { Typography } from '@rmwc/typography'
import { IconButton } from '@rmwc/icon-button'

export default class Actor extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._onContinue = this.onContinue.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
  }

  onContinue () {
    this.props.onContinue && this.props.onContinue()
  }

  chunkyHead (offset, speed) {
    return [<Parallax.Layer key='chunkyHead' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Bounce top>
        <img src={`../../../../assets/chunky-logo.gif`} style={{ display: 'block', width: '250px' }} />
      </Bounce>
    </Parallax.Layer>]
  }

  speech(text, offset, speed) {
    return [<Parallax.Layer key='speech' offset={offset} speed={speed} style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }}>
      <Bounce bottom>
        <div style={{
          display: 'flex',
          flex: 1,
          padding: "10px",
          alignItems: 'center',
          justifyContent: 'center'
        }}>
           <Typist avgTypingDelay={40} cursor={{ show: false }}>
              <Typography key='1' use="headline4" style={{
                color: "#263238",
                textAlign: 'center'
              }}>
                { text }
              </Typography>
          </Typist>
        </div>
      </Bounce>
    </Parallax.Layer>]
  }

  prompt(text, offset, speed) {
    return [<Parallax.Layer key='speech' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Bounce bottom delay={2000}>
        <Typography key='1' use="headline5" style={{
          color: "#90A4AE",
          textAlign: 'center'
        }}>
          { text }
        </Typography>
      </Bounce>
    </Parallax.Layer>]
  }

  promptIcon(offset, speed) {
    return [<Parallax.Layer key='speech' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Bounce bottom delay={2500}>
        <Typography key='1' use="headline6" style={{
          color: "#90A4AE",
          textAlign: 'center'
        }}>
          <IconButton icon="arrow_downward"/>
        </Typography>
      </Bounce>
    </Parallax.Layer>]
  }


  render () {
    const hello = "Hi there, I'm Chunky, the Carmel Code Monkey."
    const next = "Let's start the tour, shall we?"

    return [
      ...this.chunkyHead(this.props.offset + 0.1, 0.1),
      ...this.speech(hello, this.props.offset + 0.5, 0.1),
      ...this.prompt(next, this.props.offset + 0.7, 0.3),
      ...this.promptIcon(this.props.offset + 0.75, 0.3)
    ]
  }
}
