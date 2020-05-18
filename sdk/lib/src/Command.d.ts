import { ICommand, ISession } from '.';
export declare class Command implements ICommand {
    protected readonly _args: any;
    protected _session?: ISession;
    protected _context?: any;
    constructor(args: any);
    get session(): ISession | undefined;
    get args(): any;
    get context(): any;
    get env(): any;
    get requiredArgs(): string[];
    get title(): string;
    get id(): string;
    get requiresContext(): boolean;
    get requiresFreshSession(): boolean;
    get cwd(): string;
    get missingRequiredArgs(): string[];
    exec(session?: ISession): Promise<void>;
    initialize(session?: ISession): Promise<void>;
}
