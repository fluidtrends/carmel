import { IBundle, IDir } from '.';
import { Archive } from 'rara';
export declare class Bundle implements IBundle {
    protected _archive: Archive;
    protected _dir: IDir;
    constructor(archive: Archive);
    get archive(): Archive;
    get dir(): IDir;
}
