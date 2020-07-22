import { Command, CommandProps, CommandType } from '../..'

const props: CommandProps = {
  id: 'start',
  type: CommandType.PRODUCT,
  longRunning: true,
  requiresScript: true,
  requiresApp: true,
}

/**
 *
 * @category Commands
 */
export default class Start extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  /** @internal */
  async exec() {
    if (!this.product?.packer) return

    await this.product?.packer.pack((event: any) => {
      console.log('Chunky says: ', event)
    })

    console.log("port:", this.product.packerPort)
  }
}
