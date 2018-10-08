import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { AnimatedValue, Spring, animated, interpolate, controller as spring } from 'react-spring'
import { database } from 'firebase';
import { action } from '@storybook/addon-actions'

const animation = new AnimatedValue(1)

const animations = {
  opacity: {
    opacity: animation.interpolate({ range: [1, 2], output: ['0', '1'] })
  }
}
const animationMap = (animationType) => {
  return animations[animationType]
}

export default class AnimatedSection extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { children, animationType, startAnimation, config } = this.props
    const hover = () => spring(animation, { to: 2, tension: 30, friction: 40 }).start()

    if(animationType === 'opacity') {
      return (
        <animated.div
          className="item"
          style={animationMap(animationType)}
          onMouseOver={hover}
          >
          {children}
        </animated.div>
      )
    }

    const xValue = animationType  === 'slideFromLeft' ? '-100%' : '100%'

    return (
      <React.Fragment>
        {
          startAnimation ?
          <Spring 
            native 
            from={{ x: xValue}} to={{ x: '0'}}
            config={{ tension: 30, friction: 40 }}
          >
          {({x}) => (
            <animated.div
              style={{
                transform: interpolate([x], (x) => `translate(${x}`)
              }}
            >
              {children}
            </animated.div>
          )}
          </Spring>
          :
          <div style={{height: '200px'}}/>
        }
      </React.Fragment>
    )

  }


}

// const AnimatedSection = ({ children, animationType, startAnimation }) => {
//   const animation = new AnimatedValue(1)
//   const hover = () => spring(animation, { to: 2, tension: 200, friction: 30 }).start()
//   const unhover = () => spring(animation, { to: 1, tension: 0, friction: 1 }).start()
//   const animations = {
//     opacity: {
//       opacity: animation.interpolate({ range: [1, 2], output: ['0', '1'] })
//     }
//   }
//   const animationMap = (animationType) => {
//     return animations[animationType]
//   }

//   return (
//     {
//       animationType === 'opacity' ?
//       <animated.div
//         className="item"
//         style={animationMap(animationType)}
//         onMouseOver={hover}
//         >
//         {children}
//       </animated.div>
//       :
      
//     }
//   )
// }

// export default AnimatedSection
