import * as Errors from './src/errors'
import * as Cache from './src/cache'
import * as Styles from './src/styles'
import * as Config from './src/config'
import * as Analytics from './src/analytics'
import * as Providers from './src/providers'
import * as Reducers from './src/reducers'
import * as Actions from './src/actions'
import * as Selectors from './src/selectors'

import DataProvider from './src/DataProvider'
import Error from './src/Error'
import AppContainer from './src/AppContainer'
import Container from './src/Container'
import Screen from './src/Screen'
import Generator from './src/Generator'

import merge from 'deepmerge'

function extendChunk (original, another) {
  return merge.all([original, another])
}

export { 
  Errors, 
  Error, 
  Config, 
  Reducers, 
  Actions, 
  Selectors, 
  Generator, 
  Screen, 
  Container, 
  AppContainer, 
  Providers, 
  Cache, 
  Styles, 
  Analytics, 
  DataProvider, 
  extendChunk 
}