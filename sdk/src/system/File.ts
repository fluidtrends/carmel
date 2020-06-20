import fs from 'fs-extra'
import path from 'path'

import { Data, IFile, IData, Path, IDir, UTF8, Errors } from '..'

/**
 *
 * @category System
 */
export class File implements IFile {
  protected _data: IData
  protected _path?: Path

  constructor(path?: Path) {
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
    return this.path !== undefined && fs.existsSync(path.resolve(this.path))
  }

  link(file?: IFile) {
    if (this.exists) return this
    if (!this.path || !file || !file.exists) return undefined

    fs.existsSync(path.dirname(this.path)) ||
      fs.mkdirsSync(path.dirname(this.path))
    fs.symlinkSync(file.path!, this.path, 'file')

    return this.exists ? this : undefined
  }

  load() {
    if (!this.exists) {
      throw Errors.FileDoesNotExist(this.path || '')
    }

    try {
      this.data.update(fs.readFileSync(path.resolve(this.path!), 'utf8'))
      return this.data.isJson ? this.data.json() : this.data.raw
    } catch (e) {
      throw Errors.FileCouldNotBeLoaded(this.path!, e.message)
    }
  }

  remove() {
    this.exists && fs.removeSync(this.path!)
    return this
  }

  save() {
    this.exists || fs.mkdirsSync(path.dirname(this.path!))
    fs.writeFileSync(this.path!, `${this.data.raw}`, 'utf8')
  }

  move(to: IFile) {
    if (!this.exists) return
    fs.moveSync(this.path!, to.path!)
  }

  update(data: UTF8 | object, mode?: number) {
    this.data.append(data)
    this.save()
    mode && fs.chmodSync(this.path!, mode)
  }
}
