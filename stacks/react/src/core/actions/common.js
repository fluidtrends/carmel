export const type = (name, state) => `@@Carmel/${state.toUpperCase()}/${name}`
export const timestamp = () => Date.now()

export const start = (name, options) => ({ 
  type:  type(name, "start"), 
  timestamp: timestamp(), 
  flavor: options.flavor, 
  provider: options.provider 
})

export const error = (name, error, options) => ({ 
  type:  type(name, "error"), 
  flavor: options.flavor, 
  provider: options.provider, 
  error, 
  timestamp: timestamp() 
})

export const ok = (name, data, options) => ({ 
  type:  type(name, "ok"), 
  data, 
  flavor: options.flavor, 
  provider: options.provider, 
  timestamp: timestamp() 
})

export function asyncAction (name, operation, options) {
  if (options.flavor) {
    // Let's resolve the inner flavor, if necessary
    var flavor = options.flavor.split('/')
    if (flavor.length > 0 && options.props[flavor[1]]) {
      options.flavor = [flavor[0], options.props[flavor[1]]].join('/')
    }
  }

  return (dispatch) => {
    dispatch(start(name, options))
    operation().
      then(data => dispatch(ok(name, data, options))).
      catch(err => dispatch(error(name, err, options)))
  }
}