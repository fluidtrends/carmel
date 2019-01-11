import Section from './Section'

export default class Chapter {
  constructor (story, props) {
    this._props = props
    this._story = story
    this._variants = props.variants
    this._variantId = 0
    this._load()
  }

  _load() {
    this._sections = this.variant.sections.map(s => new Section(this, s))
  }

  get quote() {
    return this.variant.quote
  }

  get url() {
    return `${this.story.url}/${this.variant.url}`
  }

  get hashtags() {
    return this.variant.hashtags
  }

  get summary() {
    return this.variant.summary
  }

  get tags() {
    return this.props.tags
  }

  get image() {
    return this.variant.image
  }

  get title() {
    return this.variant.title
  }

  get variantId() {
    return this._variantId
  }

  get variant() {
    return this.variants[this.variantId]
  }

  get date() {
    return this.props.date
  }

  get author() {
    return this.props.author
  }

  get story () {
    return this._story
  }

  get variants() {
    return this._variants
  }

  get sections() {
    return this._sections
  }

  get props() {
    return this._props
  }
}
