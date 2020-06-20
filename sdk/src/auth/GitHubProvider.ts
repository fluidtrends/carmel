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

  async prepareKeys() {
    const { keystore, user, system } = this.authenticator.session
    const localKeys: IAuthKey[] = [] //keystore.keys.get('github') || []

    // if (localKeys.length === 0) {
    // Looks like we have no github keys stored, let's create one
    const newLocalKey = await this.authenticator.session.keystore.addNewKey(
      'github'
    )
    localKeys.push(newLocalKey)
    // }

    const accessToken = this.authenticator.session.token(AccessTokenType.GITHUB)
    const octokit = new Octokit({
      auth: accessToken,
    })

    let title = `carmel/${system?.id}`
    const remoteKeys = await octokit.users.listPublicSshKeysForAuthenticated()
    let foundKeys: any = []
    let foundTitles: string[] = []

    remoteKeys.data.map((remoteKey: any) => {
      localKeys.map((localKey) => {
        const ssh = localKey.files.get('public.ssh')?.data.raw
        ssh === `${remoteKey.key} carmel` &&
          foundKeys.push({ localKey, remoteKey })
        remoteKey.title.startsWith(title) &&
          foundTitles.push(remoteKey.title.substring(title.length + 1) || '0')
      })
    })

    if (foundKeys.length > 0) {
      return
    }

    foundTitles = foundTitles.map((suffix: string) => `${suffix}`)
    const subId = Array.from(Array(100).keys()).find(
      (id) => !foundTitles.includes(`${id + 1}`)
    )
    title = `${title}/${subId! + 1}`

    await octokit.users.createPublicSshKeyForAuthenticated({
      title,
      key: localKeys[0].files.get('public.ssh')?.data.raw,
    })
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
