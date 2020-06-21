import { Strategy } from 'passport-github2'
import passport from 'passport'
import OAuth2Strategy from 'passport-oauth2'
import axios from 'axios'

import {
  Authenticator,
  IAuthKey,
  User,
  IAuthProvider,
  AccessTokenType,
} from '..'

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
  get authenticator() {
    return this._authenticator
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
    const localKeys: IAuthKey[] = keystore.keys.get('github') || []

    if (localKeys.length === 0) {
      await this.setupNewKey(``)
      return
    }

    localKeys.map((k) => this.keys.push(k))
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
