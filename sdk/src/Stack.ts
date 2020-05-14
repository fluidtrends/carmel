import { 
    IStack
 } from './types'

export class Stack implements IStack {
    protected _props: any;

    constructor(props: any) {
        this._props = props
    }

    get props() {
        return this._props
    }
}
