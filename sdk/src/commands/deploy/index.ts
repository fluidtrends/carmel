import { Command, CommandProps, CommandType } from '../..'

const props: CommandProps = {
  id: 'deploy',
  type: CommandType.PRODUCT,
  requiresScript: true,
  requiresApp: true,
}

/**
 *
 * @category Commands
 */
export default class Deploy extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  /** @internal */
  async exec() {
    await this.product?.code.deploy(this.target)
  }
}
