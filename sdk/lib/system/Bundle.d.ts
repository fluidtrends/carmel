import { IBundle, IDir } from '..';
import { Archive } from 'rara';
/**
 * This represents a Carmel Bundle of artifacts that are cache locally
 * and used horizontally as needed.
 *
 * @category System
 */
export declare class Bundle implements IBundle {
    /** @internal */
    protected _archive: Archive;
    /** @internal */
    protected _dir: IDir;
    /**
     * Let's build a bundle from the archive we just received
     *
     * @param archive The archive to build the bundle from
     */
    constructor(archive: Archive);
    /**
     *
     */
    get dir(): IDir;
    /**
     *
     */
    get id(): any;
    /**
     *
     */
    get version(): any;
    /**
     *
     */
    get exists(): boolean;
    /**
     *
     */
    load(): Promise<this>;
}
