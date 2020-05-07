import React, { Component } from 'react'
import URL from 'url-parse'
import { AllHtmlEntities } from 'html-entities'

export default class Screen extends Component {
  constructor (props) {
    super(props)

    this.state = { lastTransitionTimestamp: '', visible: true, progress: false }
    this._entities = new AllHtmlEntities()
    this._containerId = props['@'] ? props['@'].id : undefined
    this._onEvent = this.onEvent.bind(this)
  }

  get entities () {
    return this._entities
  }

  get containerId () {
    return this._containerId
  }

  get isContainer () {
    return (this.containerId !== undefined)
  }

  onEvent (event) {
    if (!event || !event.id) {
      return
    }

    if (event.data && event.data.handler) {
      this.handleEvent(event, event.data.handler)
      return
    }

    if (!this.props.events || !this.props.events[event.id]) {
      return
    }

    const handler = this.props.events[event.id]
    this.handleEvent(event, handler)
  }

  handleEvent (event, handler) {
    const handlerRef = new URL(handler)
    const handlerHash = handlerRef.hash ? handlerRef.hash.substring(1) : ''

    if (handlerHash) {
      // This is a function handler
      this[handlerHash] && this[handlerHash](event)
      return
    }
    const handlerType = handlerRef.protocol.slice(0, -1).toLowerCase()
    const fullPath = `${handlerRef.hostname}${handlerRef.pathname ? handlerRef.pathname : ''}`

    switch (handlerType) {
      case 'local':
        return this.handleLocalEvent(`/${fullPath}`)
      case 'system':
        return this.handleSystemEvent(`/${fullPath}`)
      default:
        return this.handleExternalEvent(`${handlerType}://${fullPath}`)
    }
  }

  handleSystemEvent (fullPath) {
  }

  handleLocalEvent (fullPath) {
  }

  handleExternalEvent (fullPath) {
  }

  triggerAnalyticsView () {
    this.props.analytics && this.props.analytics.view(this.props.path)
  }

  triggerAnalyticsEvent (event) {
    this.props.analytics && this.props.analytics.event(event)
  }

  triggerAnalyticsError (error) {
    this.props.analytics && this.props.analytics.error(error)
  }

  updateProgress (progressTitle) {
    this.setState({ progressTitle })
  }

  // UNSAFE_componentWillMount () {
  //   for (const transitionName in this.props.transitions) {
  //     // Inject all transitions into this screen
  //     this.injectTransition(this.props.transitions[transitionName])
  //   }
  // }

  // UNSAFE_componentWillUnmount () {
  //   this._stopSubscriptions()
  // }

  componentDidMount () {
    this._startSubscriptions()

      // Automatically attempt to retrieve the main data, if possible and if desired
    if (this.props.startOperationsOnMount && this.props.startOperation) {
      this.props.startOperation()
    }
  }

  _stopSubscriptions () {
    if (!this.props.subscriptions) {
      return
    }

    this.props.subscriptions.forEach((subscription) => {
      this.stopSubscription(subscription)
    })
  }

  _startSubscriptions () {
    if (!this.props.subscriptions) {
      return
    }

    this.props.subscriptions.forEach((subscription) => {
      this.startSubscription(subscription)
    })
  }

  stopSubscription (subscription) {
    this.state[[`${subscription}Stream`]] && this.state[`${subscription}Stream`].off()
  }

  subscriptionArgs (subscription) {
    return {}
  }

  startSubscription (subscription) {
    const self = this
    const args = this.subscriptionArgs(subscription)

    if (!this.props[subscription] || !self[`${subscription}Success`]) {
      return
    }

    setTimeout(() => {
      this.props[subscription](Object.assign({}, args, {
        onStarted: (subscriptionStream) => {
          self.setState({ [`${subscription}Stream`]: subscriptionStream })
        },
        onReceivedData: (data) => {
          self[`${subscription}Success`](data || {})
        }}))
    }, 300)
  }

