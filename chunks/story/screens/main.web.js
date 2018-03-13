import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class CategoriesScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
    this._posts = this.importData('posts')
  }

  itemSelected (fullPath) {
    console.log(fullPath)
    // this.triggerRedirect(fullPath)
  }

  get posts () {
    return this._posts || []
  }

  components () {
    return [
      <Components.Collection
        id='posts'
        categories={this.posts}
      />
    ]
  }
}
