import React from 'react'
import Component from '../Component'
import ReactPlaceholder from 'react-placeholder'
import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape
} from 'react-placeholder/lib/placeholders'
import marked from 'marked'
import URL from 'url-parse'
// import { Data } from 'react-chunky'

export default class Text extends Component {
  constructor(props) {
    super(props)
    this.state = { ...this.state, loading: true, selectedLanguage: null }
  }

  componentDidMount() {
    super.componentDidMount()
    Data.Cache.retrieveCachedItem('selectedLanguage')
      .then(lang => {
        this.setState({ selectedLanguage: lang })
      })
      .catch(() => {
        return
      })
    this.loadContent()
  }

  parseUrl(source) {
    const ref = new URL(source)
    const type = ref.protocol.slice(0, -1).toLowerCase()
    const fullPath = `${ref.hostname}${ref.pathname ? ref.pathname : ''}`
    switch (type) {
      case 'local':
        return `${
          this.isDesktop ? '../../../../' : '/'
        }assets/text/${fullPath}.md`
      case 'github':
        return `https://raw.githubusercontent.com/${fullPath}.md`
      case 'dropbox':
        return `https://dl.dropboxusercontent.com/s/${fullPath}.md?raw=1&dl=1`
      case 'https':
      case 'http':
        return source
      default:
    }
  }

  loadFromUrl(url) {
    const translatedUrl =
      this.state.selectedLanguage && !url.includes('json')
        ? url.replace('/text/', `/text/${this.state.selectedLanguage}/`)
        : url
    return fetch(translatedUrl)
      .then(response => response.text())
      .then(markdown => marked(markdown, {}))
  }

  loadContent() {
    if (
      this.props.textSource &&
      !this.props.textSource.includes('github://') &&
      !this.props.textSource.includes('local://')
    ) {
      this.setState({ text: this.props.textSource })
      return false
    }
    const source =
      this.props.source === 'text' ? this.props.textSource : this.props.source
    const url = this.parseUrl(source)

    if (!url) {
      return
    }

    this.loadFromUrl(url)
      .then(text => {
        this.setState({ loading: false, text })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  get placeholder() {
    return (
      <div style={{ justifyContent: 'center' }}>
        <RectShape color="#CFD8DC" style={{ height: 40, marginBottom: 10 }} />
        <TextBlock rows={7} color="#ECEFF1" />
      </div>
    )
  }

  renderComponentContent({ titleColor, textColor }) {
    const className = `text`
    return (
      <div>
        <div
          className={className}
          dangerouslySetInnerHTML={{ __html: this.state.text }}
        />
      </div>
    )
  }

  renderComponent() {
    this.loadContent()
    return (
      <div
        style={Object.assign(
          {},
          {
            textAlign: 'center',
            padding: '10px',
            maxWidth: '90vw',
            overflow: 'hidden'
          },
          this.props.style
        )}
      >
        <ReactPlaceholder
          showLoadingAnimation
          rows={7}
          ready={!this.state.loading}
          customPlaceholder={this.placeholder}
        >
          {this.renderComponentContent({
            titleColor: '#263238',
            textColor: '#455A64'
          })}
        </ReactPlaceholder>
      </div>
    )
  }
}
