import { IRepo, ICode, AccessTokenType, IDir } from '..'
import NodeGit from 'nodegit'

/**
 *
 */
export class Repo implements IRepo {
  /** @internal */
  protected _code: ICode

  /** @internal */
  protected _local?: NodeGit.Repository

  /** @internal */
  protected _remote?: any

  /** @internal */
  protected _owner?: string

  /** @internal */
  protected _name?: string

  /** @internal */
  protected _dir?: IDir

  /**
   *
   * @param code
   */
  constructor(code: ICode) {
    this._code = code
  }

  /**
   *
   */
  get code() {
    return this._code
  }

  /**
   *
   */
  get local() {
    return this._local
  }

  /**
   *
   */
  get remote() {
    return this._remote
  }

  /**
   *
   */
  get owner() {
    return this._owner
  }

  /**
   *
   */
  get dir() {
    return this._dir
  }

  /**
   *
   */
  get name() {
    return this._name
  }

  /**
   *
   */
  get isOpen() {
    return this._local !== undefined
  }

  /**
   *
   */
  get hasRemote() {
    return this._remote !== undefined
  }

  /**
   *
   */
  get isRemoteForeign() {
    return this.owner !== this.code.user?.login
  }

  /**
   *
   */
  async open() {
    // try {
    //   this._local = this.dir?.exists
    //     ? await NodeGit.Repository.open(this.dir!.path!)
    //     : undefined
    // } catch {}
  }

  /**
   *
   */
  async loadRemote() {
    // try {
    //   this._remote =
    //     this.code.service &&
    //     (await this.code.service.repos.get({
    //       owner: this.owner!,
    //       repo: this.name!,
    //     }))
    // } catch {}
  }

  /**
   *
   */
  async commit(paths: string[], comment: string) {
    // if (!this.isOpen) return

    // const signature = NodeGit.Signature.now(
    //   this.code.user?.name!,
    //   this.code.user?.email!
    // )

    // await this.local?.createCommitOnHead(paths, signature, signature, comment)
  }

  /**
   *
   */
  async push() {
    // if (!this.isOpen) return

    // let remote = await this.local?.getRemote('origin')

    // if (!remote) {
    //   remote = await NodeGit.Remote.create(
    //     this.local!,
    //     'origin',
    //     `git@github.com:${this.owner}/${this.name}.git`
    //   )
    // }

    // await remote?.push(['refs/heads/master:refs/heads/master'], {
    //   callbacks: {
    //     credentials: this.code.credentials,
    //   },
    // })
  }

  /**
   *
   */
  async setupHosting() {
    // const cwd = process.cwd()
    // process.chdir(this.dir!.path!)

    // const vercel = this.code.product.session?.authenticator.providers.get(
    //   AccessTokenType.VERCEL
    // )

    // const name = `carmel-${this.code.product.id}`
    // const deployment: any = await vercel?.push(name, this)

    // process.chdir(cwd)
    // return deployment
  }

  /**
   *
   */
  async initialize() {
    // Always start with a fresh location
    // this._dir = this.code?.dir?.dir('deploy')?.make()

    // this._owner =
    //   this.code?.product?.data?.deployRepo?.owner || this.code.user?.login
    // this._name = this.code?.product?.data?.deployRepo?.name || this.owner

    // await this.open()
    // await this.loadRemote()

    // if (!this.hasRemote && !this.isRemoteForeign) {
    //   // Create the remote repo, if possible
    //   await this.code.service.repos.createForAuthenticatedUser({
    //     name: this.name,
    //   })
    // }

    // if (this.isOpen) {
    //   // Let's get outta here
    //   return
    // }

    // try {
    //   // Initialize it, if necessary
    //   this._local = !this.hasRemote
    //     ? await NodeGit.Repository.init(this.dir!.path!, 0)
    //     : // Clone it
    //       await NodeGit.Clone.clone(
    //         `git@github.com:${this.owner}/${this.name}.git`,
    //         this.dir!.path!,
    //         {
    //           fetchOpts: {
    //             callbacks: {
    //               certificateCheck: () => 0,
    //               credentials: this.code.credentials,
    //             },
    //           },
    //         }
    //       )
    //   await this.open()
    // } catch {}
  }
}
