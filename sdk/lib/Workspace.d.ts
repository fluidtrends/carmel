import { IWorkspace, WorkspaceProps, Path, IFile, ISession } from '.';
export declare class Workspace implements IWorkspace {
    static MANIFEST_FILENAME: Path;
    static DEFAULT_MANIFEST: {
        type: string;
        context: {};
    };
    protected _props: WorkspaceProps;
    protected _dir: Path;
    protected _manifest: IFile;
    protected _session: ISession;
    constructor(props: WorkspaceProps, session: ISession);
    get manifest(): IFile;
    get props(): WorkspaceProps;
    get dir(): string;
    get session(): ISession;
    get data(): object;
    get exists(): boolean;
    load(): Promise<void>;
    create(): Promise<unknown>;
    initialize(): Promise<void>;
    saveContext(context: object): void;
}
