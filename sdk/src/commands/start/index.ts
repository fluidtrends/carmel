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
  async exec(session: ISession, args?: CommandArg[]) {
    // Execute the required script
    return await this.script?.exec(args)
  }
}