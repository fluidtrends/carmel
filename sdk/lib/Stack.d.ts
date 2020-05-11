import { IStack, StackProps } from './types';
export declare class Stack implements IStack {
    protected _props: StackProps;
    constructor(props: StackProps);
    get props(): StackProps;
}
