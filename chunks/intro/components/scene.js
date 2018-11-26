import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import { Button, ButtonIcon } from 'rmwc/Button'
import Bounce from 'react-reveal/Bounce'
import Typist from 'react-typist'
import { Typography } from '@rmwc/typography'
import { IconButton } from '@rmwc/icon-button'
import marked from 'marked'

export default class Actor extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._onContinue = this.onContinue.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
  }

  onContinue () {
    this.props.onContinue && this.props.onContinue()
  }

  header (offset, speed) {
    return [<Parallax.Layer key='chunkyHead' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Bounce top>
        <img src={`../../../../assets/${this.props.image}`} style={{ display: 'block', width: '200px' }} />
      </Bounce>
    </Parallax.Layer>]
  }

  speech(text, offset, speed) {
    return [<Parallax.Layer key='speech' offset={offset} speed={speed} style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }}>
      <Bounce bottom>
        <div style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
           <Typist avgTypingDelay={40} cursor={{ show: false }}>
              <Typography key='1' use={this.props.compact ? 'headline5' : 'headline4'} style={{
                color: "#263238",
                textAlign: 'center'
              }}>
                { text }
              </Typography>
          </Typist>
        </div>
      </Bounce>
    </Parallax.Layer>]
  }

  description(text, offset, speed) {
    const Text = marked(text)
    return [<Parallax.Layer key='description' offset={offset} speed={speed} style={{
      opacity: 1,
       display: 'flex',
       alignItems: 'flex-start',
       justifyContent: 'center'
     }}>
     <div style={{
       width: this.props.compact ? '100%' : "800px",
       textAlign: "center",
       color: "#607D8B"
     }}>
      <Bounce bottom delay={2000}>
        <Components.Text source={this.props.summary}/>
      </Bounce>
    </div>
    </Parallax.Layer>]
  }

  prompt(text, offset, speed) {
    return [<Parallax.Layer key='speech' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Bounce bottom delay={3000}>
        <Typography key='1' use="headline6" style={{
          color: "#CFD8DC",
          textAlign: 'center'
        }}>
          { text }
        </Typography>
      </Bounce>
    </Parallax.Layer>]
  }

  promptIcon(offset, speed) {
    return [<Parallax.Layer key='speech' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Bounce bottom delay={3500}>
        <Typography key='1' use="headline6" style={{
          color: "#CFD8DC",
          textAlign: 'center'
        }}>
          <IconButton icon="arrow_downward" onClick={() => this.props.next && this.props.next()}/>
        </Typography>
      </Bounce>
    </Parallax.Layer>]
  }


  render () {
    const hello = this.props.text
    const next = this.props.prompt
    const summary = this.props.summary

    return [
      ...this.header(this.props.offset + 0, 0.1),
      ...this.speech(hello, this.props.offset + 0.3, 0.1),
      ...this.description(summary, this.props.offset + (this.props.compact ? 0.4 : 0.4), 0.3),
      ...this.prompt(next, this.props.offset + 0.9, 0.4),
      ...this.promptIcon(this.props.offset + 0.93, 0.4)
    ]
  }
}

// import React from 'react'
// import { Component } from 'react-dom-chunky'
// import { Parallax } from 'react-spring'
// import { Button, ButtonIcon } from 'rmwc/Button'
//
// export default class Actor extends Component {
//   constructor (props) {
//     super(props)
//
//     this.state = { }
//     this._onContinue = this.onContinue.bind(this)
//   }
//
//   componentDidMount () {
//     super.componentDidMount()
//   }
//
//   componentWillUnmount () {
//   }
//
//   onContinue () {
//     this.props.onContinue && this.props.onContinue()
//   }
//
//   top (offset, speed) {
//     return [<Parallax.Layer
//       offset={offset}
//       speed={speed}
//       key='top'
//       onClick={() => this.props.scroller.scrollTo(2)}
//       style={{
//         display: 'flex',
//         alignItems: 'flex-start',
//         justifyContent: 'flex-start'
//       }}>
//       <img src={'../../../../assets/top.png'} style={{ display: 'block', width: '100%', margin: '0' }} />
//     </Parallax.Layer>]
//   }
//
//   board (offset, speed) {
//     const color = '#4E342E'
//     const fontSize = 18
//
//     return [<Parallax.Layer key='board' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <img src={'../../../../assets/board.png'} style={{ display: 'block', width: '450px', marginTop: '80px' }} />
//     </Parallax.Layer>,
//       <Parallax.Layer
//         offset={offset}
//         speed={speed}
//         key='board2'
//         style={{ opacity: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
//         <h3 style={{
//           color,
//           fontFamily,
//           textShadow: '2px 2px 5px #ffffff',
//           width: '220px',
//           fontSize,
//           textAlign: 'center'
//         }}>
//           { `With Carmel you will be able to create websites, mobile apps and more. I'm going to show you how. Oh, and no previous experience is necessary. Easy peasy.`}
//           <br />
//           <br />
//           { `Hey, wanna create a website right now?`}
//         </h3>
//       </Parallax.Layer>]
//   }
//
//   chunkyHead (offset, speed) {
//     return [<Parallax.Layer key='chunkyHead' offset={offset} speed={speed} style={{ opacity: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
//       <img src={`../../../../assets/chunky-logo.gif`} style={{ display: 'block', width: '250px', marginTop: '-40px' }} />
//     </Parallax.Layer>]
//   }
//
//   action (offset, speed) {
//     return [<Parallax.Layer
//       offset={offset}
//       speed={speed}
//       key='action'
//       style={{
//         display: 'flex',
//         alignItems: 'flex-end',
//         justifyContent: 'center'
//       }}>
//       <div>
//         <Button
//           theme='secondary-bg text-primary-on-secondary'
//           style={{marginBottom: '40px'}}
//           raised
//           onClick={this._onContinue}>
//           <ButtonIcon icon='done' />
//           { `Create your first website` }
//         </Button>
//       </div>
//     </Parallax.Layer>]
//   }
//
//   render () {
//     return [
//       ...this.top(this.props.offset, 0.5),
//       ...this.board(this.props.offset, 0.4),
//       ...this.chunkyHead(this.props.offset, 0.5),
//       ...this.action(this.props.offset, 0.5)
//     ]
//   }
// }
//
// const fontFamily = "'Indie Flower', cursive"
