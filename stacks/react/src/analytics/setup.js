import ReactGA from 'react-ga'

export let isInitialized = false
export let isGoogle = false

export function initialize ({ type, key }) {
  if (!type || !key || type.toLowerCase() !== 'google') {
    return
  }

  ReactGA.initialize(key)
  isInitialized = true
  isGoogle = true
}
