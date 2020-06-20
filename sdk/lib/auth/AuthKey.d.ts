import { IAuthKey, IKeyStore, IDir, IFile, Id, Name } from '..';
/**
 *
 */
export declare class AuthKey implements IAuthKey {
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _group: Name;
    /** @internal */
    protected _id?: Id;
    /** @internal */
    protected _fingerprint?: Id;
    /** @internal */
    protected _keystore: IKeyStore;
    /** @internal */
    protected _files: Map<Name, IFile>;
    /**
     *
     * @param name
     * @param keystore
     */
    constructor(group: Name, keystore: IKeyStore, id?: Id);
    /**
     *
     */
    get group(): string;
    /**
     *
     */
    get files(): Map<string, IFile>;
    /**
     *
     */
    get exists(): boolean;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get keystore(): IKeyStore;
    /**
     *
     */
    get id(): string | undefined;
    /**
     *
     */
    get fingerprint(): string | undefined;
    /**
     *
     */
    generate(): Promise<void>;
    initialize(): Promise<this>;
}
