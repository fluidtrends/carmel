import { IData, UTF8 } from './types';
export declare class Data implements IData {
    protected readonly _raw: UTF8;
    constructor(raw: UTF8);
    get raw(): string;
    json(): any;
}
