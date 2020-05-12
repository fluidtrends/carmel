import fs from 'fs-extra'
import path from 'path'
import merge from 'deepmerge'

import { 
    Data,
    IFile,
    IData,
    Path,
    UTF8,
    Errors,
} from '.'
import { resolve } from 'dns';
 
export class File implements IFile {
    protected _data: IData;
    protected _path: Path;

    constructor(path: Path) {
        this._path = path
        this._data = new Data()
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

    async load() {
        return new Promise((resolve, reject) => {
            if (!this.exists) {
                throw Errors.FileDoesNotExist(this.path)
            }

            try {
                this.data.update(fs.readFileSync(path.resolve(this.path), 'utf8'))
                resolve(this.data.isJson ? this.data.json() : this.data.raw)
            } catch (e) {
                throw Errors.FileCouldNotBeLoaded(this.path, e.message)
            }
        })
    }

    save() {
        this.exists || fs.mkdirsSync(path.dirname(this.path))
        fs.writeFileSync(this.path, `${this.data.raw}`, 'utf8')
    }

    update(data: UTF8 | object) {
        this.data.append(data)
        this.save()
    }
}
