import React, { PureComponent } from 'react'
import ProgressiveImage from 'react-progressive-image'
import ReactPlayer from 'react-player'
import { renderResponsive } from '../utils/responsive'

export default class Media extends PureComponent {
  constructor(props) {
    super(props)
  }

  renderImage(name, src, placeholder) {
    return (
      <ProgressiveImage src={src} placeholder={placeholder}>
        {(src, loading) => {
          const { innerHeight, innerWidth } = this.props
          const style = Object.assign({}, this.props.style, {
            opacity: this.props.style.opacity ? this.props.style.opacity : 1,
            height: this.props.style.height,
            top: 0,
            width: innerWidth || '100vw'
          })
          if (!loading && innerHeight) {
            return <img height={innerHeight} src={src} alt={name} />
          }
          if (this.props.roundImg) {
            return <img style={this.props.style} src={src} alt={name} />
          }
          if (!loading && innerWidth) {
            return <img width={innerWidth} src={src} alt={name} />
          }
          return <img style={style} src={src} alt={name} />
        }}
      </ProgressiveImage>
    )
  }

  renderResponsiveImage(image) {
    const placeholderImage = `${
      this.props.desktop ? '../../../../' : '/'
    }assets/placeholder.jpg`

    if (!image) {
      return renderResponsive(
        'media',
        this.renderImage(
          '',
          this.props.imageSmall ? this.props.imageSmall : this.props.image,
          placeholderImage
        ),
        this.renderImage('', this.props.image, placeholderImage)
      )
    }

    return renderResponsive(
      image.id,
      this.renderImage(
        this.props.image,
        image.data.images[0].path,
        image.data.placeholder
      ),
      this.renderImage(
        this.props.image,
        image.data.images[1].path,
        image.data.placeholder
      )
    )
  }

  onVideoPlayerEvent(type, data) {
    this.props.onVideoPlayerEvent && this.props.onVideoPlayerEvent(type, data)
  }

  render() {
    if (this.props.video) {
      return (
        <ReactPlayer
          className={'video-wrapper'}
          ref={player => {
            this.coverPlayer = player
          }}
          onReady={() =>
            this.onVideoPlayerEvent('ready', { player: this.coverPlayer })
          }
          onProgress={progress =>
            this.onVideoPlayerEvent('progress', { progress })
          }
          onEnded={() => this.onVideoPlayerEvent('done', {})}
          onError={error => this.onVideoPlayerEvent('error', { error })}
          url={this.props.video}
          playing={this.props.playing}
          width={this.props.width || '100vw'}
          height={this.props.height || '100vh'}
          style={this.props.style}
          loop={this.props.loop}
          muted={this.props.muted}
          volume={this.props.muted ? 0 : 1}
          config={{
            file: {
              attributes: {
                autoPlay: true,
                muted: this.props.muted
              }
            }
          }}
        />
      )
    }

    if (
      this.props.image.split('http://').length > 1 ||
      this.props.image.split('https://').length > 1
    ) {
      return this.renderResponsiveImage()
    }

    if (!this.props.image || !this.props.cache.image) {
      return <div />
    }

    const i = this.props.cache.image(`${this.props.image}`)
    return this.renderResponsiveImage(i)
  }
}
