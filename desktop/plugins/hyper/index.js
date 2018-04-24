exports.middleware = (store) => (next) => (action) => {
  if (action.type === 'SESSION_ADD_DATA') {
    const { data } = action
    // ipc.of.world.emit(
    //       'message'
    //   )
    next(action)
  } else {
    next(action)
  }
}

exports.decorateTerm = (Term, { React }) => {
  return class extends React.Component {
    constructor (props, context) {
      super(props, context)
    }

    render () {
      return React.createElement(Term, Object.assign({}, this.props, {
      }))
    }
  }
}
