import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import Guilds from '../components/guilds'
import { Data } from 'react-chunky'
import { Button, ButtonIcon } from '@rmwc/button'
import { Typography } from '@rmwc/typography'
import Bounce from 'react-reveal/Bounce'
import Pulse from 'react-reveal/Pulse'
import RubberBand from 'react-reveal/RubberBand'

export default class Main extends Screen {
  constructor (props) {
    super(props)

    this.state = {}
    this._onAction = this.onAction.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onAction(item) {
    this.triggerRedirect(item.path)
  }

  renderMainContent() {
      return (<div
        style={{
          display: 'flex',
          flex: 1,
          padding: "20px",
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Guilds
        onAction={this._onAction}
        redirect={this.triggerRedirect}
        compact={this.isSmallScreen}/>
      </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
