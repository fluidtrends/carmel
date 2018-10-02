import React from 'react'
import ReactVivus from 'react-vivus'

const AnimatedSvg = ({style, path, type, duration, timingFunction}) => (
  <ReactVivus
    id="svg2"
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
