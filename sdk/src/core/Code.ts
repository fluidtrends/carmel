import { ICode, IKeyStore, User, IProduct, IDir, AccessTokenType } from '..'
import { Octokit } from '@octokit/rest'

import git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import fs from 'fs'

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
  protected _user?: User

  /** @internal */
  protected _github?: Octokit

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

    const localKeys = await this.keystore?.keys('github')

    const auth = this.product.session?.token(AccessTokenType.GITHUB)
    this._github = new Octokit({ auth })

    const remoteKeys = (
      await this._github.users.listPublicKeysForUser({
        username: this.user?.login,
      })
    ).data.map(({ key }) => key)

    console.log('remoteKeys', remoteKeys)
    console.log('localKeys', localKeys)
  }

  async status() {
    return git.status({
      fs,
      dir: this.dir!.path!,
      filepath: '.',
    })
  }

  async init() {}
}
