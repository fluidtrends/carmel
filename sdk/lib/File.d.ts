import { IFile, IData, Path, UTF8 } from '.';
export declare class File implements IFile {
    protected _data: IData;
    protected _path: Path;
    constructor(path: Path);
    get data(): IData;
    get path(): string;
    get exists(): boolean;
    load(): Promise<unknown>;
    save(): void;
    update(data: UTF8 | object): void;
}
