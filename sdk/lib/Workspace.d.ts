import { IWorkspace, Path, IFile, IDir, ISession } from '.';
export declare class Workspace implements IWorkspace {
    static MANIFEST_FILENAME: Path;
    static DEFAULT_MANIFEST: {
        type: string;
        context: {};
    };
    protected _props: any;
    protected _dir: IDir;
    protected _manifest: IFile;
    protected _session?: ISession;
    constructor(props: any);
    get manifest(): IFile;
    get props(): any;
    get dir(): IDir;
    get session(): ISession | undefined;
    get data(): any;
    get exists(): boolean;
    load(): Promise<void>;
    create(): Promise<unknown>;
    initialize(): Promise<void>;
    saveContext(context: object): void;
    loadFile(path: Path): Promise<unknown>;
    findDirs(dirpath: Path): Promise<string[]>;
}
