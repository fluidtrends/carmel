import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import * as ChunkComponents from '../components'
import { LinearProgress } from 'rmwc/LinearProgress'

export default class MainDashboardScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, loading: true }
    this._onSectionSelect = this.onSectionSelect.bind(this)
    this._register = this.register.bind(this)
    this._login = this.login.bind(this)
    this._renderSectionContent = this.renderSectionContent.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    this._sideMenu = [].concat(this.menu)

    if (this.isLoggedIn) {
      this.loadSections(this.account)
      return
    }

    this.setState({ loading: false })
  }

  get sideMenu () {
    return this._sideMenu
  }

  register () {
    this.setState({ register: true })
  }

  login () {
    this.setState({ register: false })
  }

  loadDashboard (account) {
    this.saveAuth(account).then(() => {
      this.loadSections(account)
    })
  }

  renderLogin () {
    return <ChunkComponents.Login
      error={this.state.loginError}
      signIn={this.props.signIn}
      onRegister={this._register} />
  }

  renderRegister () {
    return <ChunkComponents.Register
      error={this.state.registerError}
      signUp={this.props.signUp}
      onLogin={this._login} />
  }

  didRegister () {
    this.setState({ register: false })
  }

  registerError (error) {
    this.setState({ registerError: error.message })
  }

  signInError (error) {
    this.setState({ loginError: error.message })
  }

  loadSections (account) {
    this._sections = this.importData('sections')

    if (!this.sections || this.sections.length === 0) {
      return
    }

    this.sections.forEach(s => {
      this._sideMenu.unshift({
        id: `extended-${s.path}`, icon: 'home', title: s.title, path: s.path
      })
    })

    var section = this.sections[0]

    if (this.isRootPath) {
      this.setState({ section, loading: false, account })
      return
    }

    this.sections.forEach(s => {
      if (!this.isSamePath(this.path, `${this.props.path}/${s.path}`)) {
        return
      }
      section = Object.assign({}, s)
    })

    this.setState({ section, loading: false, account })
  }

  get sections () {
    return this._sections || []
  }

  onSectionSelect (section) {
    this.setState({ section })
    this.triggerRedirect(`${this.props.path}/${section.path}`)
  }

  renderScreenContent () {
    if (this.state.loading) {
      return <div>
        <LinearProgress determinate={false} />
      </div>
    }

    if (!this.isLoggedIn) {
      return this.state.register ? this.renderRegister() : this.renderLogin()
    }

    return this.renderSections()
  }

  renderSectionContent () {
    if (this.state.section.component && ChunkComponents[this.state.section.component]) {
      const SectionComponent = ChunkComponents[this.state.section.component]
      var sectionProps = Object.assign({}, { account: this.account, compact: this.isSmallScreen })
      return <div style={{ height: '100vh' }}><SectionComponent {...sectionProps} />
      </div>
    }
    return <div />
  }

  renderSections () {
    return <Components.Dashboard
      compact={this.isSmallScreen}
      renderContent={this._renderSectionContent}
      sectionsBackgroundColor='#FAFAFA'
      sectionColor='#B0BEC5'
      sectionSelectedColor='#039BE5'
      sections={this.sections}
      section={this.state.section}
      onSectionSelect={this._onSectionSelect}
    />
  }

  components () {
    return [this.renderScreenContent()]
  }
}
