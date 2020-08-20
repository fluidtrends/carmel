import { Command, CommandProps, CommandType } from '../..'

import getPort from 'get-port'
import express from 'express'
import http from 'http'
import open from 'open'

const props: CommandProps = {
  id: 'make',
  type: CommandType.PRODUCT,
  requiresScript: true,
  requiresApp: true,
}

/**
 *
 * @category Commands
 */
export default class Preview extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  /** @internal */
  async exec() {
    const serverPath = this.product!.cacheDir!.dir('.web')!.path!
    const app = express()

    app.use('/', express.static(serverPath))

    const port = await getPort()

    const server = new http.Server(app)

    await new Promise((done) => {
      server.listen(port, async () => {
        await open(`http://0.0.0.0:${port}/`)
      })
    })
  }
}
