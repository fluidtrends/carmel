import React from 'react'
import { Component } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import Typist from 'react-typist'
import { Button, ButtonIcon } from 'rmwc/Button'

export default class Info extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this._onContinue = this.onContinue.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  componentWillUnmount() {
  }

  onContinue() {
    this.props.onContinue && this.props.onContinue()
  }

  top(offset, speed) {
    return [<Parallax.Layer
      offset={offset}
      speed={speed}
      key='top'
      onClick={() => this.props.scroller.scrollTo(2)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }}>
      <img src={'../../../../assets/top.png'} style={{ display: 'block', width: '100%', margin: '0' }} />
    </Parallax.Layer>]
  }

  board(offset, speed) {
    const color = '#4E342E'
    const fontSize = 18

    return [<Parallax.Layer key='board' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={'../../../../assets/board.png'} style={{ display: 'block', width: '450px', marginTop: '80px' }} />
    </Parallax.Layer>,
    <Parallax.Layer
      offset={offset}
      speed={speed}
      key='board2'
      style={{ opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
      <h3 style={{
        color,
        fontFamily,
        textShadow: '2px 2px 5px #ffffff',
        width: '220px',
        fontSize,
        textAlign: 'center'
      }}>
        {`With Carmel you will be able create websites, mobile apps and more. I'm going to show you how. Oh, and no previous experience is necessary. Easy peasy.`}
        <br />
        <br />
        {`Hey, wanna create a website right now? `}
      </h3>
    </Parallax.Layer>]
  }

  chunkyHead(offset, speed) {
    return [<Parallax.Layer key='chunkyHead' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <img src={`../../../../assets/chunky-logo.gif`} style={{ display: 'block', width: '250px', marginTop: '-40px' }} />
    </Parallax.Layer>]
  }

  action(offset, speed) {
    return [<Parallax.Layer
      offset={offset}
      speed={speed}
      key='action'
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
      }
      }>
      <div>
        <Button
          theme='secondary-bg text-primary-on-secondary'
          style={{ marginBottom: '40px' }}
          raised
          onClick={this._onContinue}>
          <ButtonIcon use='done' />
          {`Download the studio`}
        </Button>
      </div>
    </Parallax.Layer >]
  }

  render() {
    return [
      ...this.top(this.props.offset, 0.5),
      ...this.board(this.props.offset, 0.4),
      ...this.chunkyHead(this.props.offset, 0.5),
      ...this.action(this.props.offset, 0.5)
    ]
  }
}

const fontFamily = "'Indie Flower', cursive"
