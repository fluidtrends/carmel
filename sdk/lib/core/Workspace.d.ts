import { IWorkspace, Path, IFile, IDir, IStack, ISession } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Workspace.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Workspace.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Workspace.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Workspace implements IWorkspace {
    protected _props: any;
    protected _dir: IDir;
    protected _manifest: IFile;
    protected _session?: ISession;
    protected _stack?: IStack;
    constructor(props?: any, session?: ISession);
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
    initialize(): Promise<this>;
    saveContext(context: object): void;
    saveData(data: any): void;
    loadFile(path: Path): Promise<unknown>;
    findDirs(dirpath: Path): Promise<string[] | undefined>;
}
