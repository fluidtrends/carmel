import { ILogger } from '.';
export declare class Logger implements ILogger {
    protected _props: any;
    constructor(props: any);
    get props(): any;
}
