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

  componentDidMount() {
    super.componentDidMount()

    let b = baffle('h1', {
      characters: `<<▒ █▓▓▓▓ █<░█░ ▒<█ >▓░<▓ █▓█▓ ▓█▓ >░█< /▓▒/>>||||\\\\\\\\\\`,
      speed: 75
  })

    b.reveal(5000)


  }

  componentWillUnmount() {
  }

  onContinue() {
    this.props.onContinue && this.props.onContinue()
  }

  onStart() {
    this.props.onStart && this.props.onStart()
  }

  timer() {
    const periods = [
      {
        until: "22 October 2018 00:00:00 PDT",
        text: "Pre Sale Live Now!",
        info: "Bonus For Every Purchase",
        actionTitle: "Join the Presale",
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

    const padding = this.props.isSmallScreen? '0 20px' : '100px 0 0 40px'

    return <div className="wharever" style={styles.colorful}>
      <div style={{ opacity: 1.2, display: 'flex', flex: 2, justifyContent: 'center', padding }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {this.title()}
          {this.subtitle()}
        </div>
        {this.video()}
      </div>
      {this.icons()}
      {}
    </div>
  }

  title() {
    const fontSize = 18
    const color = '#FAFAFA'

    return [<div >
      <h1 
        key="title"
        id="title" 
        style={{
          color,
          fontSize: `${fontSize + 55}px`,
          textShadow: '2px 2px 5px #607D8B'
        }}
      >
        Welcome to Carmel
      </h1>
    </div>]
  }

  videoTitle() {
    const fontSize = 18
    const textWidth = 420
    const color = '#fff'


    if( this.props.isSmallScreen ) {
      return <div />
    }


    return [<div xstyle={{ opacity: 1.2 }}>
      <h2 key='title' style={{
        color,
        textAlign: 'center',
        fontSize: `${fontSize + 30}px`,
        textShadow: '2px 2px 5px #607D8B',
        width: `${textWidth}px`
      }}>
        Get to know Carmel
        </h2>
    </div>]
  }

  subtitle() {
    const fontSize = 26
    const color = '#FAFAFA'

    return <Typist cursor={{ show: false }} style={{}}>
        <Typist.Delay ms={5000} />
        <h2 key='subtitle' id="bleah" style={{
          color,
          textAlign: 'center',
          textShadow: '2px 2px 5px #607D8B',
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
        <h3 key='4' style={{ color: '#602f15', textAlign: 'center', textShadow: '2px 2px 5px #ffffff' }}>
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

  distribution() {
    const fontSize = 18
    const color = '#FAFAFA'

    return [<div style={{ opacity: 1, marginTop: 50 }}>
      <h3 key='subtitle' style={{
        color,
        textAlign: 'center',
        textShadow: '2px 2px 5px #607D8B',
        fontSize: `${fontSize + 10}px`,
      }}>
        {distributedTokens}
      </h3>
    </div>]
  }

  video() {
    const fontSize = 18
    const textWidth = 420
    const color = '#FAFAFA'

    if( this.props.isSmallScreen ) {
      return <div />
    }

    return <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginTop: 75, width: 650, height: 350}}>
          <Components.Media video={introVideo} width={650} height={350}/>
      </div>
      {this.videoTitle()}
    </div>
  }

  icons() {
    const fontSize = 18
    const textWidth = 420
    const color = '#FAFAFA'

    return [<div style={{ opacity: 1.2, display: 'flex', justifyContent: 'flex-end', paddingRight: 100, paddingBottom: 20 }}>
      {this.renderIcons()}
    </div>]
  }

  goto(url) {
    window.open(socialMediaLinks[url], '_blank')
  }

  renderIcons() {
    const socialNetworks = [
      "twitter",
      "youtube",
      "github",
      "linkedin",
      "facebook",
      "medium",
      "instagram"
    ]

    const align = this.props.isSmallScreen ? 'center' : 'center'
    const { social } = this.props
    const overflow = this.props.isSmallScreen ? 'auto' : 'unset'

    return <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: align, overflow }}>
      {socialNetworks.map(key => {
        return <div>
          <Icon
            key={key}
            theme="twoTone"
            type={key}
            twoToneColor="#00bcd4"
            className="icon"
            onClick={this.goto.bind(this, key)}
            style={{
              cursor: "pointer",
              fontSize: 36,
              padding: "10px"
            }} />
          <style jsx>{`
              div :global(.icon) {
              }
              div :global(.icon):hover {  
                color: ${'#00bcd4'}
              }
            `}</style>
        </div>
      })}
    </ div>
  }

  render() {
    // const smallScreenLayout = [...this.sky(this.props.offset, 0),
    // ...this.title(this.props.offset + 0.1, 0.2),
    // ...this.timer(this.props.offset + 0.29, 0.2)]
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