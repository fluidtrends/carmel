import {
  Command,
  Errors,
  CommandProps,
  CommandType
} from '../..'

const props: CommandProps = {
  id: "init",
  requiredArgs: [],
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

    const stack = await this.product?.session?.index.installArchive({ id: "jayesse", section: "stacks" })
    const packer = await this.product?.session?.index.installArchive({ id: "papanache", section: "packers" })
    
    this.product?.create({ stack, packer })
    this.product?.dir.dir('chunks')?.make()
  }
}
