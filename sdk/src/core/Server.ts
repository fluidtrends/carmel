import pm2 from 'pm2'

import { IServer, IFile, IProduct, IDir, ServerState } from '..'

/**
 * 
 */
export class Server implements IServer {
    /** @internal */
    protected _product: IProduct

    /** @internal */
    protected _state: ServerState

    /** @internal */
    protected _dir?: IDir;

    /** @internal */
    protected _scriptFile?: IFile;

    /** @internal */
    protected _outputFile?: IFile;

    /** @internal */
    protected _errorFile?: IFile;

    /** @internal */
    protected _pidFile?: IFile;

    /**
     * 
     * @param product 
     */
    constructor(product: IProduct) {
        this._product = product
        this._state = ServerState.UNINITIALIZED
    }

    /**
     * 
     */
    get scriptFile() {
        return this._scriptFile
    }

    /**
     * 
     */
    get pidFile() {
        return this._pidFile
    }

    /**
     * 
     */
    get outputFile() {
        return this._outputFile
    }

    get errorFile() {
        return this._errorFile
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
    get dir() {
        return this._dir
    }

    /**
     * 
     */
    get state() {
        return this._state
    }

     /**
     * Move the Server into a new {@linkcode ServerState}
     * 
     * @param state The new {@linkcode ServerState}
     */
    public changeState(state: ServerState) {
        this._state = state
    }

    /**
     * 
     */
    async initialize() {
        this.changeState(ServerState.INITIALIZING)
        this.changeState(ServerState.INITIALIZED)
    }


    /**
     * 
     */
    get isInitialized() {
        return this.state >= ServerState.INITIALIZED
    }

    /**
     * 
     */
    get isStarted() {
        return this.state >= ServerState.STARTED
    }

    /**
     * 
     */
    get isRunning() {
        return this.state >= ServerState.RUNNING
    }

    /**s
     * 
     */
    async start() {
        // Make sure we're ready to start
        this.isInitialized || await this.initialize()

        // Only start once
        if (this.isStarted) return 

        // Ok, let's do this
        this.changeState(ServerState.STARTING)

        // Look up the server contents
        this._dir = this.product.cacheDir?.dir('server')?.make()
        this._scriptFile = this.dir?.file('script.js')
        this._outputFile = this.dir?.file('output.log')
        this._errorFile = this.dir?.file('error.log')
        this._pidFile = this.dir?.file('pid')

        // Create it if necessary
        this.scriptFile?.exists || this.scriptFile?.update(`//DO NOT MODIFY. AUTO GENERATED.`)

        return new Promise((resolve, reject) => {
            pm2.connect((err) => {
                if (err) {
                    this.changeState(ServerState.STOPPED)
                    reject(err)
                    return
                }

                pm2.start({
                    cwd: this.product.cacheDir!.path,
                    pid: this.pidFile!.path,
                    output: this.outputFile!.path,
                    error: this.errorFile!.path,
                    name: this.product.id,
                    script: this.scriptFile!.path!,
                    max_memory_restart : '100M'
                }, (err, apps) => {
                    if (err) {
                        this.changeState(ServerState.STOPPED)
                        pm2.disconnect()
                        reject(err)
                        return
                    }
                    this.changeState(ServerState.RUNNING)
                    resolve()
                })
            })
        })
    }

    /**
     * 
     */
    async stop() {
        // Make sure we're ready to start
        this.isInitialized || await this.initialize()

        return new Promise((resolve, reject) => {
            pm2.connect((err) => {
                if (err) {
                    this.changeState(ServerState.STOPPED)
                    reject(err)
                    return
                }

                pm2.stop(this.product.id!, (err) => {
                    if (err) {
                        pm2.disconnect()
                        reject(err)
                        return
                    }
                    this.changeState(ServerState.STOPPED)
                    resolve()
                })
            })
        })
    }
}
