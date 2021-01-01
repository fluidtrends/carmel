import { IContent, IDir, IFile, Path } from '..'
import { IProduct } from '../types'

export class Content implements IContent {
  /** @internal */
  protected _rootDir: IDir

  /** @internal */
  protected _index?: IFile

  /** @internal */
  protected _hashes: Map<Path, any>

  /** @internal */
  protected _product: IProduct

  constructor(product: IProduct) {
      this._product = product
      this._rootDir = product.dir.dir("content")?.make()!
      this._index = product.dir.file("content.json")
      this._hashes = new Map<Path, any>()
  }

  get product() {
      return this._product
  }

  get rootDir() {
      return this._rootDir
  }

  get index() {
    return this._index
  }

  get hashes() {
      return this._hashes
  }

  async initialize() {
    this.index?.update({ lastUpdated: `${Date.now()}` })
  }

  async refresh() {
    const { dirs, files }  = this.rootDir
    
    this.index?.update({ 
        lastUpdated: `${Date.now()}`,
        dirs,
        files
    })
  }
}
