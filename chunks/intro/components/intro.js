import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import Typist from 'react-typist'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from '@rmwc/typography'
import { Icon } from '@rmwc/icon';
import ReactPlayer from 'react-player'

import 'antd/dist/antd.css';

import baffle from 'baffle'

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
  }

  componentDidMount () {
    super.componentDidMount()

    let b = baffle('.title', {
      characters: `<<▒ █▓▓▓▓ █<░█░ ▒<█ >▓░<▓ █▓█▓ ▓█▓ >░█< /▓▒/>>||\\`,
      speed: 75
    })

    b.reveal(5000)
  }

  main() {
    const video = `assets/background.mp4`

    return <div style={{
      height: "100vh",
      width: "100vw",
      position: "relative",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <video loop="true" autoplay="autoplay" muted
      style={{
        objectFit: "cover",
        height: "100vh",
        width: "100vw",
        overflow: "hidden"
      }}>
      <source src={video} type="video/mp4" />
      </video>
      <div style={{
        background: "rgba(0,0,0,0.7)",
       position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
         display: "flex",
         alignItems: "center",
         flexDirection: "column",
         justifyContent: "center"
      }}>
      <div style={{
        width: "80vw",
        flex: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
      }}>
        {this.title()}
        {this.subtitle()}
        </div>
      </div>
    </div>
  }

  title() {
    return <Typography use='headline4' className="title" style={{
      textAlign: 'center',
      color: '#fafafa',
      padding: "20px"
    }}>
    The Fastest Way To Become A Coder.
    </Typography>

  }

  subtitle() {
    const color = '#FAFAFA'
    const fontSize = this.props.isSmallScreen? 15: 26

    return <Typist cursor={{ show: false }} style={{
      padding: "20px",
    }}>
        <Typist.Delay ms={5000} />
        <Typography use='headline5' style={{
          textAlign: 'center',
          color: '#fafafa'
        }}>
        Carmel is the leading <strong> Tech Education Blockchain Platform </strong>,
        with a powerful <strong> Working Product</strong>, a unique <strong> Educational Model </strong>
        and a growing <strong> User Community </strong> of <strong> 50,000+ </strong>
      </Typography>
        <Typist.Delay ms={1000} />
        <h3 key='4' style={{ color: '#602f15', marginTop: "20px", textAlign: 'center' }}>
          <Button
            raised
            style={{ marginTop: '10px', backgroundColor: "#00bcd4" }}
            onClick={this._onStart}>
            <ButtonIcon icon='check_circle' />
              Early Token Sale
          </Button>
        </h3>
    </Typist>
  }

  icons() {
    return [<div style={{ opacity: 1.2, display: 'flex', justifyContent: 'flex-end', paddingRight: 100, paddingBottom: 30 }}>
      <Components.SocialIcons iconColor={'#B2EBF2'} iconColorHover={'#00ACC1'} isSmallScreen={this.props.isSmallScreen} socialMediaLinks={socialMediaLinks}/>
    </div>]
  }

  render () {
    return [
      ...this.main()
    ]
  }
}

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
