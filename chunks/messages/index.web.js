import config from './chunk.json'
import * as screens from './screens/index.web'

const chunk = {
    screens,
    ...config
}

export default chunk
