import { IScript } from '..';
/**
 *
 * @category System
 * @internal
 */
export declare class Script implements IScript {
    protected _args: any;
    protected _platform: string;
    constructor(args: any);
    get platform(): string;
    get target(): string;
    get args(): any;
}
