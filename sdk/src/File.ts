import fs from 'fs-extra'
import path from 'path'
import merge from 'deepmerge'

import { 
    Data,
    IFile,
    IData,
    Path,
    Errors,
} from '.'

export class File implements IFile {
    protected _data?: IData;
    protected _path: Path;

    constructor(path: Path) {
        this._path = path
    }

    get data() {
        return this._data
    } 
    
    get path() {
        return this._path
    }    

    get exists() {
        return fs.existsSync(path.resolve(this.path))
    }

    load() {
        if (!this.exists) {
            throw Errors.FileDoesNotExist(this.path)
        }

        try {
            this._data = new Data(fs.readFileSync(path.resolve(this.path), 'utf8'))
        } catch (e) {
            throw Errors.FileCouldNotBeLoaded(this.path, e.message)
        }
    }
}
