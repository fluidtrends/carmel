import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import Typist from 'react-typist'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from '@rmwc/typography'
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
    return <div className="wharever" style={styles.colorful}>
      <div style={{
        display: 'flex',
        flex: 1,
        maxWidth: "70vw",
        alignSelf: "center",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center' }}>
        {this.title()}
        {this.subtitle()}
        </div>
        {this.icons()}
    </div>
  }

  title() {
    return <Typography use='headline3' className="title" style={{
      textAlign: 'center',
      color: '#fafafa',
      padding: '20px'
    }}>
    The Natural Way To Learn Coding.
    </Typography>

  }

  subtitle() {
    const color = '#FAFAFA'
    const fontSize = this.props.isSmallScreen? 15: 26

    return <Typist cursor={{ show: false }} style={{}}>
        <Typist.Delay ms={5000} />
        <Typography use='headline5' style={{
          textAlign: 'center',
          color: '#fafafa'
        }}>
        Carmel is the leading Tech Education Blockchain Platform.
        Built on the EOS Protocol, with a powerful working product and a growing community of 50,000+ early adopters.
      </Typography>
        <Typist.Delay ms={1000} />
        <h3 key='4' style={{ color: '#602f15', marginTop: "20px", textAlign: 'center' }}>
          <Button
            raised
            style={{ marginTop: '10px', backgroundColor: "#00bcd4" }}
            onClick={this._onStart}>
            <ButtonIcon icon='done' />
              Get Your Carmel Tokens Now
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
