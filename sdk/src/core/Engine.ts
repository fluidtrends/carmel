import {
    IEngine,
    ICommand,
    ISession,
    Errors,
    Session,
    EngineState,
    CommandArg,
    SessionProps
} from '..'

/**
 * Solely reponsible for running Carmel Commands. 
 * It acts as the main entry point to the Carmel System.
 * Usually gets invoked by a Carmel Client, such as the Carmel CLI.
 * Only one instance available at all times.
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Engine.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Engine.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Engine.ts/stats | Code Stats}
 * 
 * @category Core
 */
export class Engine implements IEngine {
    /** @internal */
    private _session?: ISession;

    /** @internal */
    private _state: EngineState;

    /** @internal */
    private static _instance?: IEngine;

    /** @internal */
    private constructor () {
        this._state = EngineState.STOPPED
    }

    /**
     * Makes sure that the Engine has a single instance
     */
    static get instance() {
        Engine._instance = Engine._instance || new Engine()
        return Engine._instance 
    }

    /**
     * Move the Engine into a new {@linkcode EngineState}
     * 
     * @param state The new {@linkcode EngineState}
     */
    public changeState(state: EngineState) {
        this._state = state
    }

    /**
     * Retrieves the current {@linkcode EngineState} of the Engine.
     */
    public get state() {
        return this._state
    }

    /**
     * 
     */
    public get session() {
        return this._session
    }

    /**
     * Checks whether the Engine has a valid {@linkcode Session}
     */
    public get hasSession() {
        return this._session !== undefined
    }

    /**
     * Checks whether the Engine has been started or not.
     */
    public get isStarted() {
        return this._state >= EngineState.STARTED && this.hasSession
    }

    /**
     * Create a brand new  {@linkcode Session}
     * 
     * @param props The {@linkcode SessionProps} with which to create a new {@linkcode Session}
     */
    public async newSession(props?: SessionProps) {
        // Make sure we do have props, even if only defaults
        props = props || { 
            cwd: process.cwd(),
            name: "carmel",
            dir: process.env.CARMEL_USERHOME
        }

        // This engine is not started yet, let's begin by assigning a new Session
        this._session = new Session(props)

        // Good, let's also make sure the Session is initialized
        await this._session.initialize()
    }

    /**
     * Starts a new Engine {@linkcode Session}.
     * 
     * @param props The {@linkcode SessionProps} with which to initialize a new {@linkcode Session}
     */
    public async start(props?: SessionProps) {
        if (this.isStarted) {
            // No need to start an Engine that has already been started
            return this._session!
        }

        // Let's let the world know we're starting up
        this.changeState(EngineState.STARTING)

        // This engine is not started yet, let's begin by assigning a new Session
        await this.newSession(props)

        // We're now started and ready to go
        this.changeState(EngineState.READY)

        // Let's allow callers to access the Session
        return this._session!
    }

    /**
     * Ends the current Engine {@linkcode Session} and clean up if necessary.
     */
    public async stop() {
        // Let's put ourselves in the right state
        this.changeState(EngineState.STOPPED)

        // Ready to go to sleep now
        return this._session?.destroy()
    }    

    /**
     * Executes a single {@linkcode ICommand}.
     * 
     * @param command The {@linkcode ICommand} to execute
     * @param args The {@linkcode CommandArgs} to pass to this command
     */
    public async exec(command?: ICommand, args?: CommandArg[]) {
        if (!this._session) {
            // Don't do anything without a session
            throw Errors.SessionIsMissing()
        }

        if (!command) {
            // Likewise, don't do anything without a command
            throw Errors.CommandIsMissing()
        }

        if (!this.isStarted) {
            // Don't barf but silently ignore execution until we're ready
            return
        }

        // We're about to run it
        Engine.instance.changeState(EngineState.RUNNING)

        // Time to let the command do its thing
        const result = await command?.run(this._session, args)

        // We're done running
        Engine.instance.changeState(EngineState.READY)

        // Send back the result, if any
        return result
    }

    /**
     * 
     */
    public static get session() {
        return Engine.instance.session
    }

    /**
     * Runs a {@linkcode Command} in a {@linkcode Session}.
     * 
     * @param command The {@linkcode Command} to run
     * @param args The {@linkcode CommandArgs} to pass to this command
     * @param onlyOnce Whether we want to allow the Engine to process further commands or not
     */
    public static async run (command: ICommand, args?: CommandArg[], onlyOnce: boolean = true) {
        // First, start the engine if necessary
        await Engine.instance.start()

        // Let's let this command run
        const result = await Engine.instance.exec(command, args)

        // If we only need to run this once, then we're completely finished
        onlyOnce && Engine.instance.stop()

        // Send back the result, if any
        return result
    }
}
