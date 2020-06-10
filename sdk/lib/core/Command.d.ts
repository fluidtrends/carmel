import { ICommand, ISession, CommandProps, CommandArg, Target, Name, IProduct, CommandType } from '..';
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
export declare abstract class Command implements ICommand {
    /** @internal */
    protected _session?: ISession;
    /** @internal */
    protected _args?: CommandArg[];
    /** @internal */
    protected _props: CommandProps;
    /** @internal */
    protected _product?: IProduct;
    /**
     * Construct a new command from the given {@linkcode CommandProps}.
     *
     * @param props The {@linkcode CommandsProps} required for building this command
     */
    constructor(props?: CommandProps);
    /**
     *
     */
    get props(): CommandProps;
    /**
     *
     */
    get target(): Target;
    /**
     *
     */
    get id(): string;
    /**
     *
     */
    get type(): CommandType;
    /**
     *
     */
    get requiresArgs(): boolean;
    /**
     *
     */
    get product(): IProduct | undefined;
    /**
     *
     */
    get session(): ISession | undefined;
    /**
     *
     */
    get args(): CommandArg[] | undefined;
    /**
     *
     * @param name
     */
    arg(name: Name): any;
    /** @internal */
    private _validateArgs;
    /** @internal */
    private _validateProductTypeRequirements;
    /** @internal */
    private _validateTypeRequirements;
    /** @internal */
    private _resolve;
    /**
     * Run a command in the given session, this usually gets invoked by
     * the {@linkcode Engine}
     *
     * @param session The {@linkcode Session} in which to run this command
     * @param args The {@linkcode CommandArg} args used to execute this command, if any
     */
    run(session: ISession, args?: CommandArg[]): Promise<void>;
    /**
     * Children need to implement the execution flow.
     */
    abstract exec(): Promise<void>;
}
