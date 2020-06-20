import { ICode, IKeyStore, User, IProduct, IDir } from '..';
import { Octokit } from '@octokit/rest';
/**
 *
 */
export declare class Code implements ICode {
    /** @internal */
    protected _product: IProduct;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _keystore?: IKeyStore;
    /** @internal */
    protected _user?: User;
    /** @internal */
    protected _github?: Octokit;
    /**
     *
     * @param product
     */
    constructor(product: IProduct);
    /** */
    get user(): User | undefined;
    /**
     *
     */
    get keystore(): IKeyStore | undefined;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get product(): IProduct;
    /**
     *
     */
    initialize(): Promise<void>;
    status(): Promise<void>;
    init(): Promise<void>;
}
