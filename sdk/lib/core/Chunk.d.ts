import { ISnapshot, Name, IChunk, IScreen, IFile, ChunkConfig, ChunkConfigRoute, IDir } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Chunk.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Chunk implements IChunk {
    /** The default name of the manifest */
    static MANIFEST_FILENAME: string;
    /** @internal */
    protected _name: Name;
    /** @internal */
    protected _manifest?: IFile;
    /** @internal */
    protected _snapshot: ISnapshot;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _srcDir?: IDir;
    /** @internal */
    protected _screens?: Map<Name, IScreen>;
    /** @internal */
    protected _config?: ChunkConfig;
    /**
     *
     * @param product
     * @param target
     */
    constructor(snapshot: ISnapshot, name: Name);
    /**
     *
     */
    get name(): string;
    /**
    *
    */
    get snapshot(): ISnapshot;
    /**
     *
     */
    get screens(): Map<string, IScreen> | undefined;
    /**
     *
     */
    get config(): ChunkConfig | undefined;
    /**
     *
     */
    get exists(): boolean;
    /**
     *
     */
    get manifest(): IFile | undefined;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get srcDir(): IDir | undefined;
    /**
     *
     * @param name
     */
    screen(route: ChunkConfigRoute): Promise<IScreen | undefined>;
    /** @internal */
    private _loadConfig;
    /**
     *
     */
    load(): Promise<this | undefined>;
}
