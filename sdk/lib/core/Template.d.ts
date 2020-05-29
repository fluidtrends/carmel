import { ITemplate, IBundle, Name, IArtifact } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Template.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Template implements ITemplate {
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
    load(): Promise<this>;
}
