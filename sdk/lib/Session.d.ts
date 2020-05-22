import { ISession, IWorkspace, ILogger, ICommand } from '.';
export declare class Session implements ISession {
    protected _props: any;
    protected _logger: ILogger;
    protected _index: any;
    protected _workspace?: IWorkspace;
    protected _command?: ICommand;
    constructor(props: any);
    get props(): any;
    get logger(): ILogger;
    get index(): any;
    get workspace(): IWorkspace | undefined;
    get hasWorkspace(): boolean;
    get command(): ICommand | undefined;
    set(key: string, val: any): any;
    get(key: string): any;
    initialize(): Promise<false | void>;
    findBundle(id: string, version: string): Promise<any>;
    installSystemBundle(bundleId: string): Promise<void>;
    updateIndex(): any;
    open(): void;
    close(): void;
}
