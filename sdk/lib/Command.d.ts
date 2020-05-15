import { ICommand } from '.';
import { ISession } from './types';
export declare class Command implements ICommand {
    protected readonly _args: any;
    protected _session?: ISession;
    protected _context?: any;
    constructor(args: any);
    get session(): ISession | undefined;
    get args(): any;
    get context(): any;
    get env(): any;
    get requiredArgs(): never[];
    get title(): string;
    get id(): string;
    get requiresContext(): boolean;
    get requiresFreshSession(): boolean;
    get cwd(): string;
    get missingRequiredArgs(): never[];
    exec(session?: ISession): Promise<void>;
    initialize(session?: ISession): Promise<void>;
}
