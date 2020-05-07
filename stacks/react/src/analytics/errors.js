import ReactGA from 'react-ga'
import { isGoogle, isInitialized } from './setup'

export function error (props) {
  if (!isInitialized || !isGoogle || !props) {
    return
  }

  ReactGA.exception(props)
}
