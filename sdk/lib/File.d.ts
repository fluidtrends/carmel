import { IFile, IData, Path, UTF8 } from '.';
/**
 *
 * @category System
 */
export declare class File implements IFile {
    protected _data: IData;
    protected _path?: Path;
    constructor(path?: Path);
    get data(): IData;
    get path(): string | undefined;
    get exists(): boolean;
    load(): Promise<unknown>;
    save(): void;
    update(data: UTF8 | object): void;
}
