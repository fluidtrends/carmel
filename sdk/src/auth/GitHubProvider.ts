import { Strategy } from 'passport-github2'
import passport from 'passport'
import { Octokit } from '@octokit/rest'
import { createTokenAuth } from '@octokit/auth-token'

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
export class GitHubProvider implements IAuthProvider {
  /** */
  public static APP_CLIENT_ID = '638343cb36c073a0a29f'

  /** */
  public static APP_CLIENT_SECRET = '7008e0bf5922f1b2cea61e2d62e4b6057288b367'

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
      'github'
    )

    // And add it remotely
    await service.users.createPublicSshKeyForAuthenticated({
      title,
      key: newLocalKey.files.get('public.ssh')?.data.raw,
    })

    // Keep track of it
    this._keys.push(newLocalKey)

    return newLocalKey
  }

  /**
   *
   * @param service
   */
  async fetchRemoteKeys(service?: any) {
    const { data } = await service.users.listPublicSshKeysForAuthenticated()

    return data
  }

  /**
   *
   */
  async prepareKeys() {
    if (!this.authenticator.session.isLoggedIn) {
      return
    }

    const { keystore, system } = this.authenticator.session
    const service = new Octokit({
      auth: this.authenticator.session.token(AccessTokenType.GITHUB),
    })

    // Let's look up local and remote keys
    const localKeys: IAuthKey[] = keystore.keys.get('github') || []
    const remoteKeys = (await this.fetchRemoteKeys(service)) || []

    let title = `carmel/${system?.id}`

    if (localKeys.length === 0) {
      await this.setupNewKey(`${title}/0`, service)
      return
    }

    // Look for key matches
    let foundTitles: string[] = []
    remoteKeys.map((remoteKey: any) => {
      localKeys.map((localKey) => {
        const ssh = localKey.files.get('public.ssh')?.data.raw
        ssh === `${remoteKey.key} carmel` && this.keys.push(localKey)
        remoteKey.title.startsWith(title) &&
          foundTitles.push(remoteKey.title.substring(title.length + 1) || '0')
      })
    })

    // Calculate the next unique title
    foundTitles = foundTitles.map((suffix: string) => `${suffix}`)
    const subId = Array.from(Array(100).keys()).find(
      (id) => !foundTitles.includes(`${id + 1}`)
    )
    title = `${title}/${subId! + 1}`

    this.keys.length > 0 || (await this.setupNewKey(title, service))
  }

  async initialize() {
    passport.serializeUser((user: User, done) => {
      done(null, user)
    })

    passport.deserializeUser((user: User, done) => {
      done(null, user)
    })

    passport.use(
      new Strategy(
        {
          clientID: GitHubProvider.APP_CLIENT_ID,
          clientSecret: GitHubProvider.APP_CLIENT_SECRET,
          callbackURL: this.authenticator.endpoint(`auth/github/callback`),
        },
        (accessToken: any, refreshToken: any, profile: any, done: any) => {
          process.nextTick(() => {
            done(null, {
              ...profile._json,
              tokens: [
                {
                  type: AccessTokenType.GITHUB,
                  value: accessToken,
                },
              ],
            })
          })
        }
      )
    )

    this.authenticator.app.get(
      '/auth/github',
      passport.authenticate('github', {
        scope: ['user:email', 'write:public_key'],
      })
    )

    this.authenticator.app.get(
      '/auth/github/callback',
      passport.authenticate('github', {
        failureRedirect: '/login',
      }),
      (req, res) => {
        res.redirect('/')
      }
    )
  }
}
