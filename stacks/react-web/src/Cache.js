export default class Cache {

  constructor (props) {
    this._images = {}
    this._timestamp = Date.now()
    this._props = Object.assign({}, props)
    this.loadContext()
  }

  get props () {
    return this._props
  }

  get isDesktop () {
    return this.props.desktop
  }

  get isRuntime () {
    return (typeof window !== 'undefined' && typeof document !== 'undefined')
  }

  get context () {
    return this._context
  }

  loadDesktopContext () {
    this._context = (name) => ({ placeholder: `../../../../assets/${name}`, images: [{ path: `../../../../assets/${name}` }, { path: `../../../../assets/${name}` }] })
  }

  loadContext () {
    return this.loadDesktopContext()
  }

  get images () {
    return this._images
  }

  hasImage (name) {
    return (this.images[name] !== undefined)
  }

  cacheImage (id) {
    const name = `./${id}`
    const timestamp = Date.now()
    const data = this.context(name, true)
    const placeholder = data.placeholder
    const small = data.images[0].path
    const large = data.images[1].path
    this._images[id] = { data, id, timestamp, small, large, placeholder }
  }

  image (name) {
    if (!this.hasImage(name)) {
      this.cacheImage(name)
    }

    return this.images[name]
  }
}
