import { ISession, IWorkspace, ILogger } from '.';
export declare class Session implements ISession {
    protected _props: any;
    protected _logger: ILogger;
    protected _index: any;
    protected _workspace?: IWorkspace;
    static DEFAULT_SECTIONS: ({
        id: string;
        secure?: undefined;
    } | {
        id: string;
        secure: boolean;
    })[];
    constructor(props: any);
    get props(): any;
    get logger(): ILogger;
    get index(): any;
    get workspace(): IWorkspace | undefined;
}
