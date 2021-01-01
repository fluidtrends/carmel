import { IContent, IDir, IFile, Path } from '..';
import { IProduct } from '../types';
export declare class Content implements IContent {
    /** @internal */
    protected _rootDir: IDir;
    /** @internal */
    protected _index?: IFile;
    /** @internal */
    protected _hashes: Map<Path, any>;
    /** @internal */
    protected _product: IProduct;
    constructor(product: IProduct);
    get product(): IProduct;
    get rootDir(): IDir;
    get index(): IFile | undefined;
    get hashes(): Map<string, any>;
    initialize(): Promise<void>;
    refresh(): Promise<void>;
}
