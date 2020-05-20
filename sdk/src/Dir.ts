import fs from 'fs-extra'
import path from 'path'

import { 
    IDir,
    Errors,
    Path
} from '.'
 
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

    async dirs() {
        return new Promise<Path[]>((resolve, reject) => {
            if (!this.exists) {
                throw Errors.DirDoesNotExist(path.basename(this.path || ""))
            }

            resolve(fs.readdirSync(this.path!).filter(d => fs.lstatSync(path.resolve(this.path!, d)).isDirectory()))
        })
    }
}
