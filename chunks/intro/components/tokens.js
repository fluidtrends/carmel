import React from 'react'
import { Component } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import Typist from 'react-typist'
import { Button, ButtonIcon } from 'rmwc/Button'
import Checkout from '../../tokens/components/checkout'

export default class Challenges extends Component {
  constructor(props) {
    super(props)

    this.state = { speaking: true }
    this._onContinue = this.onContinue.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    setTimeout(() => this.setState({ speaking: false }), 13000)
  }

  componentWillUnmount() {
  }

  onContinue() {
    this.props.onContinue && this.props.onContinue()
  }

  sky(offset, speed) {
    return [<Parallax.Layer key='sky' offset={offset} speed={speed} style={{ opacity: 1 }}>
      <img src={'../../../../assets/background-farm.r.png'} style={{ display: 'block', width: '100%', margin: '0', height: '100vh', overflow: 'hidden' }} />
    </Parallax.Layer>]
  }

  clouds(offset, speed) {
    return [<Parallax.Layer key='clouds' offset={offset} speed={speed} style={{ opacity: 1 }}>
      <img src={'../../../../assets/clouds.png'} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
    </Parallax.Layer>,
    <Parallax.Layer key='clouds2' offset={offset} speed={speed} style={{ opacity: 1.0 }}>
      <img src={'../../../../assets/clouds.png'} style={{ display: 'block', width: '15%', marginLeft: '70%' }} />
    </Parallax.Layer>]
  }

  movingClouds(offset, speed) {
    return [<Parallax.Layer key='movingClouds' offset={offset} speed={speed} style={{ opacity: 1 }}>
      <img src={'../../../../assets/cloud1.png'} style={{
        display: 'block',
        width: '30%',
        marginLeft: `50px`
      }} />
      <img src={'../../../../assets/cloud1.png'} style={{
        display: 'block',
        marginTop: '30px',
        width: '20%',
        marginLeft: `100px`
      }} />
    </Parallax.Layer>]
  }

  title(offset, speed) {
    const fontSize = 18
    const width = 600
    const color = '#FAFAFA'

    return [<Parallax.Layer offset={offset} speed={speed} style={{ opacity: 1.2, display: 'flex', flex: 1, justifyContent: 'center' }}>
      <h1 key='title' style={{
        color,
        textAlign: 'center',
        fontSize: `${fontSize + 30}px`,
        textShadow: '2px 2px 5px #607D8B',
        width
      }}>
        Join The Presale
      </h1>
    </Parallax.Layer>]
  }


  panel(offset, speed) {
    const fontSize = 18
    const textWidth = 420
    const actionText = 'Start Your Learning Journey'
    const textPadding = 60
    const color = '#4E342E'

    return [<Parallax.Layer key='panel' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Checkout
        newTransaction={this.props.newTransaction}
        account={this.props.account}
        triggerRawRedirect={this.props.triggerRawRedirect}
        transaction={this.props.transaction}
        isSmallScreen={this.props.isSmallScreen}
      />
    </Parallax.Layer>]
  }

  ico(offset, speed) {
    return [<Parallax.Layer key='chunky' offset={offset} speed={speed} style={{
      opacity: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start'
    }}>
      <img src={`../../../../assets/hero_05.png`} style={{ display: 'block' }} />
    </Parallax.Layer>]
  }

  render() {
    return [
      ...this.title(this.props.offset + 0.1, 0.8),
      ...this.panel(this.props.offset, 0.8)
    ]
  }
}

const fontFamilyHeader = "'Merienda', cursive"
const fontFamily = "'Indie Flower', cursive"
const speech = [
  `Hey there, welcome to Carmel!`,
  `I know the tech world can seem like Everest sometimes`,
  `but not to worry, we'll help you climb it.`
]
