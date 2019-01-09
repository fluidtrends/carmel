import config from './chunk.json'
import * as screens from './screens/index.web'
import additionalConfig from './screens/additionalConfig'

config.routes = { ...config.routes, ...additionalConfig.routes }

const chunk = {
  screens,
  ...config
}

export default chunk
