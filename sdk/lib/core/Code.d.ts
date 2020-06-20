import { ICode, IAuthKey, IKeyStore, User, IProduct, Target, IDir, IRepo } from '..';
/**
 *
 */
export declare class Code implements ICode {
    /** @internal */
    protected _product: IProduct;
    /** @internal */
    protected _keystore?: IKeyStore;
    /** @internal */
    protected _service?: any;
    /** @internal */
    protected _keys?: IAuthKey[];
    /** @internal */
    protected _key?: IAuthKey;
    /** @internal */
    protected _credentials?: any;
    /** @internal */
    protected _user?: User;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _deployRepo: IRepo;
    /**
     *
     * @param product
     */
    constructor(product: IProduct);
    /**
     *
     */
    get user(): User | undefined;
    /**
     *
     */
    get deployRepo(): IRepo;
    /**
     *
     */
    get keys(): IAuthKey[] | undefined;
    /**
     *
     */
    get key(): IAuthKey | undefined;
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
    get credentials(): any;
    /**
     *
     */
    get service(): any;
    /**
     *
     */
    get product(): IProduct;
    /**
     *
     */
    initialize(): Promise<void>;
    /**
     *
     */
    deploy(target: Target): Promise<void>;
}
