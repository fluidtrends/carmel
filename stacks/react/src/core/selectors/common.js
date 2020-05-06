import { createSelector } from 'reselect'

const stateItem = (name, flavor) => (state, props) => {
  const value = state[name][flavor]
  return value
}

export const get = (name, flavor) => createSelector(stateItem(name, flavor),
                         (data) => (typeof data === 'function' ? data() : data))

export const has = (name, flavor) => createSelector(stateItem(name, flavor),
                         (data) => (data != null && data != undefined && data))

export const hasData = (name) => has(name, "data")
export const hasError = (name) => has(name, "error")

export const getTimestamp = (name) => get(name, "timestamp")
export const getData = (name) => get(name, "data")
export const getError = (name) => get(name, "error")
export const getAction = (name) => get(name, "action")

export const isDone = (name) => has(name, "done")
export const isInProgress = (name) => has(name, "inProgress")
