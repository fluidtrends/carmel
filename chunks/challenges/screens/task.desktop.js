import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

import { Button, Icon } from 'antd'

export default class TaskScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get renderBackButton () {
    return (
      <div style={{margin: 20}}>
        <Button
          type={'primary'}
          onClick={() => this.triggerRedirect('/challenges') }
        >
          <Icon type={'left'} />Go back
        </Button>
      </div>
    )
  }


  get renderStartChallenge () {
    return (
      <div style={{margin: 10}}>
        <Button
          type="primary"
          block
          style={{width: 200}}
        >
          <Icon type="play-circle" />Next
        </Button>
      </div>
    )
  }

  components () {
		console.log('task render')
    const variant = this._variant || {}
    const { task1 } = variant.content ? variant.content : ''

    return [
      this.renderBackButton,
      <Components.Article text={task1} />,
      this.renderStartChallenge
    ]
  }
}
