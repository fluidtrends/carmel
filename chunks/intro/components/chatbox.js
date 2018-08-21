import React from 'react'
import { Component } from 'react-dom-chunky'
// import { ChatFeed, Message } from 'react-chat-ui'
// import {Launcher} from 'react-chat-window'

// import ChatBot from 'react-simple-chatbot'
// import { ThemeProvider } from 'styled-components'
// import { Transition } from 'react-transition-group'
// import {Motion, spring} from 'react-motion'
// import { injectGlobal } from 'styled-components'

// import posed, { PoseGroup } from 'react-pose'
// import {Motion, spring} from 'react-motion'
// import { Parallax, ParallaxLayer, Spring } from 'react-spring'

import { Loop, Stage } from 'react-game-kit'

// const duration = 300
//
// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
//   padding: 20,
//   display: 'inline-block',
//   backgroundColor: '#8787d8'
// }
//
// const transitionStyles = {
//   entering: { opacity: 0 },
//   entered: { opacity: 1 }
// }
//
// const Fade = ({ in: inProp }) => (
//   <Transition in={inProp} timeout={duration}>
//     {(state) => (
//       <div style={{
//         ...defaultStyle,
//         ...transitionStyles[state]
//       }}>
//         I am A fade Transition!
//       </div>
//     )}
//   </Transition>
// )

// const theme = {
//   background: '#ffffff',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#ffffff',
//   headerFontColor: '#212121',
//   headerFontSize: '15px',
//   botBubbleColor: '#ffffff',
//   botFontColor: '#212121',
//   userBubbleColor: '#00bcd4',
//   userFontColor: '#ffffff'
// }

// const messages = [
//   {
//     id: '1',
//     message: 'What is your name?',
//     trigger: '2'
//   },
//   {
//     id: '2',
//     user: true,
//     trigger: '3'
//   },
//   {
//     id: '3',
//     message: 'Hi {previousValue}, nice to meet you!'
//   },
//   {
//     id: '4',
//     user: true
//   }
// ]

// injectGlobal`
//   body {
//     margin: 0;
//     background: #fbfbfb;
//   }
// `

// const config = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 }
// }
// const Box = posed.div(config)

export default class ChatBox extends Component {
  constructor (props) {
    super(props)

    // this.state = {
    //   isVisible: false
    // }
  }

  componentDidMount () {
    super.componentDidMount()
    // setTimeout(() => {
    //   this.refs.parallax.scrollTo(1)
    // }, 2000)
  }

  // get messages () {
  //   return [{
  //     id: 'chunky',
  //     message: 'Hello',
  //     trigger: 'user'
  //   }, {
  //     id: 'user',
  //     user: true,
  //     trigger: 'chunky'
  //   }]
  // }

  // _onMessageWasSent (message) {
  //   this.setState({
  //     messageList: [...this.state.messageList, message]
  //   })
  // }
  //
  // _sendMessage (text) {
  //   if (text.length > 0) {
  //     this.setState({
  //       messageList: [...this.state.messageList, {
  //         author: 'them',
  //         type: 'text',
  //         data: { text }
  //       }]
  //     })
  //   }
  // }

  renderImage (value) {
    return <div>
      <h1> Hello </h1>
      <img src='../../../../assets/chunky-logo.gif' style={{
        width: '240px',
        height: '240px',
        padding: '40px',
        top: {value}
      }} />
    </div>
  }

  // fade (props) {
  //   return
  // }

  renderBackgroundLayer () {
    return <ParallaxLayer key='1' offset={0} speed={5} style={{ overflowX: 'auto'}} onScroll={e => e.stopPropagation()}>
      <div style={{ position: 'absolute', backgroundColor: '#FFCA28', top: 0, left: 0, width: '200%' }}>
        <div style={{
          backgroundColor: '#FFFF00',
          width: '500px'
        }}>
          <h1> hello0 </h1>
        </div>
      </div>
    </ParallaxLayer>
  }

  renderForegroundLayer () {
    return <ParallaxLayer key='1' offset={1} speed={5} style={{ overflowX: 'auto'}} onScroll={e => e.stopPropagation()}>
      <div style={{ position: 'absolute', backgroundColor: '#F48FB1', top: 0, left: 0, width: '200%' }}>
        <div style={{
          backgroundColor: '#FFFF00',
          width: '500px'
        }}>
          <h1> hello1 </h1>
        </div>
      </div>
    </ParallaxLayer>
  }

  render () {
    return [<Parallax
      ref='parallax'
      pages={2}
      horizontal
      scrolling>
      { this.renderBackgroundLayer() }
      { this.renderForegroundLayer() }
    </Parallax>,
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {styles => <img src='../../../../assets/chunky-logo.gif' style={{
          width: '240px',
          height: '240px',
          padding: '40px',
          opacity: styles.opacity
        }} />}
      </Spring>]
    // return <Motion defaultStyle={{
    //   marginTop: -500,
    //   opacity: 0
    // }} style={{
    //   marginTop: spring(0),
    //   opacity: 1
    // }}>
    //   {interpolatingStyle => <div style={interpolatingStyle}>
    //
    //   </div>}
    // </Motion>
  }

  // render () {
  //   return <div>
  //     <img src='../../../../assets/chunky-logo.gif' style={{
  //       width: '240px', height: '240px', padding: '40px'
  //     }} />
  //   </div>
  // }

  // render () {
  //   return (<Transition in timeout={this.state.duration}>
  //     <div style={{
  //       transition: `opacity ${this.state.duration}ms ease-in-out`,
  //       opacity: `${this.state.opacity}`
  //     }}>
  //       Hello bro!!!!!!
  //       <img src='../../../../assets/chunky-logo.gif' style={{
  //         width: '240px', height: '240px', padding: '40px'
  //       }} />
  //       YOOOOOOO!!!!
  //     </div>
  //   )}
  //   </Transition>)

     //  <Launcher
     //    agentProfile={{
     //      teamName: 'react-live-chat',
     //      imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
     //    }}
     //    onMessageWasSent={this._onMessageWasSent.bind(this)}
     //    messageList={this.state.messageList}
     //    showEmoji
     // />
  // }

  // render () {
  //   return (
  //     <div>
  //       <ThemeProvider theme={theme}>
  //         <ChatBot
  //           recognitionEnable
  //           botAvatar={'../../../../assets/chunky-logo.png'}
  //           floating={false}
  //           headerTitle='Welcome to Carmel'
  //           steps={this.messages}
  //         />
  //       </ThemeProvider>
  //     </div>
  //
  //   )
  // }

  // render () {
  //   return <ChatFeed
  //     messages={this.state.messages} // Boolean: list of message objects
  //     isTyping={this.state.is_typing} // Boolean: is the recipient typing
  //     hasInputField={false} // Boolean: use our input, or use your own
  //     showSenderName // show the name of the user who sent the message
  //     bubblesCentered={false} // Boolean should the bubbles be centered in the feed?
  //     // JSON: Custom bubble styles
  //     bubbleStyles={{
  //       text: {
  //         fontSize: 30
  //       },
  //       chatbubble: {
  //         borderRadius: 70,
  //         padding: 40
  //       }
  //     }}
  //   />
  // }
}

const styles = {

}
