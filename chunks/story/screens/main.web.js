import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import ChapterPreview from '../components/chapterPreview'
import merge from 'deepmerge'
import Chapter from '../components/Chapter'

export default class MainStoryScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
    this._onChapterSelected = this.onChapterSelected.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()

    this._loadStoryContent()
  }

  _loadStoryContent() {
    const self = this

    this.importRemoteData(`${this.props.source}/story.json`)
      .then(storyData => {
        self.setState({ storyData })
        self.props.getUsers({ usernames: storyData.authors })
      })
      .catch(error => console.log(error))
  }

  onChapterSelected(chapter) {
    this.triggerRedirect(`${this.props.path}/${chapter.slug}`)
  }

  getUsersOk(users) {
    if (!users.ok || !users.data || users.data.length === 0) {
      this.setState({ story: this.state.storyData, authors: {} })
      return
    }

    var authors = {}
    users.data.map(u => (authors[u.username] = Object.assign({}, u)))
    this.setState({ story: this.state.storyData, authors })
  }

  getUsersError(error) {
    this.setState({ story: this.state.storyData, authors: {} })
  }

  chapterData(chapter) {
    const storyFragment = Object.assign({}, this.state.story)
    delete storyFragment.chapters
    var data = Object.assign(
      {},
      merge.all([storyFragment, this.state.story.chapters[chapter]])
    )

    data.author = Object.assign(
      {},
      this.state.authors[data.author || data.authors[0]]
    )

    return data
  }

  renderChapterPreview(chapter) {
    const data = this.chapterData(chapter)

    return (
      <ChapterPreview
        onSelected={this._onChapterSelected}
        compact={this.isSmallScreen}
        source={this.props.source}
        chapter={data}
        chapterId={chapter}
      />
    )
  }

  renderStoryChapters() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {Object.keys(this.state.story.chapters).map(chapter =>
          this.renderChapterPreview(chapter)
        )}
      </div>
    )
  }

  renderChapter() {
    const chapterId = Object.keys(this.state.story.chapters).find(
      c => this.state.story.chapters[c].slug === this.dynamicVariant
    )

    if (!chapterId) {
      return this.renderStoryChapters()
    }

    const chapter = this.state.story.chapters[chapterId]

    if (!chapter) {
      return this.renderStoryChapters()
    }

    const data = this.chapterData(chapterId)

    return (
      <Chapter
        chapter={data}
        chapterId={chapterId}
        compact={this.props.compact}
        source={this.props.source}
      />
    )
  }

  renderLoading() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Components.Loading message="One sec please..." />
      </div>
    )
  }

  components() {
    if (!this.state.story) {
      return [this.renderLoading()]
    }

    if (this.dynamicVariant) {
      return [this.renderChapter()]
    }

    return [this.renderStoryChapters()]
  }
}
