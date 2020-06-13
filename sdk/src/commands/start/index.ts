import {
  Command,
  CommandProps,
  CommandType
} from '../..'

import open from 'open'

const props: CommandProps = {
  id: "start",
  type: CommandType.PRODUCT,
  requiresScript: true,
  requiresApp: true,
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
    console.log('done?')
    // const { packer, workspace } = await this.product?.resolvePacker(this.target, 9999, true)
    // if (!packer) return 

    // await open(workspace.path)

    // packer.pack((event: any) => {
      // console.log("Chunky says: ", event)
    // })
  }
}