  injectTransition (transition) {
    this.transitions = this.transitions || {}
    this.transitions[transition.name] = (data) => {
      this.transition(transition, data)
    }
  }

  transition (transition, data) {
    const timeSinceLastTransition = Date.now() - this.state.lastTransitionTimestamp
    if (this.state.lastTransitionTimestamp && timeSinceLastTransition < 500) {
      // Ignore transition
      return
    }

    // Turn off the progress
    if (this.state.progress) {
      this.setState({ progress: false })
    }

    // Timestamp this transition
    this.setState({ lastTransitionTimestamp: Date.now(), visible: false })
    this[`${transition.type.toLowerCase()}Transition`] && this[`${transition.type.toLowerCase()}Transition`](transition, Object.assign({}, data, { transition }))
  }

  _operationDidFinish (name, data, operation, handler) {
    if (typeof operation[handler] !== 'string') {
      // We only handle simple handlers at the moment
      return
    }

    // Let's see what we have as a handler
    const parts = operation[handler].split(':')

    if (parts && parts.length === 2) {
      // Perform the transition
      const transition = `${parts[1].charAt(0).toUpperCase()}${parts[1].substring(1)}`
      this.transitions[`show${transition}`] && this.transitions[`show${transition}`]({ [operation.flavor]: data })
      return
    }

    if (parts && parts.length === 1) {
      // Execute the specified operation
      this[operation[handler]] ? this[operation[handler]](data) : (this.props[operation[handler]] && this.props[operation[handler]](data))
    }
  }

  isForeignOperation (operation) {
    const foreign = (this.containerId !== operation.routeId)
    return foreign
  }

  operationDidFinish (name, data, error, operation) {
    if (operation && operation.onError && error && error[operation.flavor]) {
      return this._operationDidFinish(name, error[operation.flavor], operation, 'onError')
    }

    if (operation && operation.onSuccess && (!error || !error[operation.flavor])) {
      // The operation response is successful
      return this._operationDidFinish(name, data ? data[operation.flavor] || {} : {}, operation, 'onSuccess')
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  logout () {
    this.props.onUserLogout && this.props.onUserLogout()
  }

  login (account) {
    this.props.onUserLoggedIn && this.props.onUserLoggedIn(account)
  }

  didLogout () {
    if (!this.props.permissions || !this.props.permissions.publicRedirect) {
      return
    }

    this.triggerRedirect(this.props.permissions.publicRedirect)
  }

  didLogin () {
    if (!this.props.permissions || !this.props.permissions.privateRedirect) {
      return
    }

    this.triggerRedirect(this.props.permissions.privateRedirect)
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    if (this.props.account && !nextProps.account) {
      this.didLogout()
    } else if (!this.props.account && nextProps.account) {
      this.didLogin()
    }

    const operation = (nextProps.action ? this.props[`@${nextProps.action()}`] : undefined)

    if (operation && !this.isForeignOperation(operation) && this.props.isDataLoading() && nextProps.isDataLoaded()) {
      // Looks like an operation just finished, so let's trigger the callback
      this.operationDidFinish(nextProps.action(), nextProps.data(), nextProps.dataError(), operation)
    }
  }

  render () {
    if (this.state.progress && this.renderProgress) {
      return this.renderProgress()
    }

    if (this.props.isDataLoading && this.props.isDataLoading() && this.renderDataLoading) {
      // We're loading the data still
      return this.renderDataLoading()
    }

    if (this.props.hasDataError && this.props.hasDataError() && this.renderDataError) {
      // Looks like there's an error that we need to handle
      return this.renderDataError(this.props.dataError())
    }

    if (this.props.hasData && !this.props.hasData() && this.renderDataDefaults) {
      // This screen does not have any data to render
      return this.renderDataDefaults()
    }

    if (this.props.hasData && this.props.hasData() && this.renderData) {
      return this.renderData(this.props.data())
    }

    return <div/>
  }
}
