import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import * as ChunkComponents from '../components'
import { LinearProgress } from 'rmwc/LinearProgress'
import {
  Card,
  CardMedia,
  CardMediaItem,
  CardPrimary,
  CardTitle,
  CardActions,
  CardActionButtons,
  CardAction,
  CardPrimaryAction,
  CardActionIcons,
  CardSubtitle,
  CardSupportingText,
  CardHorizontalBlock
} from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
import {
  ListDivider
} from 'rmwc/List'

export default class MainDashboardScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, loading: false }
    this._onSectionSelect = this.onSectionSelect.bind(this)
    this._register = this.register.bind(this)
    this._reset = this.reset.bind(this)
    this._login = this.login.bind(this)
    this._renderSectionContent = this.renderSectionContent.bind(this)
    this._dashboardAction = this.dashboardAction.bind(this)
    this._levelUp = this.levelUp.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
    this._sideMenu = [].concat(this.menu)

    if (this.isLoggedIn) {
      this.loadSections(this.account)
    }
  }

  get sideMenu () {
    return this._sideMenu
  }

  register () {
    this.setState({ register: true, resetPassword: false })
  }

  reset () {
    this.setState({ resetPassword: true })
  }

  login () {
    this.setState({ register: false, resetPassword: false })
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
      onRegister={this._register}
      onResetPassword={this._reset} />
  }

  renderRegister () {
    return <ChunkComponents.Register
      error={this.state.registerError}
      signUp={this.props.signUp}
      onLogin={this._login} />
  }

  renderResetPassword () {
    return <ChunkComponents.ResetPassword error={this.state.registerError} onLogin={this._login} />
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

  dashboardAction (action, props) {
    switch (action) {
      case 'installProvider':
      case 'transactionDetails':
        this.triggerRawRedirect(props.link)
        break
      case 'upgrade':
        this._levelUp(props)
        break
      default:
    }
  }

  levelUp (data) {
    this.setState({ loading: true })

    setTimeout(() => {
      this.props.newLevelUp(Object.assign({}, data, {
        userId: this.props.account._id,
        userEmail: this.props.account.email
      }))
    }, 300)
  }

  levelUpDone (data) {
    const request = {
      nodeName: 'levelups',
      node: data,
      join: {
        users: { id: this.props.account._id }
      }
    }

    setTimeout(() => {
      this.props.newLevelUpHistory(request)
      this.props.updateAccount({
        lastEthereumTransaction: data.ethereumTransactionId,
        tokens: data.newTokens,
        ethereumAddress: data.ethereumAddress,
        level: data.newLevel
      })
    }, 300)
  }

  levelUpHistoryDone (data) {
  }

  updatedAccount () {
    setTimeout(() => {
      this.props.getAccount()
    }, 300)
  }

  loadSections (account) {
    this._sections = this.importData('sections')

    if (!this.sections || this.sections.length === 0) {
      return
    }

    this._sideMenu = [].concat(this.menu)

    this.sections.forEach(s => {
      this._sideMenu.push({
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
    if (section.action && this[section.action]) {
      this[section.action]()
      return
    }
    this.setState({ section })
    this.triggerRedirect(`${this.props.path}/${section.path}`)
  }

  renderScreenContent () {
    if (this.state.loading) {
      const width = this.props.compact ? '95vw' : '600px'
      return <div style={{ display: 'flex', flex: 1, margin: '10px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
        <Card style={{width, margin: '20px', padding: '0px'}} >
          <Typography use='title' tag='h1'>
            Processing ... Just a sec.
          </Typography>
          <ListDivider />
          <LinearProgress determinate={false} />
        </Card>
      </div>
    }

    if (!this.isLoggedIn) {
      if (this.state.resetPassword) {
        return this.renderResetPassword()
      }
      return this.state.register ? this.renderRegister() : this.renderLogin()
    }

    return this.renderSections()
  }

  renderSectionContent () {
    if (this.state.section.component && ChunkComponents[this.state.section.component]) {
      const SectionComponent = ChunkComponents[this.state.section.component]
      var sectionProps = Object.assign({}, {
        account: this.account,
        browser: this.browser,
        onAction: this._dashboardAction,
        compact: this.isSmallScreen,
        updates: this.props.updates })
      return <div style={{ }}><SectionComponent {...sectionProps} />
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
