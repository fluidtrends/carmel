import { Command, CommandProps, CommandType } from '../..'

const props: CommandProps = {
  id: 'deploy',
  type: CommandType.PRODUCT,
  requiresScript: true,
  requiresApp: true,
}

/**
 *
 * @category Commands
 */
export default class Deploy extends Command {
  /** @internal */
  constructor(p?: CommandProps) {
    super(Object.assign({}, props, p))
  }

  /** @internal */
  async exec() {
    if (!this.product?.packer) return

    await this.product?.packer.pack((event: any) => {
      console.log(event)
    })

    const deployment = await this.product?.code.deploy(this.target)

    this.product.manifest.load()
    this.product.manifest.data.append({
      deployments: [deployment]
    })

    this.product.manifest.save()
  }
}
