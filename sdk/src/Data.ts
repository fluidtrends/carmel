import {
    IData,
    UTF8
} from './types'

export class Data implements IData {
    protected readonly _raw: UTF8;

    constructor(raw: UTF8) {
        this._raw = raw
    }

    get raw() {
        return this._raw
    }

    json() {
        return JSON.parse(this.raw)
    }
}