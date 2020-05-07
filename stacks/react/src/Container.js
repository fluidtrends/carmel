import { connect } from 'react-redux'

function mapStateToProps (selectors) {

  return (state, props) => {
    if (!props.chunkName || !state[props.chunkName]) {
      return props
    }

    var newProps = {}
    for (let name in selectors) {
      const selector = selectors[name]

      if (name === '@') {
        newProps[name] = Object.assign({}, selector)
        continue
      }

      const selectorProps = (options) => Object.assign(options || {}, { _route: props })
      const result = (options) => selector(state, selectorProps(options))
      newProps[name] = result
    }

    return newProps
  }
}

function mapDispatchToProps (actions) {
  return (dispatch, props) => {
    var newProps = {}
    for (let action in actions) {
      const operation = actions[action].op
      const actionProps = (options) => Object.assign(options || {}, { _route: props })
      newProps[action] = (options) => dispatch(operation(actionProps(options)))

      if (action !== 'startOperation') {
        newProps[`@${action}`] = Object.assign({}, actions[action])
      }
    }

    return newProps
  }
}

export default function (component, selectors, actions) {
  return connect(
    mapStateToProps(selectors),
    mapDispatchToProps(actions)
  )(component)
}
