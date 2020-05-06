import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware  from 'redux-promise'
import thunkMiddleware    from 'redux-thunk'
import createLogger       from 'redux-logger'
import reducers           from '../reducers'

// Prepare the app middleware for store injection
const middlewareWithLogging = applyMiddleware(thunkMiddleware, promiseMiddleware, createLogger())
const middleware = applyMiddleware(thunkMiddleware, promiseMiddleware)

// Create the store from the reducers and middleware
const store = (appReducers, options) => createStore(reducers(appReducers), compose(options.logging ? middlewareWithLogging : middleware))

// Export the store to be used by the entire app
export default store
