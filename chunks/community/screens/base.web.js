import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Data } from 'react-chunky'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import Fade from 'react-reveal/Fade'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Icon, Avatar } from 'antd'
import Bounce from 'react-reveal/Bounce'
import MessageForm from '../components/messageForm'

export default class MainScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._onSend = this.onSend.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    console.log(this.constructor.name, this.props.conversation)
  }

  onSend(args) {
    this.props.sendMessage(args)
  }

  // joinNow(session) {
  //   // Data.Cache.cacheItem("guestSession", Object.assign({}, session, { guild: "entrepreneurs", help: this.state.message }))
  //   //           .then(() => this.triggerRedirect('/register'))
  //   //           .catch((e) => this.triggerRedirect('/register'))
  // }

  // join () {
  //   // Data.Cache.retrieveCachedItem("guestSession")
  //   //           .then((session) => this.joinNow(session))
  //   //           .catch((e) => this.joinNow())
  // }

  sendMessageOk(response) {
  }

  sendMessageError(error) {
  }

  get containerStyle () {
    const margin = this.isSmallScreen ? '0' : '40px'
    return {
      display: 'flex',
      flex: 1,
      margin,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  renderMainContentFooter () {
    return <div />
  }

  get formWidth () {
    return this.isSmallScreen ? '95vw' : '700px'
  }

  get formPadding () {
    return this.isSmallScreen ? '10px' : '30px'
  }

  renderForm () {
    const width = this.formWidth
    const padding = this.formPadding
    return <div
        style={this.containerStyle}>
        <MessageForm
            conversation={this.props.conversation}
            compact={this.isSmallScreen}
            onSend={this._onSend}
            account={this.props.account}/>
      </div>
  }

  components () {
    const defaults = super.components()
    return [...defaults, this.renderForm()]
  }
}
