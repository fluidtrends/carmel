import { 
    Index 
} from 'dodi'

import {
    Archive
} from 'rara'

import {
    ISession,
    SessionProps,
    ILogger,
    Name,
    Id,
    Bundle,
    ICommand,
    Globals,
    Dir,
    Logger,
    Product,
    EngineState, 
    IProduct,
    Version,
    SessionState
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
    /** @internal */
    protected _props?: SessionProps;

    /** @internal */
    protected _logger: ILogger;

    /** @internal */
    protected _index: any;

    /** @internal */
    protected _state: SessionState;

    /** @internal */
    protected _product?: IProduct;

    /**
     * Builds a new Session with the given {@linkcode SessionProps} properties
     * 
     * @param props The {@linkcode SessionProps} properties
     */
    constructor(props?: SessionProps) {
        this._props = props
        this._logger = new Logger(this.props)
        this._index = new Index(Object.assign({}, { sections: Globals.DEFAULT_SECTIONS }, this.props, { name: 'carmel' }))
        this._state = SessionState.UNINITIALIZED
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
        this.isInitialized || await this.initialize()

        // Nothing else for now
        this.changeState(SessionState.READY)
    }

    /**
     *  Initializes the Session and makes sure the index is ready to go.
     */
    async initialize () {
        // No need to re-initialize
        if (this.isInitialized) return

        // Initialize the index first of all, if needed
        await this.index.initialize()

        // This session is ready to go
        this.changeState(SessionState.INITIALIZED)
    }

    /**
     */
    async destroy() {
        // this.logger.stop()
    }

    /**
     * Looks up a {@linkcode Bundle} in the local index.
     * 
     * @param id The {@linkcode Bundle} id
     * @param version the {@linkcode Bundle} version
     */
    async findBundle(id: Id, version: Version) {
        // Make sure we're ready
        await this.makeReady()

        if (!this.index.sections.bundles || !this.index.sections.bundles.exists) {
            // Looks like something's missing here, we need the bundles section
            return
        }
        
        // Cool, let's see if our bundle archive is in there
        const archive = await this.index.sections.bundles.findArchive({ id, version })

        if (!archive) {
            // Doesn't look like it
            return
        }

        // Good stuff, found the archive, ok let's build ourselves a bundle
        const bundle = new Bundle(archive)

        // One more thing, let's load this puppy
        return bundle.load()
    }

    /**
     * Looks up a {@linkcode Stack} in the local index.
     * 
     * @param stackId The {@linkcode Stack} id
     */
    async findStack(stackId: Id) {
        // Make sure we're ready
        await this.makeReady()

        // Parse the bundle id and version from the stack id
        const info = stackId.match(/(.*)\/(.*)\/(.*)$/)?.slice(1,4)!

        // We need to make sure the stack is fully resolved
        if (!info || info.length < 3) return undefined

        // Let's look this up
        const [bundleId, bundleVersion, stackName] = info

        // See if the bundle exists
        const bundle = await this.findBundle(bundleId, bundleVersion)
        
        // Too bad the bundle does not exist
        if (!bundle || !bundle.exists) return undefined
        
        // Look up the stack in the bundle
        return bundle.loadStack(stackName)
    }

    /**
     * 
     * @param productId 
     */
    async resolveProduct() {
        // Make sure we're ready
        await this.makeReady()

        // Let's build it up
        this._product = new Product(this)

        // Send it back all loaded up, if found
        return this.product?.load()
    }

    async installSystemBundle(bundleId: string) {
        const archive = await this.index.installArchive({ section: "system", id: "papanache", silent: true })
        this.set("papanacheVersion", archive.version)
        await archive.installDependencies()   
    }

    async updateIndex() {
        // this.logger.info('Making sure your development environment is up to date ...')
 
        return this.index.installArchive({ id: "papanache", silent: true })
                         .then((archive: Archive) => {
                            this.set("papanacheVersion", archive.version)
                            return archive.installDependencies()
                         })
                         .then(() => this.index.installArchive({ id: "@fluidtrends/bananas", silent: true }))
                         .then((archive: Archive) => {
                            this.set("bananasVersion", archive.version)
                            return archive.installDependencies()
                         })
                         .then(() => {
                            // this.logger.info('Your development environment is all up to date')
                         })
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