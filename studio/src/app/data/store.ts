import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { initializeReducers } from './reducers'

export const history = createHashHistory({
    hashType: 'slash',
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
})

export const initializeStore = (preloadedState: any) => {
    const store = createStore(
        initializeReducers(history),
        preloadedState,
        compose(applyMiddleware(
            routerMiddleware(history)
        ))
    )
    
    return store
}