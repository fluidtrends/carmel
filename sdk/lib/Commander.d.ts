import { ICommander, ICommand, ISession } from '.';
export declare class Commander implements ICommander {
    protected _command?: ICommand;
    protected _session?: ISession;
    constructor(command?: ICommand, session?: ISession);
    get command(): ICommand | undefined;
    get session(): ISession | undefined;
    run(): Promise<any> | undefined;
    verify(): Promise<unknown>;
    static run(command?: ICommand, session?: ISession): Promise<any>;
}
