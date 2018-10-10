import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import Typist from 'react-typist'
import { Button, ButtonIcon } from '@rmwc/button'
import { Icon, Progress } from 'antd'
import 'antd/dist/antd.css'

import Steemit from '../../tokens/components/steemit'
import Telegram from '../../tokens/components/telegram'

import YouTube from 'react-youtube'

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

export default class Welcome extends Component {
  constructor (props) {
    super(props)

    this.state = { speaking: true }
    this._onStart = this.onStart.bind(this)
    this._onContinue = this.onContinue.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
    setTimeout(() => this.setState({ speaking: false }), 13000)
  }

  componentWillUnmount () {
  }

  onContinue () {
    this.props.onContinue && this.props.onContinue()
  }

  onStart () {
    this.props.onStart && this.props.onStart()
  }

  timer (offset, speed) {
    const periods = [
      {
        until: '22 October 2018 00:00:00 PDT',
        text: 'Pre Sale Live Now!',
        info: 'Bonus For Every Purchase',
        actionTitle: 'Join the Presale',
        onAction: this._onContinue
      }
    ]

    return [<div key='timer' offset={offset} speed={speed} style={{ marginTop: 150 }}>
      <Components.Timer periods={periods} simple />
    </div>]
  }

  sky (offset, speed) {
    return [<div key='sky' offset={offset} speed={speed} style={styles.colorful} />]
  }

  main (offset, speed) {
    return <div offset={offset} className='wharever' speed={speed} style={styles.colorful}>
      <div style={{ opacity: 1.2, display: 'flex', flex: 2, justifyContent: 'space-between', padding: '100px 0 0 40px' }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          {this.title()}
          {this.subtitle()}
          {this.timer()}
          {/* {this.distribution()} */}
          {/* {this.status()} */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, xjustifyContent: 'center', alignItems: 'center' }}>
          {this.video(this.props.offset + 0.29, 0.2)}
          {this.videoTitle(this.props.offset + 0.29, 0.2)}
        </div>
      </div>
      {this.icons()}
      {}
    </div>
  }

  title (offset, speed) {
    const fontSize = 18
    const color = '#FAFAFA'

    return [<div offset={offset} speed={speed} >
      <h1 key='title' style={{
        color,
        fontSize: `${fontSize + 55}px`,
        textShadow: '2px 2px 5px #607D8B'
      }}>
        Welcome to Carmel
        </h1>
    </div>]
  }

  status (offset, speed) {
    const fontSize = 18
    const textWidth = 420
    const color = '#FAFAFA'

    return [<div offset={offset} speed={speed} xstyle={{ opacity: 1.2 }}>
      <Progress percent={30} strokeWidth={50} strokeColor='#66bb6a' style={{ width: 500 }} />
    </div>]
  }

  videoTitle (offset, speed) {
    const fontSize = 18
    const textWidth = 420
    const color = '#fff'

    return [<div offset={offset} speed={speed} xstyle={{ opacity: 1.2 }}>
      <h1 key='title' style={{
        color,
        textAlign: 'center',
        fontSize: `${fontSize + 30}px`,
        textShadow: '2px 2px 5px #607D8B',
        width: `${textWidth}px`
      }}>
        Get to know Carmel
        </h1>
    </div>]
  }

  subtitle (offset, speed) {
    const fontSize = 18
    const color = '#FAFAFA'

    return [<div offset={offset} speed={speed} style={{ opacity: 1 }}>
      <h3 key='subtitle' style={{
        color,
        textAlign: 'center',
        textShadow: '2px 2px 5px #607D8B',
        fontSize: `${fontSize + 20}px`
      }}>
        {intro}
      </h3>
    </div>]
  }

  distribution (offset, speed) {
    const fontSize = 18
    const color = '#FAFAFA'

    return [<div offset={offset} speed={speed} style={{ opacity: 1, marginTop: 50 }}>
      <h3 key='subtitle' style={{
        color,
        textAlign: 'center',
        textShadow: '2px 2px 5px #607D8B',
        fontSize: `${fontSize + 10}px`
      }}>
        {distributedTokens}
      </h3>
    </div>]
  }

  video (offset, speed) {
    const fontSize = 18
    const textWidth = 420
    const color = '#FAFAFA'

    return [<div offset={offset} speed={speed} style={{ marginTop: 75, width: 850, height: 500, xborder: '1px solid #263238' }}>

      <Components.Media video='https://www.youtube.com/watch?v=qrHBVDbrOOY' width={850} height={500} xstyle={{ border: '1px solid red' }} />
    </div>]
  }

  icons (offset, speed) {
    const fontSize = 18
    const textWidth = 420
    const color = '#FAFAFA'

    return [<div offset={offset} speed={speed} style={{ opacity: 1.2, display: 'flex', justifyContent: 'flex-end', paddingRight: 75, paddingBottom: 20 }}>
      {this.renderIcons()}
    </div>]
  }

  goto (url) {
    window.open(socialMediaLinks[url], '_blank')
  }

  renderIcons () {
    const socialNetworks = [
      'twitter',
      'youtube',
      'github',
      'linkedin',
      'facebook',
      'medium',
      'instagram'
    ]

    const align = this.props.isSmallScreen ? 'center' : 'center'
    const { social } = this.props
    const overflow = this.props.isSmallScreen ? 'auto' : 'unset'

    return <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: align, overflow }}>
      {socialNetworks.map(key => {
        return <div>
          <Icon
            key={key}
            theme='twoTone'
            type={key}
            twoToneColor='#00bcd4'
            className='icon'
            onClick={this.goto.bind(this, key)}
            style={{
              cursor: 'pointer',
              fontSize: 36,
              padding: '10px'
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

  render () {
    // const smallScreenLayout = [...this.sky(this.props.offset, 0),
    // ...this.title(this.props.offset + 0.1, 0.2),
    // ...this.timer(this.props.offset + 0.29, 0.2)]
    return [
      ...this.main()]
  }
}

const fontFamilyHeader = "'Merienda', cursive"
const fontFamily = "'Indie Flower', cursive"
const longSpeech = [
  `Hey there, I'm Chunky, your personal mentor!`,
  `I know the tech world can seem like Everest sometimes`,
  `but not to worry, I'll help you climb it.`
]
const shortSpeech = [
  `Hey there, welcome to Carmel!`
]
const intro = 'The First EOS Based Tech Education Platform'
const distributedTokens = 'Tokens Distributed So Far:'

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
