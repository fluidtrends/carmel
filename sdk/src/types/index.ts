/*******************************************************
 *                     Primitives                      *
 *******************************************************/

export type Id = string;
export type Name = string;
export type Path = string;
export type UTF8 = string;
export type JSON = any;

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
    readonly props: any 
}

export interface ILogger extends IClass  {
    readonly props: any;
}

export interface ICommand extends IClass  {
    readonly args: any;
    readonly requiredArgs: string[];
    readonly title: string;
    readonly id: string;
    readonly requiresContext: boolean;
    readonly requiresFreshSession: boolean;
    readonly env: any;
    readonly session?: ISession;
    readonly context?: any;
    readonly missingRequiredArgs: string[];
    readonly cwd: string;

    exec(session?: ISession): Promise<any>; 
}

export interface ICommander extends IClass  {
    readonly command: ICommand;
    readonly session?: ISession;
}

export interface ILogger extends IClass  {
    readonly props: any;
}

export interface IWorkspace extends IClass  {
    readonly props: any;
    readonly dir: IDir;
    readonly manifest: IFile;
    readonly session?: ISession;
    readonly exists: boolean;
    
    load(): void;
    create(): void;
    initialize(): void;
    saveContext(context: object): void;
    loadFile (path: Path): void;
    findDirs(dirpath: Path): Promise<Path[]>;
    context(id: Id): any;
}

export interface ISession extends IClass  {
    readonly props: any;
    readonly logger: ILogger;
    readonly workspace?: IWorkspace;
    readonly index: any;

    initialize(): Promise<any>;
}
