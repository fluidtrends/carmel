import {
  ICode,
  IAuthKey,
  IKeyStore,
  User,
  IProduct,
  IDir,
  AccessTokenType,
} from '..'

import { Octokit } from '@octokit/rest'
import NodeGit, { Repository } from 'nodegit'

/**
 *
 */
export class Code implements ICode {
  /** @internal */
  protected _product: IProduct

  /** @internal */
  protected _dir?: IDir

  /** @internal */
  protected _keystore?: IKeyStore

  /** @internal */
  protected _github?: Octokit

  /** @internal */
  protected _keys?: IAuthKey[]

  /** @internal */
  protected _key?: IAuthKey

  /** @internal */
  protected _credentials?: any

  /** @internal */
  protected _repo?: Repository

  /** @internal */
  protected _remoteRepo?: any

  /** @internal */
  protected _user?: User

  /** @internal */
  protected _repoOwner?: string

  /** @internal */
  protected _repoName?: string

  /**
   *
   * @param product
   */
  constructor(product: IProduct) {
    this._product = product
  }

  /** */
  get user() {
    return this._user
  }

  /**
   *
   */
  get repoOwner() {
    return this._repoOwner
  }

  /**
   *
   */
  get repoName() {
    return this._repoName
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
  get product() {
    return this._product
  }

  /**
   *
   */
  async initialize() {
    this._dir = this.product.cacheDir
    this._keystore = this.product.session?.keystore
    this._user = this.product.session?.user!
    this._keys = this.product.session?.keys(AccessTokenType.GITHUB) || []
    this._key = this.keys![0]
    this._repoOwner = this.product?.data?.repo?.owner || this.user?.login
    this._repoName = this.product?.data?.repo?.name || this.repoOwner

    try {
      this._github = new Octokit({
        auth: this.product?.session?.token(AccessTokenType.GITHUB),
      })

      this._credentials = (url: string, username: string) =>
        NodeGit.Cred.sshKeyNew(
          username,
          this.key?.files.get('public.ssh')?.path!,
          this.key?.files.get('private.ssh')?.path!,
          ''
        )

      this._repo = this.product.cacheDir?.exists
        ? await NodeGit.Repository.open(this.product.cacheDir!.path!)
        : undefined
    } catch {}

    try {
      // Check for the remote repo
      this._remoteRepo =
        this._github &&
        (await this._github.repos.get({
          owner: this.repoOwner!,
          repo: this.repoName!,
        }))
    } catch {}

    // We got a local repo, great
    if (this._repo) return

    if (!this._remoteRepo) {
      console.log('remote repo does not exist')
    }

    // Got a remote repo so let's clone it
    // this._repo = await NodeGit.Clone.clone(
    //   `git@github.com:${this.repoOwner}/${this.repoName}.git`,
    //   this.product.cacheDir?.path!,
    //   {
    //     fetchOpts: {
    //       callbacks: {
    //         certificateCheck: () => 0,
    //         credentials: this._credentials,
    //       },
    //     },
    //   }
    // )
  }

  async status() {
    // console.log(this._repo?.state())
    // const keys = this.product.session?.keystore.keys.get('github')
    // console.log(keys)
    // const token = this.product.session?.token(AccessTokenType.GITHUB)
    // const cloneOptions = {
    //   fetchOpts: {
    //     callbacks: {
    //       certificateCheck: function () {
    //         return 0
    //       },
    //       credentials: (url: string, username: string) => {
    //         return NodeGit.Cred.sshKeyNew(username, key.public, key.private, '')
    //       },
    //     },
    //   },
    // }
    // const repo = await NodeGit.Clone.clone(cloneURL, localPath, cloneOptions)
    // await NodeGit.Repository.open(localPath)
    // console.log(repo.isBare())
  }

  async init() {}
}
