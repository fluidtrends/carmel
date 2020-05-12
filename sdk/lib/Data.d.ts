import { IData, UTF8 } from './types';
export declare class Data implements IData {
    protected _raw: UTF8;
    constructor(raw?: UTF8);
    get raw(): string;
    json(): any;
    append(data: UTF8 | object): void;
    update(data: UTF8 | object): void;
}
