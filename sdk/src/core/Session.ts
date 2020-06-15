import { Index } from 'dodi'

import fs from 'fs'
import path from 'path'

import {
  ISession,
  SessionProps,
  ILogger,
  Id,
  Bundle,
  Dir,
  Logger,
  Product,
  IServer,
  IProduct,
  JSON,
  Target,
  Template,
  IDir,
  Version,
  ArtifactsKind,
  SessionState,
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
    'stacks',
    'products',
    'packers',
    'events',
  ]

  /** Use these as mandatory bundles */
  public static DEFAULT_BUNDLES = ['@fluidtrends/bananas']

  /** @internal */
  protected _props?: SessionProps

  /** @internal */
  protected _logger: ILogger

  /** @internal */
  protected _index: any

  /** @internal */
  protected _state: SessionState

  /** @internal */
  protected _product?: IProduct

  /** @internal */
  protected _pkg: JSON

  /** @internal */
  protected _dir: IDir

  /**
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
    this._dir = new Dir(this.index.path)
  }

  /** */
  get props() {
    return this._props
  }

  /** */
  get logger() {
    return this._logger
  }

  /** */
  get state() {
    return this._state
  }

  /** */
  get index() {
    return this._index
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

  /**
   *  Initializes the Session and makes sure the index is ready to go.
   */
  async initialize() {
    // No need to re-initialize
    if (this.isInitialized) return

    // Initialize the index first of all, if needed
    await this.index.initialize()

    // Get the server ready
    // await this.server.start()

    // This session is ready to go
    this.changeState(SessionState.INITIALIZED)
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
    // and just install it firs if necessary
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
  async resolveProduct(target?: Target) {
    // Make sure we're ready
    await this.makeReady()

    // Let's build it up
    this._product = new Product(this)

    // Send it back if found
    return this.product
  }
}

//     findCredentials(session) {
//         const profile = this.args.profile || 'default'

//         const v = session.index.sections.safe.vault

//         if (v.isLocked) {
//           return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is locked')))
//         }

//         session.logger.info(`Looking up AWS credentials [${profile}] ...`)

//         const credentials = Object.assign({}, { region: "us-east-1" }, v.read(`aws.${profile}`))

//         if (!credentials || !credentials.key || !credentials.secret) {
//           return Promise.reject(new Error('No credentials found'))
//         }

//         process.env.AWS_SDK_LOAD_CONFIG = null
//         process.env.AWS_ACCESS_KEY_ID = credentials.key
//         process.env.AWS_SECRET_ACCESS_KEY = credentials.secret

//         return Promise.resolve(credentials)
//     }

//     prepareCloud(session) {
//         return this.findCredentials(session).then((credentials) => {
//             this._cloud = new Cloud(Object.assign({}, credentials, { env: this.env }))
//             return this.cloud
//         })
//     }
