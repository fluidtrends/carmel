import {
    ICommand,
    Errors,
    Strings,
    ISession,
    CommandProps,
    Id,
    CommandArg,
    Target,
    Name,
    IChunk,
    IScript,
    IProduct,
    IApp,
    CommandType
} from '..'

const Defaults = (cls: ICommand) => ({
    id: cls.constructor.name.toLowerCase(),
    target: Target.WEB,
    type: CommandType.PRODUCT
} as CommandProps)

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
export abstract class Command implements ICommand {
    /** @internal */
    protected _session?: ISession;

    /** @internal */
    protected _args?: CommandArg[];

    /** @internal */
    protected _props: CommandProps;

    /** @internal */
    protected _product?: IProduct;

    /** @internal */
    protected _script?: IScript;

    /** @internal */
    protected _app?: IApp; 

    /**
     * Construct a new command from the given {@linkcode CommandProps}.
     * 
     * @param props The {@linkcode CommandsProps} required for building this command
     */
    constructor(props?: CommandProps) {
        this._props = Object.assign({}, Defaults(this), props) 
    }

    /**
     * 
     */
    get props() {
        return this._props 
    }

    /**
     * 
     */
    get target() {
        return this.props.target!
    }

    /**
     * 
     */
    get id() {
        return this.props.id
    }

    /**
     * 
     */
    get type () {
        return this.props.type!
    }

    /**
     *  
     */  
    get script() {
        return this._script
    }
    
    /**
     * 
     */
    get requiresArgs() {
        return this.props.requiredArgs !== undefined && this.props.requiredArgs.length > 0
    }

    /**
     * 
     */
    get requiresScript() {
        return this.props.requiresScript !== undefined && this.props.requiresScript
    }

    /**
     * 
     */
    get requiresApp() {
        return this.props.requiresApp !== undefined && this.props.requiresApp
    }

    /**
     * 
     */
    get product() {
        return this._product
    }

    /**
     * 
     */
    get session() {
        return this._session
    }

    /**
     * 
     */
    get args() {
        return this._args
    }

    /**
     * 
     */
    get app() {
        return this._app
    }

    /**
     * 
     * @param name 
     */
    arg(name: Name) {
        return this.args?.find(a => a.name === name)?.value
    }

    /** @internal */
    private _validateArgs(args?: CommandArg[]) {
        if (!this.requiresArgs) {
            // If we don't expect any args, let's get outta here
            return 
        }

        if (!args || args.length === 0) {
            // Looks like no arguments were passed at all, when some were expected
            throw Errors.ArgumentIsMissing(this.props.requiredArgs![0])
        }

        let missingArgs = this.props.requiredArgs!.filter((arg) => !args.find(a => a.name === arg))
        if (missingArgs && missingArgs.length > 0) {
            // Look for any missing args
            throw Errors.ArgumentIsMissing(missingArgs[0]) 
        }
    }

    /** @internal */
    private _validateProductTypeRequirements() {
        if (!this.product || !this.product.exists) {
            // Ensure the product exists 
            throw Errors.CommandCannotExecute(this.id, Strings.ProductIsMissingString())
        }
        
        if (!this.product.isReady) {
            // Ensure the product is ready  
            throw Errors.CommandCannotExecute(this.id, Strings.ProductIsNotReadyString())
        }        

        if (!this.product.stack?.supportsTarget(this.target)) {
            // Make sure this target is supported by our stack
            throw Errors.CommandCannotExecute(this.id, Strings.TargetNotSupportedString(this.target))
        }

        if (this.requiresScript && !this.script) {
            // If we require a script let's make sure the stack has it
            throw Errors.CommandCannotExecute(this.id, Strings.StackTargetScriptIsMissingString(this.target, this.id))
        }

        // if (this.requiresApp && !this.app) {
        //     // If we require an app let's make sure the product has it
        //     throw Errors.CommandCannotExecute(this.id, Strings.ProductAppIsMissingString(this.target))
        // }
    }

    /** @internal */
    private _validateTypeRequirements() {
        switch(this.type) {
            case CommandType.PRODUCT:
            this._validateProductTypeRequirements()
            break;                
        }
    }

    /** @internal */
    private async _resolve() {
        this._product = await this.session?.resolveProduct(this.target)

        switch(this.type) {
            case CommandType.PRODUCT:
            await this._product?.load()
            // this._app = await this.product?.snapshot?.app(this.target)
            this._script = await this.product?.stack?.findTargetScript(this.target, this.id)
            break;                
        }
    }

    /**
     * Run a command in the given session, this usually gets invoked by
     * the {@linkcode Engine}
     * 
     * @param session The {@linkcode Session} in which to run this command
     * @param args The {@linkcode CommandArg} args used to execute this command, if any
     */
    async run(session: ISession, args?: CommandArg[]) {  
        // Keep track of the arguments
        this._args = args

        // Keep track of the session too
        this._session = session

        // Look for a product, if any
        await this._resolve()
        
        // First, make sure the passed args (if any) are valid
        this._validateArgs(args)

        // Check that all requirements for this command type are met
        this._validateTypeRequirements()

        // Execute this command's custom logic
        const result = await this.exec()

        // Send back the result, if any
        return result
    }

    /**
     * 
     */
    async runScript() {
        return await this.script?.exec(this.args)
    }

    /**
     * Children need to implement the execution flow.
     */
    abstract async exec(): Promise<void>;
}