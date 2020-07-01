import { IRepo, ICode, IDir } from '..';
import NodeGit from 'nodegit';
/**
 *
 */
export declare class Repo implements IRepo {
    /** @internal */
    protected _code: ICode;
    /** @internal */
    protected _local?: NodeGit.Repository;
    /** @internal */
    protected _remote?: any;
    /** @internal */
    protected _owner?: string;
    /** @internal */
    protected _name?: string;
    /** @internal */
    protected _dir?: IDir;
    /**
     *
     * @param code
     */
    constructor(code: ICode);
    /**
     *
     */
    get code(): ICode;
    /**
     *
     */
    get local(): NodeGit.Repository | undefined;
    /**
     *
     */
    get remote(): any;
    /**
     *
     */
    get owner(): string | undefined;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get name(): string | undefined;
    /**
     *
     */
    get isOpen(): boolean;
    /**
     *
     */
    get hasRemote(): boolean;
    /**
     *
     */
    get isRemoteForeign(): boolean;
    /**
     *
     */
    open(): Promise<void>;
    /**
     *
     */
    loadRemote(): Promise<void>;
    /**
     *
     */
    commit(paths: string[], comment: string): Promise<void>;
    /**
     *
     */
    push(): Promise<void>;
    /**
     *
     */
    setupHosting(): Promise<any>;
    /**
     *
     */
    initialize(): Promise<void>;
}
