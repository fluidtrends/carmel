import { Strategy } from 'passport-github2'
import passport from 'passport'

import { Authenticator, User, IAuthProvider, AccessTokenType } from '..'

/**
 *
 */
export class GitHubAuth implements IAuthProvider {
  /** */
  public static APP_CLIENT_ID = '638343cb36c073a0a29f'

  /** */
  public static APP_CLIENT_SECRET = '7008e0bf5922f1b2cea61e2d62e4b6057288b367'

  /** @internal */
  protected _authenticator: Authenticator

  /**
   *
   * @param authenticator
   */
  constructor(authenticator: Authenticator) {
    this._authenticator = authenticator
  }

  /**
   *
   */
  get authenticator() {
    return this._authenticator
  }

  /**
   *
   * @param clientID
   * @param clientSecret
   */
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
          clientID: GitHubAuth.APP_CLIENT_ID,
          clientSecret: GitHubAuth.APP_CLIENT_SECRET,
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
        scope: ['user:email'],
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
