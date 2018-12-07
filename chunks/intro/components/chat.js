import React from 'react'
import { Component } from 'react-dom-chunky'
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from 'react-chat-widget'
export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = { chatOpen: false }
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
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img
          onClick={handleToggle}
          src="assets/chunky-logo.gif"
          style={{ cursor: 'pointer', width: 100, height: 100 }}
        />
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
