import React from 'react'
import ReactVivus from 'react-vivus'

const AnimatedSvg = ({style, path, type, duration, timingFunction, id}) => (
  <ReactVivus
    id={id}
    option={{
      file: path,
      type: type,
      animTimingFunction: 'EASE',
      duration: duration
    }}
    style={style}
  />
);
export default AnimatedSvg;
