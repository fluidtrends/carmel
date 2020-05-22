import { IWorkspace, Path, IFile, IDir, IStack, ISession } from '.';
export declare class Workspace implements IWorkspace {
    protected _props: any;
    protected _dir: IDir;
    protected _manifest: IFile;
    protected _session?: ISession;
    protected _stack?: IStack;
    constructor(props: any, session?: ISession);
    get manifest(): IFile;
    get props(): any;
    get dir(): IDir;
    get session(): ISession | undefined;
    get stack(): IStack | undefined;
    get data(): any;
    get exists(): boolean;
    get context(): any;
    loadStack(): Promise<IStack>;
    load(): Promise<void>;
    create(): Promise<any>;
    initialize(): Promise<void>;
    saveContext(context: object): void;
    saveData(data: any): void;
    loadFile(path: Path): Promise<unknown>;
    findDirs(dirpath: Path): Promise<string[] | undefined>;
}
