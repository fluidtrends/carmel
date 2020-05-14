/*******************************************************
 *                     Primitives                      *
 *******************************************************/
export declare type Id = string;
export declare type Name = string;
export declare type Path = string;
export declare type UTF8 = string;
/*******************************************************
 *                   Class Interfaces                  *
 *******************************************************/
export interface IClass {
}
export interface IData extends IClass {
    readonly raw: UTF8;
    readonly isJson: boolean;
    json(): any;
    update(data: UTF8 | object): void;
    append(data: UTF8 | object): void;
}
export interface IFile extends IClass {
    readonly path: Path;
    readonly data: IData;
    readonly exists: boolean;
    load(): void;
    save(): void;
    update(data: UTF8 | object): void;
}
export interface IDir extends IClass {
    readonly path: Path;
    readonly exists: boolean;
    dir(dirpath: Path): IDir;
    dirs(): Promise<Path[]>;
}
export interface IStack extends IClass {
    readonly props: any;
}
export interface ILogger extends IClass {
    readonly props: any;
}
export interface ICommand extends IClass {
    readonly props: any;
}
export interface ILogger extends IClass {
    readonly props: any;
}
export interface IWorkspace extends IClass {
    readonly props: any;
    readonly dir: IDir;
    readonly manifest: IFile;
    readonly session?: ISession;
    readonly exists: boolean;
    load(): void;
    create(): void;
    initialize(): void;
    saveContext(context: object): void;
    loadFile(path: Path): void;
    findDirs(dirpath: Path): Promise<Path[]>;
}
export interface ISession extends IClass {
    readonly props: any;
    readonly logger: ILogger;
    readonly workspace?: IWorkspace;
    readonly index: any;
}
