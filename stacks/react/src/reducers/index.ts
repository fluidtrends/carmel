import { combineReducers } from 'redux'

// Load common reducers
import auth from './auth'
import * as common from './common'

const commonReducers = { auth }

// Create the root reducer
const reducers = (appReducers: any) => combineReducers(Object.assign(commonReducers, appReducers))

export { auth, common }
export default reducers
