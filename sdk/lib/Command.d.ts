import { ICommand, CommandProps } from '.';
export declare class Command implements ICommand {
    protected readonly _props: CommandProps;
    constructor(props: CommandProps);
    get props(): CommandProps;
}
