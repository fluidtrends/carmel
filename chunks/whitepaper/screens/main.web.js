import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Button, ButtonIcon } from 'rmwc/Button'

export default class MainWhitepaperScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
    this._onSectionSelect = this.onSectionSelect.bind(this)
    this._onSectionNavigate = this.onSectionNavigate.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()

    this.importRemoteData(this.props.variants).then(sections => {
      const indexedSections = sections.map((s, i) => {
        return Object.assign({}, s, { id: i })
      })
      this._sections = [].concat(indexedSections)

      if (!this.sections || this.sections.length === 0) {
        return
      }

      this.refreshSection()
    })
  }

  refreshSection() {
    var section = this.sections[0]

    if (this.isRootPath) {
      this.setState({ section })
      return
    }

    this.sections.forEach((s, i) => {
      if (!this.isSamePath(this.path, `${this.props.path}/${s.path}`)) {
        return
      }
      section = Object.assign({}, s, { id: i })
    })

    this.setState({ section })
  }

  prev() {
    const section = this.state.section

    if (section.id === 0) {
      return this.sections[0]
    }
    return this.sections[this.state.section.id - 1]
  }

  next() {
    const section = this.state.section

    if (section.id === this.sections.length) {
      return this.sections[this.sections.length]
    }
    return this.sections[this.state.section.id + 1]
  }

  get sections() {
    return this._sections || []
  }

  onSectionSelect(section) {
    this.setState({ section })
    // this.triggerRedirect(`${this.props.path}/${section.path}`)
  }

  onSectionNavigate(direction) {
    let section
    if (direction === 1) {
      section = this.next()
    } else {
      section = this.prev()
    }
    this.setState({ section })
    // this.triggerRedirect(`${this.props.path}/${section.path}`)
  }

  download(lang) {
    window.open(`http://files.carmel.io/whitepaper/${lang}.pdf`, '_blank')
  }

  renderDownload() {
    return <div style={{ display: 'flex', flex: 1, padding: 10 }}>
      <Button onClick={this.download.bind(this, 'en')} style={{ marginRight: 10 }} >Download whitepaper</Button>
      <Button onClick={this.download.bind(this, 'ch')}>下载</Button>
    </div>
  }

  components() {
    return [
      this.renderDownload(),
      <Components.Dashboard
        sectionsBackgroundColor='#FAFAFA'
        sectionColor='#B0BEC5'
        sectionSelectedColor='#039BE5'
        nav
        sections={this.sections}
        section={this.state.section}
        onSectionSelect={this._onSectionSelect}
        onSectionNavigate={this._onSectionNavigate}
      />
    ]
  }
}
