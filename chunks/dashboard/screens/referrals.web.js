import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import * as ChunkComponents from '../components'
import { Data } from 'react-chunky'

export default class MainReferralScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()

    const referralLink = this.props.location.pathname.split('/')[1]
    Data.Cache.cacheItem('referralId', referralLink)
    this.triggerRedirect(`/me`)
  }

  get cover () {}

  get username () {}

  get features () {
    return []
  }

  components () {
    return super.components().concat(this.features)
  }
}
