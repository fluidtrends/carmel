import React from 'react'
import ReactDOM from 'react-dom'
import { AnimatedValue, animated, interpolate, controller as spring } from 'react-spring'

const AnimatedSection = ({ children }) => {
  const animation = new AnimatedValue(1)
  const hover = () => spring(animation, { to: 2, tension: 200, friction: 30 }).start()
  const unhover = () => spring(animation, { to: 1, tension: 0, friction: 1 }).start()

  return (
    <animated.div
      className="item"
      style={{
        marginLeft: animation.interpolate({ range: [1, 2], output: ['-1000px', 0] })
      }}
      onMouseOver={hover}
      onMouseOut={unhover}
      >
      {children}
    </animated.div>
  )
}

export default AnimatedSection
