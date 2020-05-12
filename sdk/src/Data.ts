import merge from 'deepmerge'
import {
    IData,
    UTF8
} from './types'

export class Data implements IData {
    protected _raw: UTF8;

    constructor(raw?: UTF8) {
        this._raw = raw || ""
    }

    get raw() {
        return this._raw
    }

    get isJson() {
        try {
            JSON.parse(this.raw)
            return true
        } catch (e) {
            return false
        }
    }

    json() {
        return this.raw ? JSON.parse(this.raw) : {}
    }

    append(data: UTF8 | object) {
        this._raw = (typeof data !== "object" ? `${this.raw}${data}` : JSON.stringify(merge(Object.assign({}, this.json()), data || {}), null, 2))
    }

    update(data: UTF8 | object) {
        this._raw = ""
        this.append(data)
    }
}