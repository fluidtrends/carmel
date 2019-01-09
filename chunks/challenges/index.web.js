import config from './chunk.json'
import * as screens from './screens/index.web'
import additionalConfig from './screens/additionalConfig'

const chunk = {
  screens,
  ...config,
  ...additionalConfig
}

export default chunk
