import Chapter from './Chapter'

export default class Section {
  constructor (chapter, props) {
    this._props = props
    this._chapter = chapter
  }

  get chapter() {
    return this._chapter
  }

  get props() {
    return this._props
  }
}
