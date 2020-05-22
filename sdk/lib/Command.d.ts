import { ICommand, IScript, ISession } from '.';
export declare class Command implements ICommand {
    protected readonly _args: any;
    protected _session?: ISession;
    protected _context?: any;
    protected _props?: any;
    protected _script?: IScript;
    constructor(args: any);
    get id(): string;
    get props(): any;
    get script(): IScript | undefined;
    get session(): ISession | undefined;
    get args(): any;
    get context(): any;
    get env(): any;
    get cwd(): string;
    get requiredArgs(): string[];
    get title(): any;
    get requiresContext(): any;
    get requiresFreshSession(): any;
    get type(): any;
    get missingRequiredArgs(): string[];
    exec(session?: ISession): Promise<void>;
    initialize(session?: ISession): Promise<void>;
}
