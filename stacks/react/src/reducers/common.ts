export const asyncReducer = (name: string) => {
  return (state: any = {}, action: any) => {
    if (!action || Object.keys(action).length === 0 || !action.type) {
      // We don't tolerate empty actions
      return state
    }

    // Let's see what kind of action this is
    const [source, actionState, chunkName, actionName] = action.type.split('/')

    if (source.toLowerCase() != '@@carmel') {
      // We only recognize framework actions
      return state
    }

    if (!chunkName || (name.toLowerCase() != chunkName.toLowerCase())) {
      // We want to ignore foreign actions
      return state
    }

    // Figure out the flavor
    const flavor = (!action.flavor ? ['main'] : (action.flavor.split('/') || ['main']))
    const newErrorFlavor = (flavor.length > 1 ? { [flavor[1]]: action.error } : action.error)
    const newDataFlavor = (flavor.length > 1 ? { [flavor[1]]: action.data } : action.data)

    // The action timestamp
    const timestamp = action.timestamp

    // The data provider
    const provider = action.provider

    // Let's work on the new state
    var newState = { flavor: action.flavor, timestamp, provider, inProgress: false, done: true, action: actionName }
    var data = Object.assign({}, state.data)
    var error = Object.assign({}, state.error)

    switch (actionState.toLowerCase()) {
      case 'start':
        return Object.assign({}, newState, { inProgress: true, done: false, data, error })

      case 'error':
        if (newErrorFlavor) {
          error[flavor[0]] = newErrorFlavor
        }
        return Object.assign({}, newState, Object.keys(error).length > 0 ? { error } : {})

      case 'ok':
        if (newDataFlavor) {
          data[flavor[0]] = newDataFlavor
        }
        return Object.assign({}, newState, Object.keys(data).length > 0 ? { data } : {})

      default:
    }

    return state
  }
}