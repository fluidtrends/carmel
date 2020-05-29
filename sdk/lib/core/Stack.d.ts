import { IStack, IBundle, IDir } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Stack.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Stack implements IStack {
    protected _props: any;
    protected _bundle?: IBundle;
    protected _dir?: IDir;
    constructor(props: any);
    get name(): any;
    get dir(): IDir | undefined;
    get props(): any;
    get bundle(): IBundle | undefined;
    get exists(): any;
    load(): Promise<this>;
    makeConfig(): void;
}
