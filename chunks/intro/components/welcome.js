import React from 'react'
import { Component } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import Typist from 'react-typist'
import { Button, ButtonIcon } from 'rmwc/Button'

export default class Welcome extends Component {
  constructor(props) {
    super(props)

    this.state = { speaking: true }
    this._onStart = this.onStart.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    setTimeout(() => this.setState({ speaking: false }), 13000)
  }

  componentWillUnmount() {
  }

  onStart() {
    this.props.onStart && this.props.onStart()
  }

  sky(offset, speed) {
    return [<Parallax.Layer key='sky' offset={offset} speed={speed} style={{ opacity: 1 }}>
      <img src={'../../../../assets/bgtop.png'} style={{ display: 'block', width: '100%', margin: '0' }} />
    </Parallax.Layer>]
  }

  stars(offset, speed) {
    return [<Parallax.Layer key='stars' offset={offset} speed={speed} style={{ opacity: 0.2 }}>
      <img src={'../../../../assets/stars.png'} style={{
        display: 'block',
        width: '100%',
        margin: '0'
      }} />
      <img src={'../../../../assets/stars.png'} style={{
        display: 'block',
        width: '100%',
        margin: '0'
      }} />
      <img src={'../../../../assets/stars.png'} style={{
        display: 'block',
        width: '100%',
        margin: '0'
      }} />
    </Parallax.Layer>]
  }

  clouds(offset, speed) {
    return [<Parallax.Layer key='clouds' offset={offset} speed={speed} style={{ opacity: 1.0 }}>
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

  mountains(offset, speed) {
    return [<Parallax.Layer key='mountains' offset={offset} speed={speed} style={{ opacity: 0.8 }}>
      <img src={'../../../../assets/mountains.png'} style={{ display: 'block', width: '100%', margin: '0' }} />
    </Parallax.Layer>]
  }

  hills(offset, speed) {
    return [<Parallax.Layer key='hills' offset={offset} speed={speed} style={{ opacity: 1 }}>
      <img src={'../../../../assets/hills.png'} style={{ display: 'block', width: '100%', margin: '0' }} />
    </Parallax.Layer>]
  }

  ground(offset, speed) {
    return [<Parallax.Layer key='ground' offset={offset} speed={speed} style={{ opacity: 1 }}>
      <img src={'../../../../assets/ground.png'} style={{ display: 'block', width: '100%', margin: '0' }} />
    </Parallax.Layer>]
  }

  grass(offset, speed) {
    return [<Parallax.Layer key='grass' offset={offset} speed={speed} style={{ opacity: 1 }}>
      <img src={'../../../../assets/grass.png'} style={{ display: 'block', width: '100%', margin: '0' }} />
    </Parallax.Layer>]
  }

  front(offset, speed) {
    return [<Parallax.Layer key='front' offset={offset} speed={speed} style={{ opacity: 1 }}>
      <img src={'../../../../assets/front.png'} style={{ display: 'block', width: '100%', margin: '0' }} />
    </Parallax.Layer>]
  }

  bar(offset, speed) {
    return [<Parallax.Layer key='bar' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <img src={'../../../../assets/bar.png'} style={{ display: 'block', height: '80px', margin: '0' }} />
    </Parallax.Layer>,
    <Parallax.Layer
      offset={offset}
      speed={offset}
      key='bar2'
      style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <h1 style={{
        color: '#FFEB3B',
        height: '60px',
        fontSize: '35px',
        marginTop: '0px',
        textShadow: '2px 2px 5px #3E2723',
        textAlign: 'center',
        fontFamily: fontFamilyHeader
      }}>
        Welcome to Carmel
        </h1>
    </Parallax.Layer>]
  }

  rocks(offset, speed) {
    return [<Parallax.Layer key='rocks' offset={offset} speed={speed} style={{ opacity: 1 }}>
      <img src={'../../../../assets/rocks.png'} style={{ display: 'block', width: '100%', margin: '0' }} />
    </Parallax.Layer>]
  }

  panel(offset, speed) {
    const fontSize = 18
    const textWidth = 420
    const actionText = 'Start Your Learning Journey'
    const textPadding = 60
    const color = '#4E342E'

    return [<Parallax.Layer key='panel' offset={offset} speed={speed} style={{ opacity: 0.8, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <img src={`../../../../assets/panel.png`} style={{ display: 'block', width: '75%', height: '280px' }} />
    </Parallax.Layer>,
    <Parallax.Layer
      offset={offset}
      key='panel2'
      speed={speed}
      style={{
        opacity: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: `${textPadding}px`
      }}>

      <Typist cursor={{ show: false }} style={{}}>
        <h3 key='1' style={{
          color,
          textAlign: 'left',
          fontSize: `${fontSize + 4}px`,
          textShadow: '2px 2px 5px #ffffff',
          fontFamily,
          width: `${textWidth}px`
        }}>
          {speech[0]}
        </h3>
        <Typist.Delay ms={500} />
        <h3 key='2' style={{
          color,
          textAlign: 'left',
          fontSize: `${fontSize}px`,
          fontFamily,
          textShadow: '2px 2px 5px #ffffff'
        }}>
          {speech[1]}
        </h3>
        <h3 key='3' style={{
          color,
          fontSize: `${fontSize}px`,
          textShadow: '2px 2px 5px #ffffff',
          fontFamily,
          textAlign: 'left'
        }}>
          {speech[2]}
        </h3>
        <Typist.Delay ms={500} />
        <h3 key='4' style={{ color: '#602f15', textAlign: 'center', textShadow: '2px 2px 5px #ffffff' }}>
          <Button
            raised
            theme='secondary-bg text-primary-on-secondary'
            style={{ marginTop: '10px' }}
            onClick={this._onStart}>
            <ButtonIcon icon='done' />
            {actionText}
          </Button>
        </h3>
      </Typist>
    </Parallax.Layer>]
  }

  chunky(offset, speed) {
    return [<Parallax.Layer key='chunky' offset={offset} speed={speed} style={{
      opacity: 1, display: 'flex', width: '220px', alignItems: 'flex-end', justifyContent: 'flex-start'
    }}>
      <img src={`../../../../assets/chunky${this.state.speaking ? '-speaking.gif' : '.png'}`} style={{ display: 'block', width: '220px' }} />
    </Parallax.Layer>]
  }

  render() {
    return [...this.sky(this.props.offset, 0),
    ...this.stars(this.props.offset, 0.1),
    ...this.clouds(this.props.offset + 0.05, 0.3),
    ...this.mountains(this.props.offset + 0.3, 0.2),
    ...this.hills(this.props.offset + 0.45, 0.5),
    ...this.movingClouds(this.props.offset + 0.25, 0.4),
    ...this.bar(this.props.offset, 0.1),
    ...this.ground(this.props.offset + 0.5, 0.6),
    ...this.grass(this.props.offset + 0.35, 0.7),
    ...this.front(this.props.offset + 0.87, 0.8),
    ...this.panel(this.props.offset, 0.8),
    ...this.chunky(this.props.offset, 0.8)]
  }
}

const fontFamilyHeader = "'Merienda', cursive"
const fontFamily = "'Indie Flower', cursive"
const speech = [
  `Hey there, I'm Chunky, the code monkey.`,
  `I know the tech world can seem like a confusing jungle`,
  `but not to worry, just follow me and I'll guide you through.`
]
