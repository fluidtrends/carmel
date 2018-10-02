import React from 'react'
import ReactDOM from 'react-dom'
import { AnimatedValue, animated, interpolate, controller as spring } from 'react-spring'

const AnimatedSection = ({ children, animationType }) => {
  const animation = new AnimatedValue(1)
  const hover = () => spring(animation, { to: 2, tension: 200, friction: 30 }).start()
  const unhover = () => spring(animation, { to: 1, tension: 0, friction: 1 }).start()
  const animations = {
    slideFromLeft: {
      marginLeft: animation.interpolate({ range: [1, 2], output: ['-1000px', '0'] })
    },
    slideFromRight: {
      marginLeft: animation.interpolate({ range: [1, 2], output: ['1000px', '0'] })
    },
    opacity: {
      opacity: animation.interpolate({ range: [1, 2], output: ['0', '1'] })
    }
  }
  const animationMap = (animationType) => {
    return animations[animationType]
  }

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

export default AnimatedSection
