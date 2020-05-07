import React, { PureComponent } from 'react'
import { Switch } from 'react-router'
import {
  StaticRouter,
  HashRouter,
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom'
import URL from 'url-parse'
import { Data } from 'react-chunky'
import { createSectionRoutes } from './Router'
import Cache from './Cache'
import NotFoundPage from '../components/404'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { loading: true }
    this._menu = []
    this._sidebar = []
    this._cache = new Cache(props)
    this._userLogout = this.userLogout.bind(this)
    this._userLoggedIn = this.userLoggedIn.bind(this)
  }

  componentDidMount() {
    this.checkAuth()
    this.preload()
  }

  preload() {
    const ele = document.getElementById('ipl-progress-indicator')
    if (ele) {
      // fade out
      ele.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
      }, 2000)
    }

    const { additionalScripts } = this.props

    if (!additionalScripts) {
      return 
    }

    for (let i = 0; i < additionalScripts.length; i++) {
      let {
        rel,
        href,
        integrity,
        crossOrigin,
        type,
        src
      } = additionalScripts[i]
      if (type === 'style') {
        let link = document.createElement('link')
        link.rel = rel
        link.href = href
        link.integrity = integrity
        link.crossOrigin = crossOrigin
        document.head.appendChild(link)
      }
      if (type === 'text/javascript') {
        let script = document.createElement('script')
        script.src = src
        script.type = type
        document.body.appendChild(script)
      }
    }
  }

  checkAuth() {
    return new Promise((resolve, reject) => {
      Data.Cache.retrieveAuth()
        .then(account => {
          this._resolve(account)
          resolve()
        })
        .catch(e => {
          this._resolve()
          resolve()
        })
    })
  }

  get cache() {
    return this._cache
  }

  userLoggedIn(account) {
    return new Promise((resolve, reject) => {
      const user = firebase.auth().currentUser
      const combined = Object.assign(
        {},
        {
          uid: user.uid,
          emailVerified: user.emailVerified
        },
        account
      )
      return Data.Cache.cacheAuth({ user: combined }).then(() =>
        resolve(combined)
      )
    }).then(() => this.checkAuth())
  }

  userLogout() {
    Data.Cache.clearAuth().then(() => {
      this._resolve()
      firebase && firebase.auth().signOut()
    })
  }

  _resolveTransitionFromURI(uri) {
    const url = new URL(uri, true)
    return {
      name: `show${url.hostname
        .charAt(0)
        .toUpperCase()}${url.hostname.substring(1).toLowerCase()}`,
      type: url.protocol.slice(0, -1).toLowerCase(),
      route: url.hostname
    }
  }

  _createSectionNavigatorRoutes(element, section) {
    // We want to look at a stack element and figure out its parent chunk;
    // Note that chunks may also have flavours so this looks for the flavor, if any
    const [chunkName, chunkFlavorName] = element.split('/')

    // This is our chunk, if it actually exists
    const chunk = this.props.chunks[chunkName]
    
    if (!chunk) {
      // Let's verify that it actually points to a real chunk
      return
    }

    if (
      chunkFlavorName &&
      (!chunk.flavors || !chunk.flavors[chunkFlavorName])
    ) {
      // Great, let's check the flavor now
      return
    }

    if (!chunk.routes || chunk.routes.length === 0) {
      // One last thing, let's also make sure the chunk has routes
      return
    }

    // These routes will be the ones we want to parse out of the chunk, as necessary
    var routes = []

    var rootRoute = {}

    // Let's build up global transitions, if any
    var globalTransitions = {}

    if (this.props.transitions) {
      this.props.transitions.forEach(transitionUri => {
        // Let's resolve global transitions
        const transition = this._resolveTransitionFromURI(transitionUri)
        globalTransitions[transition.name] = transition
      })
    }

    for (let routeName in chunk.routes) {
      // Great, this chunk has routes, let's look through all of them
      var route = chunk.routes[routeName]

      if (!route.screen) {
        // This route has no screens
        continue
      }

      if (route.private !== section.private) {
        continue
      }

      const screenId = `${chunkName}/${routeName}`
      const screenPath = route.path || `/${routeName}`
      const routeKey = `${screenId}${screenPath}`
      const routeMenuTitle =
        this.props.desktop && route.desktopTitle
          ? route.desktopTitle
          : route.title

      if (section.private && route.private) {
        route.sidebarIndex = this.sidebar.length
        this._sidebar.push({
          routeKey,
          id: `${this.sidebar.length}`,
          icon: route.icon,
          title: routeMenuTitle,
          alwaysShowIcon: route.alwaysShowIcon,
          action: route.action,
          path: route.path
        })
      }

      if (Object.keys(rootRoute).length === 0) {
        route.root = true
        route.menuTitle = routeMenuTitle

        rootRoute = Object.assign({}, route)
        
        // Construct a menu
        if (!route.skipMenu && !route.private && !section.private) {
          var link = `${this.menu.length === 0 ? '/' : route.path}`
          this._menu.push({
            id: `${this.menu.length}`,
            routeKey,
            icon: route.icon.replace('-', '_'),
            title: route.menuTitle,
            alwaysShowIcon: route.alwaysShowIcon,
            navigationLogo: route.navigationLogo,
            action: route.action,
            path: link
          })
          if (
            route.extendedMenu &&
            !(route.skipExtendedMenuOnDesktop && this.props.desktop)
          ) {
            this._menu = this._menu.concat(route.extendedMenu)
          }
        }
      } else {
        // route.icon = rootRoute.icon
        // route.menuTitle = rootRoute.menuTitle
      }

      // Let's build up the transitions, if any
      var transitions = {}

      if (chunk.transitions) {
        chunk.transitions.forEach(transitionUri => {
          // Parse this transition's URI
          const transition = this._resolveTransitionFromURI(transitionUri)
          const routeData = chunk.routes[transition.route]
          if (transition.route && routeData) {
            // This is a local transition, so let's resolve locally
            transition.data = Object.assign({}, routeData)
            transition.route = `${section.name}/${chunkName}/${
              transition.route
            }`
            transitions[transition.name] = transition
            return
          }

          if (globalTransitions[transition.name]) {
            // Let's look through the global transitions, if any
            transitions[transition.name] = Object.assign(
              {},
              globalTransitions[transition.name]
            )
          }
        })
      }

      // Let's pass over the theme as well
      const theme = this.props.theme

      // For each route, we want to compose its properties
      const screenProps = Object.assign(
        {
          // Defaults
          cache: this.cache,
          strings: {},
          desktop: this.props.desktop,
          account: section.account,
          env: this.props.env,
          provisioning: this.props.provisioning,
          analytics: this.props.analytics,
          onUserLogout: this._userLogout,
          onUserLoggedIn: this._userLoggedIn,
          info: this.props.info,
          session: this.props.session,
          startOperationsOnMount: true
        },
        {
          theme,
          transitions,
          ...route,
          chunkName,
          menu: this.menu,
          sidebar: this.sidebar,
          private: route.private,
          sidebarIndex: route.sidebarIndex
        },
        this.props.web
      )

      // Resolve strings
      var resolvedStrings = {}
      for (const string in screenProps.strings) {
        resolvedStrings[string] =
          this.props.strings[screenProps.strings[string]] ||
          `??${screenProps.strings[string]}??`
      }
      screenProps.strings = Object.assign(
        {},
        this.props.strings,
        resolvedStrings
      )

      const ScreenRoute = this._makeScreenRoute(
        screenPath,
        screenId,
        route,
        screenProps
      )
      routes.push(ScreenRoute)

      if (route.variants) {
        const ScreenVariantRoute = this._makeScreenRoute(
          `${screenPath}${screenPath === '/' ? '' : '/'}:variant`,
          screenId,
          route,
          screenProps
        )
        routes.push(ScreenVariantRoute)
      }
    }

    // We've got ourselves some routes so we should be done with this
    return routes
  }

  _makeScreenRoute(screenPath, screenId, route, screenProps) {
    const RouteScreen = route.screen
    const Screen = props => {
      var skip = false
      if (route.skipPaths) {
        route.skipPaths.forEach(r => {
          if (r === props.location.pathname.split('/')[1]) {
            skip = true
          }
        })
      }

      const allProps = Object.assign({}, props, screenProps, {
        session: this.props.session
      })
      return skip ? <div /> : <RouteScreen {...allProps} />
    }

    const routeKey = `${screenId}${screenPath}`

    return (
      <Route exact refresh key={routeKey} path={screenPath} render={Screen} />
    )
  }

  _createSectionNavigator(section) {
    return createSectionRoutes(
      section,
      this._createSectionNavigatorRoutes.bind(this)
    )
  }

  _refreshRoutes(account) {
    this._routes = []
    this._sections = []
    this._menu = []
    this._sidebar = []

    for (const sectionName in this.props.app) {
      // Look through all the app's sections and for each, build defaults if necessary
      var section = this.props.app[sectionName]
      section.name = sectionName
      section.account = account
      section.layout = section.layout || 'default'
      section.navigator = this._createSectionNavigator(section)
      this._sections.push(section)
      this._routes = this._routes.concat(section.navigator.routes)
    }
  }

  _resolve(account) {
    this._refreshRoutes(account)
    this.setState({
      loading: false,
      account: account || undefined,
      authstamp: `${Date.now()}`
    })
  }

  get menu() {
    return this._menu || {}
  }

  get routes() {
    return this._routes || []
  }

  get sidebar() {
    return this._sidebar || []
  }

  get sections() {
    return this._sections || []
  }

  renderStatic() {
    return (
      <StaticRouter
        location={this.props.route.location}
        context={this.props.route}
      >
        <div>{this.routes}</div>
      </StaticRouter>
    )
  }

  renderRoutes() {
    const dynamicRoutes = this.routes.filter(r => r && r.key.split("/").includes(":variant"))
    const staticRoutes = this.routes.filter(r => r && !r.key.split("/").includes(":variant"))

    return staticRoutes.concat(dynamicRoutes)
  }

  renderRouting() {
    return (
      <BrowserRouter>
        <Switch style={{}}>
          {this.renderRoutes()}
          {this.props.theme && this.props.theme.notFoundPageText && (
            <Route component={() => <NotFoundPage {...this.props.theme} />} />
          )}
        </Switch>
      </BrowserRouter>
    )
  }

  render() {
    if (this.props.route && !this.props.redirect) {
      return this.renderStatic()
    }

    if (!this.routes || this.routes.length === 0) {
      return <div />
    }

    if (this.props.autoRefresh) {
      this._refreshRoutes(this.state.account)
    }

    if (this.props.desktop) {
      return (
        <HashRouter>
          <Switch>{this.renderRoutes()}</Switch>
        </HashRouter>
      )
    }

    return this.renderRouting()
  }
}
