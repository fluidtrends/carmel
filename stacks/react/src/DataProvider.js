import * as Errors from './errors'

export default class DataProvider {
  constructor (props) {
    this._props = Object.assign({}, this.defaults, props)
  }

  get defaults () {
    return {}
  }

  get props () {
    return this._props
  }

  operation (options) {
    if (!options || !options.type) {
      // We require a type for each operation
      return Promise.reject(Errors.UNDEFINED_OPERATION())
    }

    // Let's check the type of operation we want to execute
    const type = options.type.toLowerCase()
    var executor = this[`${type.toLowerCase()}`]

    if (!executor) {
      // Looks like we don't support such operation types
      return Promise.reject(Errors.UNDEFINED_OPERATION())
    }

    // Bind first
    executor = executor.bind(this)

    // Resolve the nodes
    const nodes = (options.nodes ? options.nodes.map(node => (node.charAt(0) === ':' ? (options.props[node.substring(1)] || node) : node)) : [])

    options.props && delete options.props._route

    // We should be able to execute it now
    return executor({ nodes, options: options.options || {}, props: options.props || {} })
  }
}
