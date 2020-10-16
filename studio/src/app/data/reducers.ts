import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { State } from '../types'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { 
  UNSELECT_PRODUCT, 
  UNSELECT_CHALLENGE,
  TOGGLE_VAULT_STATUS,  
  LOAD_SELECTED_PRODUCT,
  SELECT_PRODUCT, 
  SELECT_CHALLENGE,
  INITIALIZE,
  REGISTER
} from './actions'

const products = (state: any = [], action: any) => {
  switch(action.type) {
    case INITIALIZE: 
      return action.data.products
    default:
      return state
  }
}

const product = (state: any = {}, action: any) => {
  switch(action.type) {
    case INITIALIZE: 
      return action.data.product || {}
    case SELECT_PRODUCT: 
      return action.product
    case UNSELECT_PRODUCT: 
      return {}
    case LOAD_SELECTED_PRODUCT:
      return {
        ...state, 
      }
    default:
      return state
  }
}

const challenge = (state: any = {}, action: any) => {
  switch(action.type) {
    case SELECT_CHALLENGE: 
      return action.challenge
    case UNSELECT_CHALLENGE: 
      return {}
    default:
      return state
  }
}

const env = (state: any = {}, action: any) => {
  switch(action.type) {
    case INITIALIZE: 
      return action.data.env
    default:
      return state
  }
}


const profile = (state: any = {}, action: any) => {
  switch(action.type) {
    case INITIALIZE: 
      return action.data.profile
    default:
      return state
  }
}

const session = (state: any = {}, action: any) => {
  switch(action.type) {
    case INITIALIZE: 
      return action.data.session
    case REGISTER: 
      return { user: action.user }
    case TOGGLE_VAULT_STATUS:
      return { isVaultLocked: !state.session }
    default:
      return state
  }
}

export const initializeReducers = (history: any) => persistReducer({
   key: 'carmel',
   storage,
 }, 
  combineReducers({
    router: connectRouter(history),
    products,
    product,
    challenge,
    session,
    profile,
    env,
  })
)