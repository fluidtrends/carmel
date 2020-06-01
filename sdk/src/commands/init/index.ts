import {
  Command,
  Errors,
  CommandProps,
  CommandType
} from '../..'

import fs from 'fs'
import path from 'path'

const props: CommandProps = {
  id: "init",
  requiredArgs: ["quest"],
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
    const quest = this.arg('quest')

    console.log(quest)
  }
}
