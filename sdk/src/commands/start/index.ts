import { Command, CommandProps, CommandType } from '../..'

import open from 'open'

const props: CommandProps = {
  id: 'start',
  type: CommandType.PRODUCT,
  longRunning: true,
  requiresScript: true,
  requiresApp: true,
}

/**
 *
 * @category Commands
 */
export default class Start extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  /** @internal */
  async exec() {
    const { packer, workspace } = await this.product?.resolvePacker(
      this.target,
      true
    )

    if (!packer) return

    await open(workspace.path)

    await packer.pack((event: any) => {
      console.log('Chunky says: ', event)
    })
  }
}
