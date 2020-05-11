import { IFile, IData, Path } from '.';
export declare class File implements IFile {
    protected _data?: IData;
    protected _path: Path;
    constructor(path: Path);
    get data(): IData | undefined;
    get path(): string;
    get exists(): boolean;
    load(): void;
}
