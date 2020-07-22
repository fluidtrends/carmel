import { Command, CommandProps, CommandType } from '../..'
import pm2 from 'pm2'

const props: CommandProps = {
  id: 'start',
  type: CommandType.PRODUCT,
  longRunning: false,
  requiresScript: true,
  requiresApp: true,
}

/**
 *
 * @category Commands
 */
export default class Stop extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  async stopServer(id: string) {
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          reject(err)
          return
        }

        pm2.delete(id, (err) => {
          if (err) {
            pm2.disconnect()
            reject(err)
            return
          }
          resolve()
        })
      })
    })
  }

  /** @internal */
  async exec() {
    const serverId = `start/${this.product!.id}`
    const serverDir = this.product?.session?.dir?.dir('servers')?.make()?.dir(serverId)

    if (!serverDir?.exists) {
        console.log('not started')
        return 
    }

    await this.stopServer(serverId)
    serverDir.remove()
  }
}
