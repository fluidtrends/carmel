import {
  Command,
  CommandArg,
  ISession,
  Errors,
  CommandProps,
  CommandType
} from '../..'

const props: CommandProps = {
  id: "status",
  type: CommandType.WORKSPACE,
  title: "Checking the status of your Carmel Product"
}

/**
 * 
 * @category Commands
 */
export default class Status extends Command {
  /** @internal */
  constructor() {
    super(props)
  }

  /** @internal */
  async exec() {
    console.log("STATUS OK")
  }
}