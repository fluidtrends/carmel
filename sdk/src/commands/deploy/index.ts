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

    this.product.manifest.load()
    let deployments = this.product.manifest.data.json().deployments || []

    const deployment = await this.product?.code.deploy(this.target)
    deployments.push(deployment)

    this.product.manifest.data.append({
      deployments
    })

    this.product.manifest.save()
  }
}
