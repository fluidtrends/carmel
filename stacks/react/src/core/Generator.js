import URL from 'url-parse'
import Container from './Container'
import * as Actions from './actions'
import * as Selectors from './selectors'
import * as Reducers from './reducers'

export default class Generator {
  constructor (props) {
    this._props = props
  }

  get props () {
    return this._props
  }

  generateSelectors (chunk, route, routeName, light) {
    if (light) {
      return { '@': { id: `${chunk.name}/${routeName}`, route, routeName } }
    }

    const hasData = Selectors.common.hasData(chunk.name, 'main')
    const data = Selectors.common.getData(chunk.name)
    const action = Selectors.common.getAction(chunk.name)
    const hasDataError = Selectors.common.hasError(chunk.name, 'main')
    const dataError = Selectors.common.getError(chunk.name)
    const isDataLoaded = Selectors.common.isDone(chunk.name)
    const isDataLoading = Selectors.common.isInProgress(chunk.name)

    return { '@': { id: `${chunk.name}/${routeName}`, route, routeName }, hasData, data, hasDataError, dataError, isDataLoaded, isDataLoading, action }
  }

  generateAction (chunk, options) {
    if (!options || !options.provider || !this.props.dataProviders[options.provider]) {
      // All actions must specify an operation and a data provider
      return
    }

    // Look up the data provider first
    const provider = this.props.dataProviders[options.provider]

    if (!provider) {
      // We want to make sure we have a valid data provider before we move on
      return
    }

    // Let's build up the operation from the data provider
    const operation = (props) => provider.operation(Object.assign({ props }, options))

    // And finally, let's use that operation to generate an action
    return (props) => Actions.common.asyncAction(`${options.chunkName}/${options.func}`, () => operation(props), Object.assign({ props }, options))
  }

  parseOperationFromURI (uri, chunk) {
    const url = new URL(uri, true)

    const type = url.hostname
    const provider = url.protocol.slice(0, -1).toLowerCase()
    const nodes = url.pathname.split('/').slice(1)
    const options = url.query
    const flavor = url.hash ? url.hash.substring(1) : 'main'
    const chunkName = (provider === 'local' && nodes.length > 0 ? nodes[0] : chunk.name)

    return { type, nodes, options, flavor, provider, chunkName }
  }

  generateActions (chunk, route, routeName, light) {
    if (light || !route || !route.operations || Object.keys(route.operations).length === 0) {
      return {}
    }

    var all = {}

    for (const operationName in route.operations) {
      // Parse the action from the URI
      var operationUri = route.operations[operationName]
      var operationHandlers = {}

      if (Array.isArray(operationUri) && operationUri.length > 1) {
        operationHandlers = operationUri[1]
        operationUri = operationUri[0]
      }

      // Here's our operation now, all parsed
      const operation = Object.assign({ func: operationName, handlers: operationHandlers, routeName, routeId: `${chunk.name}/${routeName}` }, this.parseOperationFromURI(operationUri, chunk))

      // Attempt to generate this action
      const generatedAction = this.generateAction(chunk, operation)

      if (generatedAction) {
        // Keep track of it if it was successfully generated
        all[operation.func] = Object.assign({}, { op: generatedAction }, operation, operationHandlers)

        if (Object.keys(all).length === 1) {
          // Let's track this as the initial operation
          all.startOperation = Object.assign({}, { op: generatedAction }, operation, operationHandlers)
        }
      }
    }

    return all
  }

  generateContainer (chunk, route, routeName, light) {
    const actions = Object.assign({}, this.generateActions(chunk, route, routeName, light))
    const selectors = Object.assign({}, this.generateSelectors(chunk, route, routeName, light))

    return Container(route.screen, selectors, actions)
  }

  generateReducer (chunk) {
    return Reducers.common.asyncReducer(chunk.name)
  }
}
