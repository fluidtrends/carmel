import {
  ICode,
  IAuthKey,
  IKeyStore,
  User,
  IProduct,
  Target,
  IDir,
  Repo,
  IRepo,
  AccessTokenType,
} from '..'

import { Octokit } from '@octokit/rest'

/**
 *
 */
export class Code implements ICode {
  /** @internal */
  protected _product: IProduct

  /** @internal */
  protected _keystore?: IKeyStore

  /** @internal */
  protected _service?: any

  /** @internal */
  protected _keys?: IAuthKey[]

  /** @internal */
  protected _key?: IAuthKey

  /** @internal */
  protected _credentials?: any

  /** @internal */
  protected _user?: User

  /** @internal */
  protected _dir?: IDir

  /** @internal */
  protected _deployRepo: IRepo

  /**
   *
   * @param product
   */
  constructor(product: IProduct) {
    this._product = product
    this._deployRepo = new Repo(this)
  }

  /**
   *
   */
  get user() {
    return this._user
  }

  /**
   *
   */
  get deployRepo() {
    return this._deployRepo
  }

  /**
   *
   */
  get keys() {
    return this._keys
  }

  /**
   *
   */
  get key() {
    return this._key
  }

  /**
   *
   */
  get keystore() {
    return this._keystore
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
  get credentials() {
    return this._credentials
  }

  /**
   *
   */
  get service() {
    return this._service
  }

  /**
   *
   */
  get product() {
    return this._product
  }

  /**
   *
   */
  async initialize() {
    // this._keystore = this.product.session?.keystore
    // this._user = this.product.session?.user!
    // this._keys = this.product.session?.keys(AccessTokenType.GITHUB) || []
    // this._key = this.keys![0]
    this._dir = this.product.dir

    // try {
    //   this._credentials = (url: string, username: string) =>
    //     NodeGit.Cred.sshKeyNew(
    //       username,
    //       this.key?.files.get('public.ssh')?.path!,
    //       this.key?.files.get('private.ssh')?.path!,
    //       ''
    //     )
    // } catch {}

    // try {
    //   this._service = new Octokit({
    //     auth: this.product?.session?.token(AccessTokenType.GITHUB),
    //   })
    // } catch {}

    await this.deployRepo.initialize() 
  }

  /**
   *
   */
  async setupDeployment() {
    await this.deployRepo?.setupHosting()
  }

  /**
   *
   */
  async deploy(target: Target) {
    await this.setupDeployment()
    return this.deployRepo?.push()
    
    // if (this.dir?.dir(target)?.exists) return

    // const files = ['index.html']

    // await this.deployRepo?.commit(
    //   files.map((f) => `${target}/${f}`),
    //   `New ${target} deployment`
    // )

    // await this.deployRepo?.push()
  }
}
