import { IServer, ICommand, IFile, Id, CommandArg, IDir, ServerState } from '..';
/**
 *
 */
export declare class Server implements IServer {
    /** @internal */
    protected _state: ServerState;
    /** @internal */
    protected _dir: IDir;
    /** @internal */
    protected _id: Id;
    /** @internal */
    protected _scriptFile?: IFile;
    /** @internal */
    protected _outputFile?: IFile;
    /** @internal */
    protected _errorFile?: IFile;
    /** @internal */
    protected _pidFile?: IFile;
    /** @internal */
    protected _command: ICommand;
    /** @internal */
    protected _args?: CommandArg[];
    /**
     *
     * @param command
     */
    constructor(command: ICommand, args?: CommandArg[]);
    /** @internal */
    arg(name: string): CommandArg | undefined;
    /**
     *
     */
    get scriptFile(): IFile | undefined;
    /**
     *
     */
    get pidFile(): IFile | undefined;
    /**
     *
     */
    get outputFile(): IFile | undefined;
    /**
     *
     */
    get args(): CommandArg[] | undefined;
    /**
     *
     */
    get command(): ICommand;
    /**
     *
     */
    get errorFile(): IFile | undefined;
    /**
     *
     */
    get dir(): IDir;
    /**
     *
     */
    get state(): ServerState;
    /**
     * Move the Server into a new {@linkcode ServerState}
     *
     * @param state The new {@linkcode ServerState}
     */
    changeState(state: ServerState): void;
    /**
     *
     */
    get id(): string;
    /**
     *
     */
    initialize(): Promise<unknown>;
    /**
     *
     */
    get isInitialized(): boolean;
    /**
     *
     */
    get isStarted(): boolean;
    /**
     *
     */
    get isRunning(): boolean;
    /**
     *
     */
    get forceStart(): any;
    /**
     *
     */
    start(): Promise<unknown>;
    /**
     *
     */
    stop(): Promise<unknown>;
}
