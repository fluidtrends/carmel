import { 
    IBundle
} from './types'

import {
    Archive
} from 'rara'

export class Bundle implements IBundle {
    protected _props: any;

    constructor(props: any) {
        this._props = props
    }

    get props() {
        return this._props
    }
}
