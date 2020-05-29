import { IScript, Target, IStack, Name, Module, IDir, CommandArg } from '..';
/**
 *
 * @category System
 * @internal
 */
export declare class Script implements IScript {
    /** @internal */
    protected _target: Target;
    /** @internal */
    protected _name: Name;
    /** @internal */
    protected _stack: IStack;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _module: Module;
    /**
     *
     * @param target
     * @param name
     */
    constructor(stack: IStack, target: Target, name: Name);
    /**
     *
     */
    get name(): string;
    /**
     *
     */
    get target(): Target;
    /**
     *
     */
    get stack(): IStack;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get module(): any;
    /**
     *
     */
    get exists(): boolean;
    /**
     *
     */
    load(): Promise<this | undefined>;
    /**
     *
     * @param args
     */
    exec(args?: CommandArg[]): Promise<any>;
}
