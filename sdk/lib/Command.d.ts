import { ICommand, IScript, ISession } from '.';
/**
 * The base class representing a single unit of execution.
 * Every Carmel Command extends this class and tweaks the defaults as needed.
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Command.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Command.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Command.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Command implements ICommand {
    /** @internal */
    protected readonly _args: any;
    /** @internal */
    protected _session?: ISession;
    /** @internal */
    protected _context?: any;
    /** @internal */
    protected _props?: any;
    /** @internal */
    protected _script?: IScript;
    /**
     * @param args The arguments required for execution, if any
     */
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
    get requiresStack(): any;
    get requiresFreshIndex(): any;
    get type(): any;
    get requiresWorkspace(): boolean;
    get missingRequiredArgs(): string[];
    /**
     * Looks for potential issues with the session, and with the environment.
     * If the coast is clear it executes the command logic.
     *
     * @param session The {@linkcode Session} in which to run this command
     */
    exec(session?: ISession): Promise<void>;
}
