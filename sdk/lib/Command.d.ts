import { ICommand } from '.';
export declare class Command implements ICommand {
    protected readonly _props: any;
    constructor(props: any);
    get props(): any;
}
