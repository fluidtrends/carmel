import { 
    Index 
} from 'dodi'

import {
    Archive
} from 'rara'

import {
    ISession,
    Workspace,
    IWorkspace,
    ILogger,
    IBundle,
    Bundle,
    ICommand,
    Globals,
    Logger
} from '.'

export class Session implements ISession {
    protected _props: any;
    protected _logger: ILogger;
    protected _index: any;
    protected _workspace?: IWorkspace;
    protected _command?: ICommand;
    
    constructor(props: any) {
        this._props = props
        // this._command = command
        this._logger = new Logger(this.props)
        this._workspace = this.props.noWorkspace ? undefined : new Workspace(this.props, this)
        this._index = new Index(Object.assign({}, { sections: Globals.DEFAULT_SECTIONS }, this.props, { name: 'carmel' }))//, this.logger)
    }

    get props() {
        return this._props
    }

    get logger() {
        return this._logger
    }

    get index() {
        return this._index
    }

    get workspace() {
        return this._workspace
    }

    get hasWorkspace() {
        return !this.props.noWorkspace
    }

    get command() {
        return this._command
    }

    set(key: string, val: any) {
       return this.index.sections.system.vault.write(key, val)
    }

    get(key: string) {
       return this.index.sections.system.vault.read(key)
    }

    async initialize () {
        // Initialize the index first of all
        await this.index.initialize()
    
        // Make sure the local common deps are available
        this.command && this.command.requiresFreshSession && await this.updateIndex()
        
        // Then let's make sure the workspace is also initialized
        return this.hasWorkspace && this.workspace!.initialize()
    }

    async findBundle(id: string, version: string) {
        if (!this.index.sections.bundles ||
             !this.index.sections.bundles.exists) {
             return
        }

        const archive = await this.index.sections.bundles.findArchive({ id, version })

        if (!archive) {
            return
        }

        const bundle = new Bundle(archive) as any
        return bundle
    }

    async installSystemBundle(bundleId: string) {
        const archive = await this.index.installArchive({ section: "system", id: "papanache", silent: true })
        this.set("papanacheVersion", archive.version)
        await archive.installDependencies()   
    }

    updateIndex() {
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

    open() {
        // Let's setup the logger
        // return this.logger.start(this.command && this.command.title)
    }

    close() {
        // Close this session
        // return this.logger.stop()
    }
}
