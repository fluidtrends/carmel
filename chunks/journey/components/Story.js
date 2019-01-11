import Chapter from './Chapter'

export default class Story {
  constructor (props) {
    this._props = props
    this._load(props)
  }

  _load(props) {
    this._chapters = props.chapters.map(c => new Chapter(this, c))
  }

  get chapters() {
    return this._chapters
  }

  get url() {
    return this.props.url
  }

  get props() {
    return this._props
  }
}
