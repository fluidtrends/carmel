import { IDir, File, Path } from '..';
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
    file(filepath: Path): File | undefined;
    make(): this | undefined;
    remove(): this;
    link(dir?: IDir): this | undefined;
    copy(dir: IDir): IDir | undefined;
    move(dir: IDir): IDir | undefined;
    get dirs(): string[];
}
