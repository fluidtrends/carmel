import { IFile, IData, Path, UTF8 } from '..';
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
    link(file?: IFile): this | undefined;
    load(): any;
    remove(): this;
    save(): void;
    move(to: IFile): void;
    update(data: UTF8 | object): void;
}
