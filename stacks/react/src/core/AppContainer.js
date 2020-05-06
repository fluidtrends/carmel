import React, { Component } from 'react'
import { Provider } from 'react-redux'

import DataStore from './store'
import Generator from './Generator'

import * as Errors from './errors'
import * as Providers from './providers'
import * as Analytics from './analytics'


export default class AppContainer extends Component {
  constructor (props) {
    super(props)

    // Setup all the data providers
    this._initializeDataProviders(Object.assign({}, Providers, this.props.providers), props.env)

    // Create a generator for data injection
    this._generator = new Generator(Object.assign({ dataProviders: this.dataProviders }, props))

    // Parse all the app chunks
    this._parseChunks()

    // Initialize the store with custom app reducers
    this.state = { store: DataStore(this.reducers, { logging: props.env !== 'production' }) }

    // Initialize the analytics engine
    this._initializeAnalytics()
  }

  _initializeAnalytics () {
    // Initialize with the given props
    if (!this.props.info.analytics) {
      return
    }

    try {
      Analytics.initialize(this.props.info.analytics)
    } catch (e) {
      // Absorb issues here but TODO make this better
    }
  }

  _initializeDataProviders (pool, env) {
    if (!pool) {
      // Ignore empty provider pools
      return
    }

    const supportedProviders = Object.keys(pool)
    this._dataProviders = this._dataProviders || {}
    supportedProviders.forEach(providerName => {
      // The providers initialization can be customized globally
      const providerOptions = this.provisioning[providerName.toLowerCase()] || {}
      const provider = new pool[providerName](Object.assign({}, providerOptions, { env }))
      this._dataProviders[providerName.toLowerCase()] = provider
    })
  }

  get analytics () {
    if (!Analytics.isInitialized) {
      return
    }

    return Analytics
  }

  get provisioning () {
    return this.props.provisioning || {}
  }

  get dataProviders () {
    return this._dataProviders
  }

  get generator () {
    return this._generator
  }

  get app () {
    return React.cloneElement(this.props.children, {
      chunks: this.chunks,
      env: this.props.env,
      provisioning: this.props.provisioning,
      analytics: this.analytics,
      strings: this.props.strings
    })
  }

  get chunks () {
    return this._chunks
  }

  _parseChunks () {
    this._reducers = {}

    if (!this.props.chunks) {
      return
    }

    for (let chunkName in this.props.chunks) {
      const chunk = this.props.chunks[chunkName]
      this._reducers = Object.assign(this._reducers, { [chunk.name]: this.generator.generateReducer(chunk) })

      if (chunk.routes) {
        for (let routeName in chunk.routes) {
          const route = chunk.routes[routeName]
          chunk.routes[routeName].screen = chunk.screens[routeName]

          if (route.screen) {
            // Resolve containers
            const light = (!route.operations && !route.selectors)
            chunk.routes[routeName].screen = this.generator.generateContainer(chunk, route, routeName, light)
          }

          // chunk.routes[routeName].screen = (
          //   <TransitionGroup>
          //     { chunk.routes[routeName].screen }
          //   <TransitionGroup/>)
        }
      }

      this._chunks = this._chunks || {}
      this._chunks[chunkName] = chunk
    }
  }

  get reducers () {
    return this._reducers
  }

  enableGlobalErrorHandler () {
    // const self = this
    // ErrorUtils.setGlobalHandler((e, isFatal) => {
    //   // Extract a meaningful stack trace
    //   const stack = ErrorStackParser.parse(e)
    //
    //   // Notify the app that an error has occured
    //   self.setState({ error: e, isErrorFatal: isFatal, errorStack: stack })
    // })
  }

  // UNSAFE_componentDidMount () {
  //   // this.enableGlobalErrorHandler()
  // }

  render () {
    if (React.Children.count(this.props.children) !== 1) {
      throw new Errors.UNABLE_TO_LOAD_APP()
    }

    if (!this.chunks) {
      throw new Errors.UNABLE_TO_LOAD_CHUNKS()
    }

    if (this.props.autoRefresh) {
      this._parseChunks()
    }

    return (
      <Provider store={this.state.store}>
        { this.app }
      </Provider>
    )
  }
}
