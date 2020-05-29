import { IStack, IBundle, Name, IDir, Script, IArtifact, Target } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Stack.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Stack implements IStack {
    /** @internal */
    protected _artifact?: IArtifact;
    /**
     *
     * @param name
     * @param bundle
     */
    constructor(name: Name, bundle: IBundle);
    /**
     *
     */
    get artifact(): IArtifact | undefined;
    /**
     *
     */
    load(): Promise<this | undefined>;
    /**
     *
     * @param target
     * @param name
     */
    findTargetScript(target: Target, name: Name): Promise<Script | undefined>;
    /**
     *
     * @param target
     */
    targetDir(target: Target): IDir | undefined;
    /**
     *
     * @param target
     */
    targetScriptDir(target: Target, name: Name): IDir | undefined;
    /**
     *
     * @param target
     */
    supportsTarget(target: Target): boolean;
    /**
     *
     * @param target
     * @param name
     */
    supportsTargetScript(target: Target, name: Name): boolean;
}
