import { SessionProps, CommandProps, Path, EngineState, IClass, IBundle, Id, ILogger, IFile, IDir, CommandType, SessionState, Target, Version, ProductState, CommandArg } from '.';
export interface IEngine extends IClass {
    readonly state: EngineState;
    readonly isStarted: boolean;
    readonly hasSession: boolean;
    readonly session?: ISession;
    changeState(state: EngineState): void;
    newSession(props?: SessionProps): Promise<void>;
    start(props?: SessionProps): Promise<ISession>;
    stop(): Promise<void>;
    exec(command?: ICommand, args?: CommandArg[]): Promise<void>;
}
export interface ISession extends IClass {
    readonly props?: SessionProps;
    readonly logger: ILogger;
    readonly index: any;
    readonly state: SessionState;
    readonly isInitialized: boolean;
    readonly isReady: boolean;
    readonly product?: IProduct;
    initialize(command?: ICommand): Promise<void>;
    makeReady(): Promise<void>;
    destroy(): Promise<void>;
    changeState(state: SessionState): void;
    resolveProduct(): Promise<IProduct | undefined>;
    findBundle(id: Id, version?: Version): Promise<IBundle | undefined>;
    findStack(stackId: Id): Promise<IStack | undefined>;
}
export interface ICommand extends IClass {
    readonly props: CommandProps;
    readonly session?: ISession;
    readonly requiresArgs: boolean;
    readonly product?: IProduct;
    readonly target: Target;
    readonly type: CommandType;
    readonly id: Id;
    run(session: ISession, args?: CommandArg[]): Promise<void>;
    exec(session: ISession, args?: CommandArg[]): Promise<void>;
}
export interface IProduct extends IClass {
    readonly dir: IDir;
    readonly manifest: IFile;
    readonly session?: ISession;
    readonly exists: boolean;
    readonly context?: any;
    readonly stack?: IStack;
    readonly isLoaded: boolean;
    readonly isReady: boolean;
    readonly state: ProductState;
    create(): void;
    load(): Promise<IProduct>;
    saveContext(context: object): void;
    changeState(state: ProductState): void;
    loadFile(path: Path): void;
    saveData(data: any): void;
    findDirs(dirpath: Path): Promise<Path[] | undefined>;
}
export interface IStack extends IClass {
    readonly props: any;
    readonly name: string;
    readonly bundle?: IBundle;
    load(): Promise<IStack>;
}
