import { IPlugin, ISession, Id, ICommand } from '.';
export declare class Plugin implements IPlugin {
    protected _props: any;
    protected _session?: ISession;
    protected _command?: ICommand;
    protected _name: string;
    constructor(props: any);
    get props(): any;
    get session(): ISession | undefined;
    get command(): ICommand | undefined;
    get name(): string;
    findCommand(id: Id): any;
    loadCommand(): Promise<unknown>;
    createSession(): void | undefined;
    run(): Promise<unknown>;
}
