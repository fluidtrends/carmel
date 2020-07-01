import { Command, CommandProps, CommandType } from '../..'

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
export default class Make extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  /** @internal */
  async exec() {
    if (!this.product?.packer) return

    await this.product?.packer.pack((event: any) => {
      console.log(event)
    })
  }
}
