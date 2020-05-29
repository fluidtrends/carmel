import { IDir, Path } from '.';
/**
 *
 * @category System
 */
export declare class Dir implements IDir {
    protected _path?: Path;
    constructor(path?: Path);
    get path(): string | undefined;
    get exists(): boolean;
    dir(dirpath: Path): Dir | undefined;
    dirs(): Promise<string[]>;
}
