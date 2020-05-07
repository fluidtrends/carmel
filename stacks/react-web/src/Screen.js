import React from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { Redirect } from 'react-router'
// import { Cache, Screen } from '../../../.webpack/main'
import { default as Component } from './Component'
import * as DefaultComponents from './components'
import merge from 'deepmerge'
import { breakpoints } from './utils/responsive'
import { default as Layout } from './Layout'

import { Screen } from "@carmel/react-stack"

export default class WebScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = {
      ...this.state,
      loading: true,
      height: window.innerHeight,
      width: window.innerWidth,
      scroll: 0,
      unCoveredHeader: false
    }

    this._updateScroll = this.updateScroll.bind(this)
    this._updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this._onMenuItem = this.onMenuItem.bind(this)
    this._sidebarMenuSelected = this.sidebarMenuSelected.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    this._updateWindowDimensions()
    this._sideMenu = [].concat(this.menu)

    window.addEventListener('resize', this._updateWindowDimensions)
    window.addEventListener('scroll', this._updateScroll)
    this.unsubscribeFromHistory = this.props.history.listen(
      this.handleLocationChange.bind(this)
    )
    this._onEvent = this.onEvent.bind(this)

    this.triggerAnalyticsView(this.props.location.pathname)
    const account = this.isLoggedIn ? 'member' : 'guest'

    this.triggerAnalyticsEvent({
      category: `${this.constructor.name}`,
      action: `${this.props.location.pathname}`,
      label: account
    })

    if (this.props.private && !this.isLoggedIn) {
      this.triggerRedirect(this.props.permissions.publicRedirect)
      return
    }

    if (!this.props.private && this.isLoggedIn && this.props.guestOnly) {
      this.triggerRedirect(this.props.privateRedirect || this.props.permissions.privateRedirect)
    }

    this._load(this.props)
  }

  get sidebarWidth () {
    return 200
  }

  get sections () {
    return this._sections
  }

  get restUrl () {
    if (!this.props.provisioning || !this.props.provisioning.rest || !this.props.provisioning.rest.url || !this.props.env) {
      return
    }

    return `${this.props.provisioning.rest.url}/${this.props.env === 'production' ? '' : this.props.env + '-'}`
  }

  componentDidUpdate (prevProps) {
    if (this.props.match.url === prevProps.match.url) {
        return
    }

    this._load(this.props)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._updateWindowDimensions)
    window.removeEventListener('scroll', this._updateScroll)
    this.unsubscribeFromHistory()
  }

  handleLocationChange (location) {
  }

  scrollToTop () {
    window.scrollTo && window.scrollTo(0, 0)
  }

  onMenuItem (item) {
    if (!item) {
      return
    }

    if (item.action && this[item.action]) {
      this[item.action](item)
      return
    }

    if (item.link) {
      this.triggerRawRedirect(item.link)
      return
    }

    if (item.path) {
      this.triggerRedirect(item.path)
    }
  }

  get menu () {
    return (this.props.menu || []).concat([])
  }

  get sideMenu () {
    return this._sideMenu
  }

  get isSmallScreen () {
    return this.width < breakpoints.main
  }

  get layout () {
    return Layout
  }

  get expectsVariants () {
    return this.props.variants !== undefined
  }

  updateWindowDimensions () {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  updateScroll () {
    const scroll = window.scrollY
    if ( this.props.theme.keepNavigatorSticky ) return
    if (scroll > 10 && !this.state.unCoveredHeader) {
      this.setState({ scroll, unCoveredHeader: true })
    } else if(scroll < 10) {
      this.setState({ scroll, unCoveredHeader: false })
    }
  }

  handleLocalEvent (fullPath) {
    this.triggerRedirect(fullPath)
  }

  handleExternalEvent (fullPath) {
    this.triggerRawRedirect(fullPath)
  }

  importData (name) {
    try {
      const parts = name.split('/')
      const chunkName = (parts.length > 1 ? parts[0] : this.props.chunkName)
      const filename = (parts.length > 1 ? parts[1] : name)

      if (this.props.desktop) {
        return require(`../../../../chunks/${chunkName}/data/${filename}.json`)
      }
      return require(`chunks/${chunkName}/data/${filename}.json`)
    } catch (e) {
    }
  }

  importRemoteData (url) {
    return fetch(url).then(response => response.json())
  }

  get dynamicVariant() {
    return this._dynamicVariant
  }

  _loadVariants () {
    return new Promise((resolve, reject) => {
      if (this.props.variants && ("boolean" === typeof this.props.variants)) {
        this._dynamicVariant = this.props.location.pathname.substring(this.props.path.length)
        this._dynamicVariant = (this._dynamicVariant[0] === '/' ? this._dynamicVariant.substring(1) : this._dynamicVariant)
        this._variants = [{ path: `${this.props.path}${this.props.path === '/' ? '' : '/'}${this.dynamicVariant}`}]
        this._variant = this.variants[0]
        resolve([])
        return
      }

      if (!this.props.variants || (Array.isArray(this.props.variants) && this.props.variants.length === 0)) {
        resolve([])
        return
      }

      if (
        this.props.variants.split('http://').length > 1 ||
        this.props.variants.split('https://').length > 1) {
        fetch(this.props.variants).then(response => resolve(response.json()))
        return
      }

      if (
        this.props.variants.split('github://').length > 1) {
        fetch(`https://raw.githubusercontent.com/${this.props.variants.substring(9)}`).then(response => resolve(response.json()))
        return
      }

      const data = this.importData(`${this.props.variants}${this.props.desktop ? '.desktop' : ''}`)

      if (!data || !Array.isArray(data) || data.length === 0) {
        resolve([])
        return
      }

      resolve(data)
    }).then(data => {
      this._variants = [].concat(data)
      return this.variants
    })
  }

  get variants () {
    return this._variants
  }

  get hasVariants () {
    return this._variants !== undefined
  }

  get isRootPath () {
    return this.isSamePath(this.path, this.props.path)
  }

  isSamePath (first = '', second = '') {
    const firstClean = first.replace(/^\/|\/$/g, '')
    const secondClean = second.replace(/^\/|\/$/g, '')
    return (firstClean === secondClean)
  }

  _updateVariants () {
    if (!this.hasVariants) {
      throw new Error('Missing expected variant')
    }

    if (this.variants.length === 0) {
      return
    }

    const variantPath = this.path.substring(this.props.path.length + 1)

    this.variants.forEach(variant => {
      if (!this.isSamePath(variant.path, variantPath)) {
        return
      }
      this._variant = Object.assign({}, variant)
    })

    if (!this.isVariantValid) {
      this._variant = Object.assign({}, this.variants[0])
    }
  }

  _loadSections () {
    if (!this.props.sections || this.props.sections.length === 0) {
      return
    }

    this._sections = this.importData('sections')
    this._sideMenu = [].concat(this.menu)
  }

  _loadSection () {
    if (!this.sections || this.sections.length === 0) {
      return
    }

    var section = this.sections[0]

    if (this.isRootPath) {
      return section
    }

    this.sections.forEach(s => {
      if (!this.isSamePath(this.path, `${s.path}`)) {
        return
      }
      section = Object.assign({}, s)
    })

    return section
  }

  _load (props) {
    this.scrollToTop()
    this._path = props.location.pathname

    this._loadSections()
    const section = this._loadSection()

    if (this.props.skipRootVariant && this.expectsVariants && this.isRootPath) {
      this.setState({ loading: false, skip: true, section })
      return
    }

    if (!this.expectsVariants) {
      this.setState({ loading: false, section })
      return
    }

    try {
      if (!this.hasVariants) {
        this._loadVariants().then(() => {
          this._updateVariants()
          this.setState({ loading: false, section })
        })
        return
      }

      this._updateVariants()
      this.setState({ loading: false, section })
    } catch (e) {
      // Could not load variant path data
      this.stopWithError(e)
    }
  }

  stopWithError (e) {
    this.setState({ stopError: e, loading: false })
  }

  get isVariantValid () {
    return this.expectsVariants && this.variant
  }

  get _props () {
    return Object.assign(
      {},
      this.variant ? merge.all([this.props, this.variant]) : this.props,
      { menu: this.menu, sideMenu: this.sideMenu, sidebarWidth: this.sidebarWidth }
    )
  }

  get variant () {
    return this._variant
  }

  pushTransition (transition, data) {
    var pathname =
      transition.data.path.charAt(0) === ':'
        ? data[transition.data.path.substring(1)] || transition.data.path
        : transition.data.path

    this.setState({ redirect: { transition, data, push: true, pathname } })
  }

  replaceTransition (transition, data) {
    var pathname =
      transition.data.path.charAt(0) === ':'
        ? data[transition.data.path.substring(1)] || transition.data.path
        : transition.data.path

    this.setState({ redirect: { transition, data, push: false, pathname } })
  }

  get account () {
    return this.props.account
  }

  get isLoggedIn () {
    return this.account
  }

  get width () {
    return this.state.width || window.innerWidth
  }

  get height () {
    return this.state.height || window.innerHeight
  }

  get scroll () {
    return this.state.scroll
  }

  get path () {
    return this._path
  }

  components () {
    if (this.props.components) {
      return Object.keys(this.props.components)
    }
    return []
  }

  loadCustomComponent () {}

  loadSingleComponent (props) {
    const source = `${props.source
      .charAt(0)
      .toUpperCase()}${props.source.toLowerCase().slice(1)}`
    var Component = DefaultComponents[source]

    if (!Component) {
      Component = this.loadCustomComponent()
    }

    if (!Component) {
      return <div />
    }

    return <Component {...this.defaultComponentProps} {...props} />
  }

  loadComponent (name, index) {
    if (
      !this.props.components ||
      !this.props.components[name] ||
      !(typeof this.props.components[name] === 'object')
    ) {
      return <div />
    }

    if (!Array.isArray(this.props.components[name])) {
      return this.loadSingleComponent(
        Object.assign({}, this.props.components[name], { index })
      )
    }

    var subIndex = 0
    return (
      <div>
        {this.props.components[name].map(props => {
          return this.loadSingleComponent(
            Object.assign({}, props, {
              key: `component.${subIndex++}`,
              index: `${index}.${subIndex}`
            })
          )
        })}
      </div>
    )
  }

  get defaultComponentProps () {
    return Object.assign(
      {},
      {
        cache: this.cache,
        onEvent: this._onEvent,
        width: this.state.width,
        theme: this.props.theme,
        importRemoteData: this.importRemoteData,
        height: this.state.height,
        isSmallScreen: this.isSmallScreen,
        smallScreenBreakPoint: this.smallScreenBreakPoint
      },
      this.props
    )
  }

  renderComponent (OriginalComponent, index) {
    const props = Object.assign({}, this.defaultComponentProps, { index })

    var ComponentContainer = React.cloneElement(
      OriginalComponent,
      Object.assign({}, this.defaultComponentProps, { index })
    )

    if (typeof OriginalComponent.type === 'string') {
      return (
        <Component {...props} key={`${index}`} style={{ 
          alignSelf: 'stretch'
        }}>
          { OriginalComponent }
        </Component>
      )
    }

    if (typeof OriginalComponent === 'string') {
      ComponentContainer = this.loadComponent(OriginalComponent, index)
    }

    return (
      <TransitionGroup key={`${index}`} style={{ alignSelf: 'stretch' }}>
        { ComponentContainer }
      </TransitionGroup>
    )
  }

  renderComponents () {
    if (!this.components() || this.components().length === 0) {
      return
    }

    var index = 1
    return this.components().map(component => {
      index = index + 1
      return this.renderComponent(component, index)
    })
  }

  redirect (pathname) {
    this.setState({ redirect: false })
    return (
      <Redirect
        exact
        push
        to={{
          pathname
        }}
      />
    )
  }

  triggerRedirect (link) {
    if (this.isSamePath(this.path, link)) {
      return
    }

    this.setState({ redirect: { push: true, pathname: link } })
  }

  triggerRawRedirect (link) {
    window.open(link, '_blank')
  }

  get cover () {
    return this._props.cover
  }

  renderScreenLayout () {
    if (this.state.loading) {
      return this.renderLoading()
    }

    const ScreenLayout = this.layout
    return (
      <ScreenLayout
        section={this.state.section}
        onMenuItem={this._onMenuItem}
        onEvent={this._onEvent}
        scroll={this.state.scroll}
        width={this.state.width}
        height={this.state.height}
        onSidebarMenuSelected={this._sidebarMenuSelected}
        isSmallScreen={this.isSmallScreen}
        {...this._props}
        cache={this.props.cache}
        sidebar={this.props.sidebar}
        sidebarIndex={this.props.sidebarIndex}
        private={this.props.private}
        cover={this.cover}>
        { this.renderComponents() }
      </ScreenLayout>
    )
  }

  renderLoading() {
    return <div/>
  }

  sidebarMenuSelected (item) {
    if (!item) {
      return
    }

    if (item.action && this[item.action]) {
      this[item.action]()
      return
    }

    this.triggerRedirect(`${item.path}`)
  }

  saveAuth (account) {
    return Data.Cache.cacheAuth(account).then(() => {
      this.loggedIn(account)
    })
  }

  renderStopError (e) {
    return <div />
  }

  render () {    
    if (this.state.skip) {
      return <div />
    }

    if (this.state.stopError) {
      return this.renderStopError(this.state.stopError)
    }

    if (this.state.height === 0) {
      return <div />
    }

    if (this.state.redirect) {
      const { pathname, push } = this.state.redirect

      if (!this.isSamePath(this.path, pathname)) {
        return this.redirect(pathname, push)
      }
    }

    var height = `${this.height}px`

    return (
      <div style={{ height, width: '100vw', position: 'relative' }}>
        { this.renderScreenLayout() }
      </div>
    )
  }
}
