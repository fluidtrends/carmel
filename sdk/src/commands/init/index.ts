import {
  Command,
  Errors,
  CommandProps,
  CommandType
} from '../..'

const props: CommandProps = {
  id: "init",
  requiredArgs: ["name", "stack"],
  type: CommandType.WORKSPACE,
  title: "Creating a new Carmel Product"
}

/**
 * 
 * @category Commands
 */
export default class Init extends Command {
  /** @internal */
  constructor() {
    super(props)
  }

  /** @internal */
  async exec() {
    if (this.product?.exists) {
      // Check to make sure we're even allowed to attempt this
      throw Errors.ProductAlreadyExists()
    }

    const stack = this.arg('stack')
    const name = this.arg('name')

    this.product?.create({ name, stack })
    this.product?.dir.dir('chunks')?.make()
  }
}
