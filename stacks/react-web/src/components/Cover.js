import React, { PureComponent } from 'react'
import Component from '../Component'
import Media from './Media'
import { Button } from '@rmwc/button'
import { Typography } from '@rmwc/typography'
// import { Data } from '@carmel/react-stack'

export default class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strings: null,
      selectedLanguage: null
    }
  }

  componentDidMount() {
    super.componentDidMount()
     
     if (this.props.theme && this.props.theme.translatedStrings) {
       this.getTranslations().then((strings) => {
         this.getLanguage().then((selectedLanguage) => {
            this.setState({ selectedLanguage, strings })
        })
       })      
      return
     }

    this.getLanguage().then((selectedLanguage) => {
      selectedLanguage && this.setState({ selectedLanguage })
    })  
  }

  getTranslations() {
    return new Promise((resolve, reject) => {
      fetch(this.props.theme.translatedStrings)
        .then(response => response.json())
        .then(translatedTexts => {
          resolve(translatedTexts[this.props.translationKey])
        })
        .catch(() => resolve())
    })
  }

  getLanguage() {
    return new Promise((resolve, reject) => {
      Data.Cache.retrieveCachedItem('selectedLanguage').then(selectedLanguage => {
        resolve(selectedLanguage)
      })
      .catch(() => {
        resolve()
      })
    })
  }

  renderDefaultContent() {
    if (this.props.video) {
      return <div />
    }

    return (
      <div
        style={{
          position: 'absolute',
          backgroundColor: `rgba(0,0,0,${this.props.opacity})`,
          width: '100vw',
          height: '100%',
          top: 0,
          left: 0,
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        {this.renderCoverTitle()}
        {this.renderCoverSubtitle()}
        {this.renderCoverAction()}
      </div>
    )
  }

  renderSectionContent() {
    if (this.props.video) {
      return <div />
    }

    return (
      <div
        style={{
          position: 'absolute',
          backgroundColor: `rgba(0,0,0,${this.props.opacity})`,
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        {this.renderCoverTitle()}
        {this.renderCoverSubtitle()}
        {this.renderCoverAction()}
      </div>
    )
  }

  onLinkClick(url) {
    window.open(url, '_blank')
  }
  
  renderCoverTitle() {
    if (!this.props.title) {
      return <div />
    }

    const titleAdditionalStyle = this.props.titleStyle
      ? this.props.titleStyle
      : {}

    const translatedTitle =
      this.props.translation &&
      this.state.strings &&
      this.state.selectedLanguage
        ? this.state.strings[this.state.selectedLanguage].title
        : this.props.title
    return (
      <Typography
        use="headline4"
        style={{
          margin: '20px',
          color: this.props.color,
          ...titleAdditionalStyle
        }}
      >
        {' '}
        {translatedTitle}
      </Typography>
    )
  }

  renderCoverSubtitle() {
    if (!this.props.subtitle) {
      return <div />
    }

    const subtitleAdditionalStyle = this.props.subtitleStyle
      ? this.props.subtitleStyle
      : {}

    const translatedSubtitle =
      this.props.translation &&
      this.state.strings &&
      this.state.selectedLanguage
        ? this.state.strings[this.state.selectedLanguage].subtitle
        : this.props.subtitle

    return (
      <Typography
        use="headline5"
        style={{
          margin: '20px',
          color: this.props.color,
          ...subtitleAdditionalStyle
        }}
      >
        {' '}
        {translatedSubtitle}{' '}
      </Typography>
    )
  }

  renderLogos() {
    return <div style={{ position: 'absolute', left: '5%', top: '55%' }} />
  }

  renderVideo() {
    if (this.props.isSmallScreen) {
      return <div />
    }

    const backgroundColor = '#00ACC1',
      textColor = '#ffffff'

    return (
      <div
        style={{ padding: 20, width: 450, height: 300, position: 'relative' }}
      >
        <Media
          video={this.props.introVideo}
          width={450}
          height={300}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    )
  }

  renderCoverAction() {
    if (!this.props.primaryActionTitle) {
      return <div />
    }
    return (
      <Button
        onClick={this.triggerAction.bind(this)}
        raised
        style={{
          margin: '20px',
          color: this.props.theme.mainActionTextColor || '#fff'
        }}
      >
        {' '}
        {this.props.primaryActionTitle}{' '}
      </Button>
    )
  }

  triggerAction() {
    const link = this.props.cover.link
    const { localLink } = this.props.cover
    if (link) {
      this.onLinkClick(link)
    }
    if (localLink) {
      this.props.history.push(localLink)
    }

    this.triggerEvent()
  }

  get presentationHeight() {
    return this.props.presentationHeight || 500
  }

  get simpleHeight() {
    return 300
  }

  get menuHeight() {
    return 75
  }

  renderSimpleContent(height, title) {
    return (
      <div
        style={{
          position: 'absolute',
          backgroundColor: `rgba(0,0,0,${this.props.opacity})`,
          width: '100vw',
          height: `${height}px`,
          top: 0,
          left: 0,
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography
          use="headline3"
          style={{ margin: '20px', color: this.props.color }}
        >
          {' '}
          {title}{' '}
        </Typography>
      </div>
    )
  }

  renderPresentationContent() {
    const { title, subtitle } = this.props
    const titleAdditionalStyle = this.props.titleStyle
      ? this.props.titleStyle
      : {}
    const subtitleAdditionalStyle = this.props.subtitleStyle
      ? this.props.subtitleStyle
      : {}
    return (
      <div
        style={{
          position: 'absolute',
          width: '100vw',
          display: 'flex',
          top: `${this.presentationHeight - this.menuHeight - 20}`,
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          flexDirection: 'column'
        }}
      >
        <Typography
          use="headline3"
          style={{
            margin: '20px',
            position: 'absolute',
            bottom: '-100px',
            color: this.props.color,
            ...titleAdditionalStyle
          }}
        >
          {' '}
          {title}{' '}
        </Typography>
        {subtitle && (
          <Typography
            use="headline4"
            style={{
              margin: '20px',
              position: 'absolute',
              bottom: '-210px',
              color: this.props.color,
              ...subtitleAdditionalStyle
            }}
          >
            {subtitle}
          </Typography>
        )}
      </div>
    )
  }

  renderMedia(style, playing, innerHeight, loopVideo) {
    if (!this.props.image && !this.props.video) {
      return <div />
    }

    return (
      <Media
        cache={this.props.cache}
        video={this.props.video}
        image={this.props.image}
        imageSmall={this.props.imageSmall}
        playing={playing}
        innerHeight={innerHeight}
        style={style}
        loop={loopVideo}
        height={
          (this.props.additionalProps && this.props.additionalProps.height) ||
          null
        }
      />
    )
  }

  renderDefault(title) {
    const height = this.props.height
    const coverStyle = {
      width: '100%',
      height: `${height}px`,
      objectFit: 'cover',
      objectPosition: 'center center'
    }
    const coverPlaying = this.props.scroll < 200

    return (
      <div
        style={{
          backgroundColor: this.props.backgroundColor,
          marginTop: `${this.props.offset}px`,
          height: `${height}px`,
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {this.renderMedia(coverStyle, coverPlaying)}
        {this.renderDefaultContent()}
      </div>
    )
  }

  renderSimple(height, title) {
    const coverStyle = {
      width: '100%',
      backgroundColor: this.props.backgroundColor,
      height: `${height}px`,
      objectFit: 'cover',
      objectPosition: 'center center'
    }
    const coverPlaying = this.props.scroll < 200

    return (
      <div
        style={{
          backgroundColor: this.props.backgroundColor,
          marginTop: `${this.props.offset}px`,
          height: `${height}px`,
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {this.renderMedia(coverStyle, coverPlaying)}
        {this.renderSimpleContent(height, title)}
      </div>
    )
  }

  renderPresentation() {
    const height = this.presentationHeight
    const coverStyle = {
      width: '100%',
      height: `${height}px`,
      backgroundColor: this.props.backgroundColor,
      objectFit: 'cover',
      objectPosition: 'center center'
    }
    const coverPlaying = this.props.scroll < 200
    const loopVideo = true

    return (
      <div
        style={{
          backgroundColor: this.props.backgroundColor,
          marginTop: `${this.props.offset}px`,
          height: `${height + 2}px`,
          display: 'flex',
          overflow: 'hidden',
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {this.renderMedia(
          coverStyle,
          coverPlaying,
          `${height - 100}px`,
          loopVideo
        )}
        {this.renderPresentationContent()}
      </div>
    )
  }

  renderSection() {
    const height = this.props.height
    const coverStyle = {
      width: '100%',
      height: `${height}px`,
      objectFit: 'cover',
      opacity: 0.8,
      objectPosition: 'center center'
    }
    const coverPlaying = this.props.scroll < 200

    return (
      <div
        style={{
          backgroundColor: this.props.backgroundColor,
          marginTop: `${this.props.offset}px`,
          height: `${height}px`,
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {this.renderMedia(coverStyle, coverPlaying)}
        {this.renderSectionContent()}
      </div>
    )
  }

  renderMenu() {
    return this.renderSimple(this.menuHeight)
  }

  get type() {
    return this.props.type || 'default'
  }

  render() {
    switch (this.type) {
      case 'presentation':
        return this.renderPresentation()
      case 'simple':
        return this.renderSimple(this.simpleHeight, this.props.title)
      case 'menu':
        return this.renderMenu()
      case 'section':
        return this.renderSection()
      default:
        return this.renderDefault()
    }
  }
}
