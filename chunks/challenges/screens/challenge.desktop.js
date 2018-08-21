import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

import { Button, Icon } from 'antd'

export default class ChallengeScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get renderBackButton () {
    return (
      <div style={{margin: 10, position: 'absolute', left: 0}}>
        <Button
          type={'primary'}
          onClick={() => this.triggerRedirect('/challenges') }
        >
          <Icon type={'left'} />Go back
        </Button>
      </div>
    )
  }

  get renderImg () {
    return (
      <img
        style={{marginTop: 50}}
        src ='https://github.com/fluidtrends/carmel/blob/challenges-chunk/challenges/img/brand.jpg?raw=true' />
    )
  }

  get renderStartChallenge () {
    return (
      <div style={{margin: 10}}>
        <Button
          type="primary"
          block
          style={{width: 200}}
          onClick={() => this.triggerRedirect('/challenges/task') }
        >
          <Icon type="play-circle" />Take the challenge
        </Button>
      </div>
    )
  }

  components () {
    console.log('challenge', this)
    const variant = this._variant || {}
    const { title, json } = variant.content ? variant.content : ''
    console.log('json', json)
    this.importRemoteData(json).then( data => {
      console.log(data)
    })
    return [
      this.renderBackButton,
      this.renderImg,
      <Components.Article text={title} />,
      this.renderStartChallenge
    ]
  }
}
