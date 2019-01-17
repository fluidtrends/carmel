import React from 'react'
import { Components } from 'react-dom-chunky'

const ChunkyProduct = props => {
  const comp = {
    cover: 'Cover',
    text: 'Text'
  }
  const c = props ? comp[props.source] : ''
  const ChunkyComponent = Components[c]

  return <ChunkyComponent {...props} />
}

export default ChunkyProduct
