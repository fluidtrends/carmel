import { IScreen, IChunk, ChunkConfigRoute, IDir } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Screen.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Screen.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Screen.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Screen implements IScreen {
    /** @internal */
    protected _chunk: IChunk;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _config: ChunkConfigRoute;
    /**
     *
     * @param chunk
     * @param config
     */
    constructor(chunk: IChunk, config: ChunkConfigRoute);
    /**
     *
     */
    get config(): ChunkConfigRoute;
    /**
     *
     */
    get chunk(): IChunk;
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
    load(): Promise<this>;
}
