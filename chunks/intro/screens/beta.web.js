import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
const OSVersions = {
  "MacIntel": "Mac",
  "Win32": "Windows",
  "Linux": "Linux"
}
const StudioVersions = {
  "MacIntel": "http://files.carmel.io/studio/Carmel-Beta01.dmg",
  "Win32": "http://files.carmel.io/studio/Carmel.7z",
  "Linux": "http://files.carmel.io/studio/Carmel.7z"
}

export default class MainPersonScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderScreenshots () {
  }

  get cover () {
    let platform = 'MacIntel'
    if (window && window.navigator) {
      platform = window.navigator.platform.split(' ')[0]
    }

    return Object.assign({}, this.props.cover, {
      primaryActionTitle: `Download the studio for ${OSVersions[platform]}`,
      link: StudioVersions[platform]
    })
  }

  get features () {
    return []
  }

  components () {
    return super.components().concat(this.features)
  }
}
