import { Command, CommandProps, CommandType } from '../..'
// import browserSync from 'browser-sync'

const props: CommandProps = {
  id: 'make',
  type: CommandType.PRODUCT,
  requiresScript: true,
  requiresApp: true,
}

/**
 *
 * @category Commands
 */
export default class Preview extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  /** @internal */
  async exec() {
    // const browser = browserSync.create()
    // const server = this.product!.cacheDir!.dir('.web')!.path!
    // browser.init({ server })
    // browser.reload('index.html')
  }
}
