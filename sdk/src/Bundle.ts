import { 
    IBundle,
    Dir,
    IDir
} from '.'

import {
    Archive
} from 'rara'

export class Bundle implements IBundle {
    protected _archive: Archive;
    protected _dir: IDir;

    constructor(archive: Archive) {
        this._archive = archive
        this._dir = new Dir(this.archive.path || undefined)
    }

    get archive() {
        return this._archive
    }

    get dir() {
        return this._dir
    }
}
