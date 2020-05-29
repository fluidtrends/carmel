import fs from 'fs-extra'
import path from 'path'

import { 
    IDir,
    Errors,
    File,
    Path
} from '..'
 
/**
 * 
 * @category System
 */
export class Dir implements IDir {
    protected _path?: Path;

    constructor(path?: Path) {
        this._path = path
    }

    get path() {
        return this._path
    }    

    get exists() {
        return this.path !== undefined && fs.existsSync(path.resolve(this.path!))
    }

    dir(dirpath: Path) {
        return this.exists ? new Dir(path.resolve(this.path!, dirpath)) : undefined
    }

    file(filepath: Path) {
        return this.exists ? new File(path.resolve(this.path!, filepath)) : undefined
    }

    get dirs() {
        if (!this.exists) {
            return []
        }

        return fs.readdirSync(this.path!).filter(d => fs.lstatSync(path.resolve(this.path!, d)).isDirectory())
    }
}
