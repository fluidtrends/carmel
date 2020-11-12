import { Index } from 'dodi'

import fs from 'fs'
import path from 'path'
import shortid from 'shortid'
import os from 'os'

import {
  ISession,
  SessionProps,
  ILogger,
  Id,
  Bundle,
  Dir,
  Logger,
  Product,
  IProduct,
  JSON,
  Target,
  Template,
  IDir,
  Name,
  IFile,
  Version,
  ArtifactsKind,
  SessionState,
  Authenticator,
  IAuthenticator,
  AuthStore,
  AuthStoreType,
  AccessTokenType,
  IKeyStore,
  KeyStore,
  User,
} from '..'

/**
 * Represents an {@linkcode Engine} Session initiated by a client.
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Session.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Session.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Session.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Session implements ISession {
  /** Start with these sections - always */
  public static DEFAULT_SECTIONS = [
    'bundles',
    'secrets',
    'settings',
    'stacks',
    'system',
    'products',
    'keystore',
    'packers',
    'events',
  ]

  /** Default lifetime for a typical session */
  public static DEFAULT_EXPIRATION: number = 24 * 60 * 60 * 1000

  /** Use these as mandatory bundles */
  public static DEFAULT_BUNDLES = ['traista']

  /** The id to use for auth */
  public static DEFAULT_ID = 'io.carmel.session'

  /** @internal */
  protected _props?: SessionProps

  /** @internal */
  protected _logger: ILogger

  /** @internal */
  protected _index: any

  /** @internal */
  protected _authDir: IDir

  /** @internal */
  protected _state: SessionState

  /** @internal */
  protected _product?: IProduct

  /** @internal */
  protected _pkg: JSON

  /** @internal */
  protected _dir: IDir

  /** @internal */
  protected _manifest?: IFile

  /** @internal */
  protected _user?: User

  /** @internal */
  protected _store?: AuthStoreType

  /** @internal */
  protected _id: Id

  /** @internal */
  protected _name: Name

  /** @internal */
  protected _authenticator: IAuthenticator

  /** @internal */
  protected _keystore: IKeyStore

  /**
   *
   * Builds a new Session with the given {@linkcode SessionProps} properties
   *
   * @param props The {@linkcode SessionProps} properties
   */
  constructor(props?: SessionProps) {
    this._props = props
    this._logger = new Logger(this.props)
    this._index = new Index(
      Object.assign(
        {},
        { sections: Session.DEFAULT_SECTIONS.map((id) => ({ id })) },
        this.props,
        { name: 'carmel' }
      )
    )
    this._state = SessionState.UNINITIALIZED
    this._pkg = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../..', 'package.json'), 'utf8')
    )
    this._dir = new Dir(this.index.path).make()!
    this._manifest = this.dir.file('carmel.json')
    this._authDir = this.dir.dir('auth')?.make()!
    this._id = Session.DEFAULT_ID
    this._name = Session.DEFAULT_ID
    this._authenticator = new Authenticator(this)
    this._keystore = new KeyStore(this)
  }

  /** */
  get props() {
    return this._props
  }

  /** */
  get keystore() {
    return this._keystore
  }

  /** */
  get manifest() {
    return this._manifest
  }

  /** */
  get logger() {
    return this._logger
  }

  /** */
  get authenticator() {
    return this._authenticator
  }

  /** */
  get authDir() {
    return this._authDir
  }

  /** */
  get state() {
    return this._state
  }

  /** */
  get isLoggedIn() {
    return this.user !== undefined
  }

  /** */
  get user() {
    return this._user
  }

  /** */
  get index() {
    return this._index
  }

  /** */
  get store() {
    return this._store
  }

  /** */
  get system() {
    return this.manifest?.data.json()
  }

  /** */
  get isInitialized() {
    return this.state >= SessionState.INITIALIZED
  }

  /** */
  get isReady() {
    return this.state >= SessionState.READY
  }

  /** */
  get product() {
    return this._product
  }

  /** */
  get pkg() {
    return this._pkg
  }

  /** */
  get dir() {
    return this._dir
  }

  /** */
  get id() {
    return this._id
  }

  /** */
  get name() {
    return this._name
  }

  /**
   *
   * @param type
   */
  token(type: AccessTokenType) {
    return this.isLoggedIn
      ? this.user?.tokens.find((token) => token.type === type)?.value
      : undefined
  }

  /** */
  set(key: string, val: any) {
    return this.index.sections.system.vault.write(key, val)
  }

  /** */
  get(key: string) {
    return this.index.sections.system.vault.read(key)
  }

  /**
   * Move the Session into a new {@linkcode SessionState}
   *
   * @param state The new {@linkcode SessionState}
   */
  public changeState(state: SessionState) {
    this._state = state
  }

  /**
   *
   */
  async authenticate() {
    await this.authenticator.start()
    this._checkAuth()
  }

  /**
   * Make sure the session is ready for action
   */
  async makeReady() {
    // Nothing for us to do
    if (this.isReady) return

    // Initialize if necessary
    this.isInitialized || (await this.initialize())

    // Nothing else for now
    this.changeState(SessionState.READY)
  }

  /** @internal */
  async _checkAuth() {
    // Look for the logged in user, if any
    const sessionData = this.authDir.files
      .map((f) => this.authDir.file(f)?.load())
      .shift()
    this._user =
      sessionData !== undefined ? (sessionData as any).passport.user : undefined
  }

  /**
   *
   * @param type
   */
  keys(type: AccessTokenType) {
    return this.authenticator.providers.get(AccessTokenType.GITHUB)?.keys || []
  }

  /**
   *  Initializes the Session and makes sure the index is ready to go.
   */
  async initialize() {
    // No need to re-initialize
    if (this.isInitialized) return

    // Initialize the index first of all, if needed
    await this.index.initialize()

    // Get the store ready
    this._store = new AuthStore({
      path: this.authDir?.make()?.path,
    })

    // Wait for the authenticator to setup
    await this.authenticator.initialize()

    // Check to see if we're logged in
    this._checkAuth()

    // Setup the manifest
    const now = Date.now()
    const update = {
      modifiedTimestamp: now,
      memory: os.freemem(),
      uptime: os.uptime(),
    }
    this.manifest?.exists && this.manifest.load()
    this.manifest?.update(
      Object.assign(
        {},
        update,
        this.manifest.exists || {
          createdTimestamp: now,
          id: shortid.generate(),
          platform: {
            system: os.platform(),
            type: os.type(),
            release: os.release(),
            totalMemory: os.totalmem(),
            arch: os.arch(),
            eol: os.EOL,
            cpus: os.cpus().length,
            homeDir: os.homedir(),
            hostname: os.hostname(),
            env: os.userInfo(),
          },
        }
      )
    )

    // This session is ready to go
    this.changeState(SessionState.INITIALIZED)
  }

  /**
   *
   */
  async enableSecurity() {
    if (!this.isLoggedIn) return

    // Prepare the keystore
    await this.keystore.initialize()

    // Wait for the authenticator to setup
    await this.authenticator.setupSecurity()
  }

  /**
   */
  async destroy() {}

  /**
   * Looks up a {@linkcode Bundle} in the local index.
   *
   * @param id The {@linkcode Bundle} id
   * @param version the {@linkcode Bundle} version
   * @param install whether we should  the {@linkcode Bundle} if not found
   */
  async findBundle(id: Id, version?: Version, install: boolean = true) {
    // Make sure we're ready
    await this.makeReady()

    if (!this.index.sections.bundles || !this.index.sections.bundles.exists) {
      // Looks like something's missing here, we need the bundles section
      return undefined
    }

    // Cool, let's see if our bundle archive is in there,
    // and just install it first if necessary
    const args = Object.assign({}, { id }, version && { version })
    const archive = install
      ? await this.index.sections.bundles.installArchive(args)
      : await this.index.sections.bundles.findArchive(args)

    if (!archive) {
      // Doesn't look like it
      return undefined
    }

    // Good stuff, found the archive, ok let's build ourselves a bundle
    const bundle = new Bundle(archive)

    // One more thing, let's load this puppy
    return bundle.load()
  }

  /** @internal */
  private parseArtifact(id: Id, kind: ArtifactsKind, install: boolean = true) {
    // Defaults
    let bundleVersion = undefined
    let bundleId = Session.DEFAULT_BUNDLES[0]
    let artifactName = id

    // Look at the all the sections
    const info = id.split('/')

    // The artifact name is simple
    artifactName = info.pop()!

    // Parse the bundle id
    bundleId = info.shift()!

    // Append if it's scoped
    bundleId =
      bundleId.charAt(0) === '@' ? `${bundleId}/${info.shift()}` : bundleId

    // Ready for the version, if any
    bundleVersion = info && info.length > 0 ? info.shift() : bundleVersion

    return { bundleId, bundleVersion, artifactName }
  }

  /**
     * Looks up an artifact in the local index.

     * @param id 
     * @param kind 
     */
  async findArtifact(id: Id, kind: ArtifactsKind, install: boolean = true) {
    // Make sure we're ready
    await this.makeReady()

    // Parse the artifact
    const { bundleId, bundleVersion, artifactName } = this.parseArtifact(
      id,
      kind,
      install
    )

    // See if the bundle exists
    const bundle = await this.findBundle(bundleId, bundleVersion, install)

    // Too bad the bundle does not exist
    if (!bundle || !bundle.exists) return undefined

    // Load the artifact from the bundle
    return bundle.loadArtifact(artifactName, kind)
  }

  /**
   *
   * @param id
   */
  async findTemplate(id: Id, install: boolean = true) {
    const tpl = await this.findArtifact(id, ArtifactsKind.TEMPLATES, install)
    return tpl as Template
  }

  /**
   *
   * @param productId
   */
  async resolveProduct(productId?: string) {
    // Make sure we're ready
    await this.makeReady()

    // Let's build it up
    this._product = new Product(this, productId)

    // Send it back if found
    return this.product
  }
}
