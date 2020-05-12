import { IDir, Path } from '.';
export declare class Dir implements IDir {
    protected _path: Path;
    constructor(path: Path);
    get path(): string;
    get exists(): boolean;
    dir(dirpath: Path): Dir;
    dirs(): Promise<string[]>;
}
