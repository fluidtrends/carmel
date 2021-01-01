import { Command, CommandProps, CommandType } from '../..'

const props: CommandProps = {
  id: 'content',
  type: CommandType.PRODUCT,
  requiresScript: true,
  requiresApp: true,
}

/**
 *
 * @category Commands
 */
export default class Content extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  /** @internal */
  async exec() {  
    // const cover = this.arg("cover")
    // const name = this.arg("name")
    // const generate = this.arg("generate")

    // if (cover && name && generate) {
    //     await this.product?.generateCover(name)
    // }
  }
}
