import ReactGA from 'react-ga'
import { isGoogle, isInitialized } from './setup'

export function view (path) {
  if (!isInitialized || !isGoogle || !path) {
    return
  }
  ReactGA.pageview(path)
}
