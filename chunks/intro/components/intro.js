import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import Typist from 'react-typist'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Icon } from "antd"
import 'antd/dist/antd.css';

import baffle from 'baffle'

const introVideo = 'https://www.youtube.com/watch?v=qrHBVDbrOOY'

const socialMediaLinks = {
  facebook: 'https://www.facebook.com/carmelio-347131802460343/',
  medium: 'http://medium.com/carmelplatform',
  instagram: 'https://www.instagram.com/carmel.io/',
  github: 'https://github.com/fluidtrends/carmel',
  youtube: 'https://www.youtube.com/channel/UCjiQXohOk0pBmJ6PFElQL-g',
  twitter: 'https://twitter.com/carmelplatform',
  linkedin: 'https://www.linkedin.com/company/carmel-platform/'
}

export default class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = { speaking: true }
    this._onStart = this.onStart.bind(this)
    this._onContinue = this.onContinue.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    let b = baffle('h1', {
      characters: `<<▒ █▓▓▓▓ █<░█░ ▒<█ >▓░<▓ █▓█▓ ▓█▓ >░█< /▓▒/>>||\\`,
      speed: 75
  })

    b.reveal(5000)


  }

  componentWillUnmount () {
  }

  onContinue () {
    this.props.onContinue && this.props.onContinue()
  }

  onStart () {
    this.props.onStart && this.props.onStart()
  }

  timer() {
    const periods = [
      {
        until: '22 October 2018 00:00:00 PDT',
        text: 'Pre Sale Live Now!',
        info: 'Bonus For Every Purchase',
        actionTitle: 'Join the Presale',
        onAction: this._onContinue
      }
    ]

    if( this.props.isSmallScreen ) {
      return <div />
    }

    return [<div key='timer' style={{ marginTop: 150 }}>
      <Components.Timer periods={periods} simple={true} />
    </div>]
  }

  sky() {
    return [<div key='sky' style={styles.colorful}>
    </div>]
  }

  main() {
    return <div className="wharever" style={styles.colorful}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {this.title()}
        {this.subtitle()}
      </div>
      {this.icons()}
      {}
    </div>
  }

  title() {
    const color = '#FAFAFA'
    const fontSize = this.props.isSmallScreen? 25: 55

    return [<div >
      <h1 
        key="title"
        id="title" 
        style={{
          color,
          fontSize: `${fontSize + fontSize}px`
        }}
      >
        Welcome to Carmel
      </h1>
    </div>]
  }

  subtitle() {
    const color = '#FAFAFA'
    const fontSize = this.props.isSmallScreen? 15: 26

    return <Typist cursor={{ show: false }} style={{}}>
        <Typist.Delay ms={5000} />
        <h2 key='subtitle' id="bleah" style={{
          color,
          textAlign: 'center',
          fontSize: `${fontSize + 10}px`
        }}>
          {intro}
        </h2>
        <Typist.Delay ms={500} />
        <h3 key='2' style={{
          color,
          textAlign: 'center',
          fontSize: `${fontSize}px`,
          marginRight: 10,
        }}>
          100% Owned by the Community. Accesible to Everyone. Unique Educational Model.
        </h3>
        <Typist.Delay ms={500} />
        <h3 key='4' style={{ color: '#602f15', textAlign: 'center' }}>
          <Button
            raised
            theme='secondary-bg text-primary-on-secondary'
            style={{ marginTop: '10px' }}
            onClick={this._onStart}>
            <ButtonIcon icon='done' />
              Start Your Journey Now
          </Button>
        </h3>
    </Typist>
  }

  icons() {
    return [<div style={{ opacity: 1.2, display: 'flex', justifyContent: 'flex-end', paddingRight: 100, paddingBottom: 30 }}>
      <Components.SocialIcons isSmallScreen={this.props.isSmallScreen} socialMediaLinks={socialMediaLinks}/>
    </div>]
  }

  render () {
    return [
      ...this.main()
    ]
  }
}

const intro = 'The First EOS Based Tech Education Platform'

const styles = {
  colorful: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background:
      `-webkit-linear-gradient(315deg, hsla(182.08, 49%, 12.11%, 1) 2%, hsla(182.08, 49%, 12.11%, 0) 90%),
      -webkit-linear-gradient(297deg, hsla(183.4, 60.89%, 51.26%, 1) 83%, hsla(183.4, 60.89%, 51.26%, 0) 16%)`,
    background:
      `linear-gradient(135deg, hsla(182.08, 49%, 12.11%, 1) 2%, hsla(182.08, 49%, 12.11%, 0) 90%),
      linear-gradient(153deg, hsla(183.4, 60.89%, 51.26%, 1) 83%, hsla(183.4, 60.89%, 51.26%, 0) 16%)`
  }

}
