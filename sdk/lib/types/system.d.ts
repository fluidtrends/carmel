import { IClass, UTF8, Path, Version, Id } from '.';
export interface IData extends IClass {
    readonly raw: UTF8;
    readonly isJson: boolean;
    json(): any;
    update(data: UTF8 | object): void;
    append(data: UTF8 | object): void;
}
export interface IFile extends IClass {
    readonly path?: Path;
    readonly data: IData;
    readonly exists: boolean;
    load(): void;
    save(): void;
    update(data: UTF8 | object): void;
}
export interface IDir extends IClass {
    readonly path?: Path;
    readonly exists: boolean;
    dir(dirpath: Path): IDir | undefined;
    dirs(): Promise<Path[]>;
}
export interface IScript extends IClass {
    readonly args: any;
    readonly platform: string;
}
export interface ILogger extends IClass {
    readonly props: any;
}
export interface IBundle extends IClass {
    readonly dir: IDir;
    readonly id: Id;
    readonly version: Version;
    readonly exists: boolean;
    load(): Promise<IBundle>;
}
