import { IStack, StackProps } from './types'

export class Stack implements IStack {
    protected _props: StackProps;

    constructor(props: StackProps) {
        this._props = props
    }

    get props() {
        return this._props
    }
}
