import { Command, CommandProps, CommandType } from '../..'

const props: CommandProps = {
  id: 'deploy',
  type: CommandType.PRODUCT,
  requiresScript: true,
  requiresAuth: true,
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
    const status = await this.product?.code.status()
    console.log(status)
  }
}
