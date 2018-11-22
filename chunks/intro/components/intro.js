import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import Typist from 'react-typist'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from '@rmwc/typography'
import { Icon } from '@rmwc/icon';
import ReactPlayer from 'react-player'
import moment from 'moment'

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

    this._onStart = this.onStart.bind(this)
  }

  onStart() {
    this.props.onStart()
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
    Disrupting The Industry That Is Disrupting The World
    </Typography>

  }

  subtitle() {
    const color = '#FAFAFA'
    const fontSize = this.props.isSmallScreen? 15: 26
    const days = moment('17 Dec 2018').diff(moment(), 'days')

    return <Typist cursor={{ show: false }} avgTypingDelay={25} style={{
      padding: "20px",
    }}>
        <Typist.Delay ms={5000} />
        <Typography use='headline5' style={{
          textAlign: 'center',
          color: '#fafafa'
        }}>
        Carmel is an Education-Driven Tech Marketplace that is redefining the entire Software Development lifecycle
        and brings together <strong> Learners</strong>,
        <strong> Developers</strong>, <strong> Teachers</strong>, <strong> Entrepreneurs</strong>,
        <strong> Managers</strong> and <strong> Recruiters</strong>
      </Typography>
        <Typist.Delay ms={1000} />
        <h3 key='4' style={{ color: '#602f15', marginTop: "20px", textAlign: 'center' }}>
          <Button
            raised
            theme='secondary-bg text-primary-on-secondary'
            style={{ marginTop: '30px' }}
            onClick={this.props.onStart}>
            <ButtonIcon icon='check_circle' />
              Become An Early Adopter
          </Button>
        </h3>
        <Typography use='headline7' style={{
          textAlign: 'center',
          color: '#fafafa'
        }}>
      </Typography>
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
