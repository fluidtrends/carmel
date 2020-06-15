import { SessionProps, CommandProps, Path, EngineState, IClass, IBundle, Name, ChunkConfig, Id, ILogger, ArtifactsKind, ServerState, IFile, JSON, IDir, CommandType, SessionState, ChunkConfigRoute, Target, Version, ProductState, CommandArg } from '.';
export interface IEngine extends IClass {
    readonly state: EngineState;
    readonly isStarted: boolean;
    readonly hasSession: boolean;
    readonly session?: ISession;
    changeState(state: EngineState): void;
    newSession(props?: SessionProps): Promise<void>;
    start(props?: SessionProps): Promise<ISession>;
    startServer(command?: ICommand, args?: CommandArg[]): Promise<any>;
    stop(): Promise<void>;
    exec(command?: ICommand, args?: CommandArg[]): Promise<any>;
}
export interface ISession extends IClass {
    readonly props?: SessionProps;
    readonly logger: ILogger;
    readonly index: any;
    readonly state: SessionState;
    readonly isInitialized: boolean;
    readonly isReady: boolean;
    readonly product?: IProduct;
    readonly pkg: JSON;
    readonly dir: IDir;
    initialize(command?: ICommand): Promise<void>;
    makeReady(): Promise<void>;
    destroy(): Promise<void>;
    changeState(state: SessionState): void;
    resolveProduct(target?: Target): Promise<IProduct | undefined>;
    findBundle(id: Id, version: Version, install?: boolean): Promise<IBundle | undefined>;
    findArtifact(id: Id, kind: ArtifactsKind, install?: boolean): Promise<any>;
    findTemplate(id: Id, install?: boolean): Promise<ITemplate | undefined>;
}
export interface ICommand extends IClass {
    readonly props: CommandProps;
    readonly session?: ISession;
    readonly requiresArgs: boolean;
    readonly product?: IProduct;
    readonly target: Target;
    readonly type: CommandType;
    readonly id: Id;
    readonly isLongRunning: boolean;
    readonly args?: CommandArg[];
    initialize(session: ISession, args?: CommandArg[]): Promise<any>;
    exec(): Promise<any>;
    arg(name: Name): any;
}
export interface IPacker extends IClass {
    pack(callback: (event: any) => void): Promise<any>;
}
export interface IProduct extends IClass {
    readonly dir: IDir;
    readonly cacheDir?: IDir;
    readonly manifest: IFile;
    readonly session?: ISession;
    readonly exists: boolean;
    readonly context?: any;
    readonly isLoaded: boolean;
    readonly isReady: boolean;
    readonly state: ProductState;
    readonly snapshot?: ISnapshot;
    readonly id?: Id;
    create(data?: any): void;
    createFromTemplate(id: Id): Promise<IProduct | undefined>;
    load(): Promise<IProduct | undefined>;
    saveContext(context: object): void;
    changeState(state: ProductState): void;
    loadFile(path: Path): void;
    saveData(data: any): void;
    findDirs(dirpath: Path): Path[];
    resolvePacker(target: Target, watch: boolean): Promise<any>;
}
export interface ISnapshot extends IClass {
    readonly id: Id;
    readonly product: IProduct;
    readonly exists: boolean;
    readonly dir?: IDir;
    readonly chunksDir?: IDir;
    readonly apps?: Map<Target, IApp>;
    readonly chunks?: Map<Name, IChunk>;
    load(): Promise<ISnapshot | undefined>;
    app(target: Target): Promise<IApp | undefined>;
    chunk(name: Name): Promise<IChunk | undefined>;
}
export interface IServer extends IClass {
    readonly isInitialized: boolean;
    readonly isStarted: boolean;
    readonly isRunning: boolean;
    readonly state: ServerState;
    readonly scriptFile?: IFile;
    readonly dir: IDir;
    readonly pidFile?: IFile;
    readonly outputFile?: IFile;
    readonly errorFile?: IFile;
    readonly io?: any;
    readonly args?: CommandArg[];
    readonly id: Id;
    readonly command: ICommand;
    initialize(): Promise<any>;
    start(): Promise<any>;
    stop(): Promise<any>;
    changeState(state: ServerState): void;
}
export interface IArtifact extends IClass {
    readonly kind: ArtifactsKind;
    readonly name: Name;
    readonly bundle: IBundle;
    readonly dir?: IDir;
    readonly exists: boolean;
}
export interface ITemplate extends IClass {
    readonly artifact: IArtifact;
    readonly name: Name;
    install(dir: IDir, product: IProduct): Promise<any>;
    load(): Promise<ITemplate | undefined>;
}
export interface IApp extends IClass {
    readonly target: Target;
    readonly snapshot: ISnapshot;
    readonly exists: boolean;
    readonly dir?: IDir;
    load(): Promise<IApp | undefined>;
}
export interface IChunk extends IClass {
    readonly name: Name;
    readonly snapshot: ISnapshot;
    readonly exists: boolean;
    readonly config?: ChunkConfig;
    readonly manifest?: IFile;
    readonly screens?: Map<Name, IScreen>;
    readonly dir?: IDir;
    readonly srcDir?: IDir;
    load(): Promise<IChunk | undefined>;
    screen(route: ChunkConfigRoute): Promise<IScreen | undefined>;
}
export interface IScreen extends IClass {
    readonly chunk: IChunk;
    readonly exists: boolean;
    readonly dir?: IDir;
    readonly config?: ChunkConfigRoute;
    load(): Promise<IScreen | undefined>;
}
