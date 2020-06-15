import { IEngine, ICommand, ISession, IServer, EngineState, CommandArg, SessionProps } from '..';
/**
 * Solely responsible for running Carmel Commands.
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
export declare class Engine implements IEngine {
    /** @internal */
    private _session?;
    /** @internal */
    private _state;
    /** @internal */
    private static _instance?;
    /** @internal */
    protected _server?: IServer;
    /** @internal */
    private constructor();
    /**
     * Makes sure that the Engine has a single instance
     */
    static get instance(): IEngine;
    /**
     * Move the Engine into a new {@linkcode EngineState}
     *
     * @param state The new {@linkcode EngineState}
     */
    changeState(state: EngineState): void;
    /**
     *
     */
    get server(): IServer | undefined;
    /**
     * Retrieves the current {@linkcode EngineState} of the Engine.
     */
    get state(): EngineState;
    /**
     *
     * @param command
     * @param args
     */
    startServer(command: ICommand, args?: CommandArg[]): Promise<void>;
    /**
     *
     */
    get session(): ISession | undefined;
    /**
     * Checks whether the Engine has a valid {@linkcode Session}
     */
    get hasSession(): boolean;
    /**
     * Checks whether the Engine has been started or not.
     */
    get isStarted(): boolean;
    /**
     * Create a brand new  {@linkcode Session}
     *
     * @param props The {@linkcode SessionProps} with which to create a new {@linkcode Session}
     */
    newSession(props?: SessionProps): Promise<void>;
    /**
     * Starts a new Engine {@linkcode Session}.
     *
     * @param props The {@linkcode SessionProps} with which to initialize a new {@linkcode Session}
     */
    start(props?: SessionProps): Promise<ISession>;
    /**
     * Ends the current Engine {@linkcode Session} and clean up if necessary.
     */
    stop(): Promise<void>;
    /**
     * Executes a single {@linkcode ICommand}.
     *
     * @param command The {@linkcode ICommand} to execute
     * @param args The {@linkcode CommandArgs} to pass to this command
     */
    exec(command?: ICommand, args?: CommandArg[]): Promise<void>;
    /**
     *
     */
    static get session(): ISession | undefined;
    /**
     * Runs a {@linkcode Command} in a {@linkcode Session}.
     *
     * @param command The {@linkcode Command} to run
     * @param args The {@linkcode CommandArgs} to pass to this command
     */
    static run(command?: ICommand, args?: CommandArg[]): Promise<void>;
    /**
     *
     * @param command
     * @param args
     */
    static start(command?: ICommand, args?: CommandArg[]): Promise<void>;
    /**
     *
     */
    static stop(): Promise<void>;
}
