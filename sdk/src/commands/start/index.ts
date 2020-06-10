import {
  Command,
  CommandProps,
  CommandType
} from '../..'

const props: CommandProps = {
  id: "start",
  type: CommandType.PRODUCT,
  requiresScript: true,
  requiresApp: true,
  title: "Starting a new Carmel Product"
}

/**
 * 
 * @category Commands
 */
export default class Start extends Command {
  /** @internal */
  constructor() {
    super(props)
  }

  /** @internal */
  async exec() {
    const packer = await this.product?.resolvePacker(this.target, 9999, true)
    if (!packer) return 

    packer.pack((event: any) => {
      console.log(">", event)
    })
  }
}