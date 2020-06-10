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

    make() {
        this.exists || (this.path && fs.mkdirsSync(this.path!))
        return this.exists ? this : undefined
    }

    link(dir?: IDir) {
        if (this.exists) return this
        if (!this.path || !dir || !dir.exists) return undefined
        
        fs.existsSync(path.dirname(this.path)) || fs.mkdirsSync(path.dirname(this.path))
        fs.symlinkSync(dir.path!, this.path, 'dir')
        
        return this.exists ? this : undefined
    }

    copy(dir: IDir) {
        if (dir.exists) return dir
        
        fs.existsSync(path.dirname(dir.path!)) || fs.mkdirsSync(path.dirname(dir.path!))
        fs.copySync(this.path!, dir.path!)
        
        return dir.exists ? dir : undefined
    }

    get dirs() {
        if (!this.exists) {
            return []
        }

        return fs.readdirSync(this.path!).filter(d => fs.lstatSync(path.resolve(this.path!, d)).isDirectory())
    }
}
