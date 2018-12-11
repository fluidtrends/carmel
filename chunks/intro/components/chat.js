import React from 'react'
import { Component } from 'react-dom-chunky'
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from 'react-chat-widget'
import Wobble from 'react-reveal/Wobble'

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = { chatOpen: false, hover: false }
  }
  componentDidMount() {
    super.componentDidMount()
    addResponseMessage('How may I assist you ?')
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`)
  }

  renderLauncher(handleToggle) {
    return (
      <div
        onMouseEnter={() => this.setState({ hover: !this.state.hover })}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Wobble spy={this.state.hover}>
          <img
            onClick={handleToggle}
            src="assets/chunky-logo.gif"
            style={{ cursor: 'pointer', width: 100, height: 100 }}
          />
        </Wobble>
      </div>
    )
  }

  render() {
    return (
      <Widget
        title={'Hello I am chunky'}
        subtitle={
          'I am your code monkey which will assist you in the tech jungle'
        }
        handleNewUserMessage={this.handleNewUserMessage}
        badge={1}
        showCloseButton={true}
        launcher={handleToggle => this.renderLauncher(handleToggle)}
      />
    )
  }
}
