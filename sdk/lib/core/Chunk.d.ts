import { ISnapshot, Name, IChunk, IScreen, IDir } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Chunk.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Chunk implements IChunk {
    /** @internal */
    protected _name: Name;
    /** @internal */
    protected _snapshot: ISnapshot;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _srcDir?: IDir;
    /** @internal */
    protected _screens?: Map<Name, IScreen>;
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
    get exists(): boolean;
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
    screen(name: Name): Promise<IScreen | undefined>;
    /**
     *
     */
    load(): Promise<this | undefined>;
}
