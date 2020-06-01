import {
  Command,
  Errors,
  CommandProps,
  CommandType
} from '../..'

const props: CommandProps = {
  id: "init",
  requiredArgs: ["name", "template"],
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

    // Const check on the template
    const templateId = this.arg('template')

    // And let's see if it loads
    const template = await this.session?.findTemplate(templateId, true)
    
    console.log("using template:", template)
  }
}
