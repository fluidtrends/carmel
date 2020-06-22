import { Strategy } from 'passport-github2'
import passport from 'passport'
import OAuth2Strategy from 'passport-oauth2'
import { createDeployment } from '@vercel/client'
import axios from 'axios'

import {
  Authenticator,
  IAuthKey,
  IRepo,
  IAuthProvider,
  AccessTokenType,
} from '..'
import { ICode } from '../types'

/**
 *
 */
export class VercelProvider implements IAuthProvider {
  /** */
  public static APP_CLIENT_ID = 'oac_6cgAIFisZuUgjKYVdM4rdg8s'

  /** */
  public static APP_CLIENT_SECRET = '5CptA1wt73OmfR03VkYbexwK'

  /** @internal */
  protected _authenticator: Authenticator

  /** @internal */
  protected _keys: IAuthKey[]

  /**
   *
   * @param authenticator
   */
  constructor(authenticator: Authenticator) {
    this._authenticator = authenticator
    this._keys = []
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
  get token() {
    return this.authenticator.session.token(AccessTokenType.VERCEL)
  }

  /**
   *
   */
  get authenticator() {
    return this._authenticator
  }

  /**
   *
   */
  get isLoggedIn() {
    return this.token !== undefined
  }

  /**
   *
   */
  async setupNewKey(title: string, service?: any) {
    // Looks like we have no github keys stored, let's create one
    const newLocalKey = await this.authenticator.session.keystore.addNewKey(
      'vercel'
    )

    // Keep track of it
    this._keys.push(newLocalKey)

    return newLocalKey
  }

  /**
   *
   * @param service
   */
  async fetchRemoteKeys(service?: any) {
    return []
  }

  /**
   *
   */
  async prepareKeys() {
    if (!this.authenticator.session.isLoggedIn) {
      return
    }

    const { keystore, system } = this.authenticator.session

    // Let's look up local and remote keys
    const localKeys: IAuthKey[] = keystore.keys.get('vercel') || []

    if (localKeys.length === 0) {
      await this.setupNewKey(``)
      return
    }

    localKeys.map((k) => this.keys.push(k))
  }

  /**
   *
   * @param name
   * @param repo
   */
  async push(name: string, repo: IRepo) {
    if (!this.isLoggedIn) return

    let project = await this.request(`v1/projects/ensure-project`, {
      name,
    })

    project = await this.request(
      `v2/projects/${name}`,
      {
        publicSource: true,
        framework: null,
        buildCommand: null,
        devCommand: null,
        outputDirectory: '.web',
        rootDirectory: null,
      },
      true
    )

    if (!project) return

    const deploymentGenerator = () =>
      createDeployment(
        {
          token: this.token!,
          path: repo.dir!.path!,
        },
        {
          name,
          version: 2,
        }
      )

    let deployment
    for await (const event of deploymentGenerator()) {
      switch (event.type) {
        case 'error':
          console.log(event.payload)
          break
        case 'ready':
          deployment = event.payload
          break
      }
    }

    return deployment
  }

  /**
   *
   * @param uri
   * @param options
   * @param patch
   */
  async request(uri: string, options?: any, patch?: boolean) {
    if (!this.isLoggedIn) return

    try {
      const url = `https://api.vercel.com/${uri}`
      const header = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      }

      const { data } = await (options
        ? patch
          ? axios.patch(url, options || {}, header)
          : axios.post(url, options || {}, header)
        : axios.get(url, header))

      return data
    } catch (e) {
      console.log(e)
    }
  }

  /**
   *
   */
  async initialize() {
    passport.use(
      new OAuth2Strategy(
        {
          authorizationURL: 'https://vercel.com/oauth/authorize',
          tokenURL: 'https://api.vercel.com/v2/oauth/access_token',
          clientID: VercelProvider.APP_CLIENT_ID,
          clientSecret: VercelProvider.APP_CLIENT_SECRET,
          callbackURL: `${this.authenticator.baseUrl}/auth/vercel/callback`,
        },
        (accessToken: any, refreshToken: any, profile: any, done: any) => {
          process.nextTick(() => {
            const { user } = this.authenticator
            user?.tokens.push({
              type: AccessTokenType.VERCEL,
              value: accessToken,
            })
            done(null, user)
          })
        }
      )
    )

    this.authenticator.app.get('/auth/vercel', passport.authenticate('oauth2'))

    this.authenticator.app.get(
      '/auth/vercel/callback',
      passport.authenticate('oauth2', { failureRedirect: '/login' }),
      (req, res) => {
        res.redirect('/')
      }
    )
  }
}
