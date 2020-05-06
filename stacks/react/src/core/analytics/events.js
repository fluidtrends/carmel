import ReactGA from 'react-ga'
import { isGoogle, isInitialized } from './setup'

export function event (props) {
  if (!isInitialized || !isGoogle || !props) {
    return
  }

  ReactGA.event(props)
}
