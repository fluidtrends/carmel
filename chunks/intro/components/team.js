import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import Typist from 'react-typist'
import { Button, ButtonIcon } from 'rmwc/Button'

import teamData from '../data/team'

export default class Challenges extends Component {
  constructor(props) {
    super(props)

    this.state = { speaking: true }
    this._showTeam = this.showTeam.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    setTimeout(() => this.setState({ speaking: false }), 13000)
  }

  componentWillUnmount() {
  }

  showTeam() {
    this.props.showTeam && this.props.showTeam()
  }

  sky(offset, speed) {
    return [<Parallax.Layer key='sky' offset={offset} speed={speed} style={{ opacity: 0.5 }}>
      <img src={'../../../../assets/background-stars.png'} style={{ display: 'block', width: '130%', margin: '0', height: '120vh', overflow: 'hidden' }} />
    </Parallax.Layer>]
  }

  more(offset, speed) {
    return [<Parallax.Layer key='more' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', flex: 1, justifyContent: 'center', marginTop: 120 }}>
      <Button
        theme='secondary-bg text-primary-on-secondary'
        raised
        onClick={this._showTeam}
      >
        See the rest of the team
      </Button>
    </Parallax.Layer>]
  }

  title(offset, speed) {
    const fontSize = 18
    const textWidth = 420
    const color = '#FAFAFA'

    return [<Parallax.Layer offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', flex: 1, justifyContent: 'center' }}>
      <h1 key='title'
        style={{
          color,
          textAlign: 'center',
          fontSize: `${fontSize + 30}px`,
          textShadow: '2px 2px 5px #607D8B',
          padding: '60px 0',
          width: `${textWidth}px`
        }}>
        {actionText}
      </h1>
    </Parallax.Layer>]
  }

  team(offset, speed) {
    const fontSize = 18
    const textWidth = 420
    const color = '#FAFAFA'


    return [<Parallax.Layer offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', flex: 1, justifyContent: 'center', xheight: '100vh', xoverflow: 'hidden' }}>
      <Components.Team {...teamData} small={true} />
    </Parallax.Layer>]
  }

  render() {
    return [
      ...this.sky(this.props.offset, 0),
      ...this.title(this.props.offset, 0),
      ...this.team(this.props.offset + 0.14, 0)
    ]
  }
}

const fontFamilyHeader = "'Merienda', cursive"
const fontFamily = "'Indie Flower', cursive"
const actionText = 'Meet the team'

