import {
  Command,
  ISession,
  CommandProps,
  CommandType,
  CommandArg
} from '../..'

const props: CommandProps = {
  id: "start",
  type: CommandType.PRODUCT,
  requiresScript: true,
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
    // Execute the required script
    return this.runScript()
  }
}