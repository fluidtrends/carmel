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

    // Look up the template
    const templateId = this.arg("template")
    const name = this.arg("name")

    // Looks good, let's create the product structure from this template
    await this.product?.createFromTemplate(templateId, name)

    if (!this.product?.exists) {
      throw Errors.ProductCannotCreate('the template could not be installed')
    }

    this.session?.manifest?.load()
    this.session?.manifest?.update({
      productId: this.product!.id
    })
  }
}
