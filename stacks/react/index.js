import * as Errors from './src/core/errors'
import * as Cache from './src/core/cache'
import * as Styles from './src/core/styles'
import * as Config from './src/core/config'
import * as Analytics from './src/core/analytics'
import * as Providers from './src/core/providers'
import * as Reducers from './src/core/reducers'
import * as Actions from './src/core/actions'
import * as Selectors from './src/core/selectors'

import DataProvider from './src/core/DataProvider'
import Error from './src/core/Error'
import AppContainer from './src/core/AppContainer'
import Container from './src/core/Container'
import Screen from './src/core/Screen'
import Generator from './src/core/Generator'

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