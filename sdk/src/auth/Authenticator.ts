import {
  IAuthenticator,
  AuthSession,
  Session,
  ISession,
  User,
  GitHubAuth,
  Dir,
  IDir,
  AccessTokenType,
  AuthBrowserType,
  IAuthProvider,
} from '..'

import browserSync, { BrowserSyncInstance } from 'browser-sync'
import passport from 'passport'
import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import http from 'http'
import path from 'path'

/**
 *
 */
export class Authenticator implements IAuthenticator {
  /** */
  public static AUTH_PORT: number = 13013

  /** */
  public static AUTH_HOST: string = '127.0.0.1'

  /** */
  public static AUTH_PROTOCOL: string = 'http'

  /** @internal */
  protected _session: ISession

  /** @internal */
  protected _port: number

  /** @internal */
  protected _host: string

  /** @internal */
  protected _protocol: string

  /** @internal */
  protected _dir: IDir

  /** @internal */
  protected _app: Express

  /** @internal */
  protected _browser: AuthBrowserType

  /** @internal */
  protected _providers: Map<AccessTokenType, IAuthProvider>

  /**
   *
   * @param session
   */
  constructor(session: ISession) {
    this._session = session
    this._port = Authenticator.AUTH_PORT
    this._host = Authenticator.AUTH_HOST
    this._protocol = Authenticator.AUTH_PROTOCOL
    this._dir = new Dir(path.resolve(__dirname, '../../auth'))
    this._app = express()
    this._browser = browserSync.create()
    this._providers = new Map<AccessTokenType, IAuthProvider>()
  }

  /**
   *
   */
  get session() {
    return this._session
  }

  /**
   *
   */
  get providers() {
    return this._providers
  }

  /**
   *
   */
  get app() {
    return this._app
  }

  /**
   *
   */
  get browser() {
    return this._browser
  }

  /**
   *
   */
  get port() {
    return this._port
  }

  /**
   *
   */
  get host() {
    return this._host
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
  get protocol() {
    return this._protocol
  }

  /**
   *
   */
  get baseUrl() {
    return `${this.protocol}://${this.host}:${this.port}`
  }

  /**
   *
   * @param uri
   */
  endpoint(uri: string) {
    return `${this.baseUrl}/${uri}`
  }

  /**
   *
   */
  async openBrowser() {
    this.browser.init({
      startPath: '/',
      notify: true,
      logLevel: 'silent',
      ui: false,
      host: this.host,
      proxy: this.baseUrl,
    })
  }

  /** @internal */
  async _initializeApp() {
    this.app.set('port', this.port)
    this.app.set('views', this.dir.path!)
    this.app.set('view engine', 'ejs')

    this.app.use(
      cors({
        origin: this.baseUrl,
        methods: ['GET', 'POST'],
        credentials: true,
      })
    )

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', this.baseUrl)
      res.header('Access-Control-Allow-Credentials', 'true')
      next()
    })

    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(cookieParser())
    this.app.use(express.static(this.dir.path!))

    this.app.use(
      AuthSession({
        name: this.session.name,
        secret: this.session.id,
        resave: true,
        saveUninitialized: false,
        cookie: { maxAge: Session.DEFAULT_EXPIRATION },
        store: this.session.store,
      })
    )

    this.app.use(passport.initialize())
    this.app.use(passport.session())
  }

  /**
   *
   */
  async stop(when: number) {
    setTimeout(() => {
      this.browser.exit()
    }, when)
  }

  /**
   *
   */
  async initialize() {
    this._initializeApp()

    this.app.get('/', (req, res) => {
      if (!req.isAuthenticated()) {
        res.redirect('/auth/login')
        return
      }

      res.render('screens/main', {
        user: req.user,
        carmel: {
          version: this.session.pkg.version,
        },
      })

      this.stop(2000)
    })

    this.app.get('/auth/login', (req, res) => {
      if (req.isAuthenticated()) {
        res.redirect('/')
        return
      }

      res.render('screens/auth', {
        carmel: {
          version: this.session.pkg.version,
        },
      })
    })

    this.app.get('/auth/logout', (req: any, res) => {
      req.logOut()
      req.session.destroy(() => {
        res.clearCookie(this.session.name)
        res.redirect('/')
      })
    })

    const githubProvider = new GitHubAuth(this)
    await githubProvider.initialize()

    // Add providers
    this.providers.set(AccessTokenType.GITHUB, githubProvider)
  }

  /**
   *
   */
  async start() {
    const serverInstance = new http.Server(this.app)

    return new Promise((resolve, reject) => {
      this.browser.emitter.on('service:exit', () => resolve())

      serverInstance.listen(this.port, async () => {
        this.openBrowser()
      })
    })
  }
}
