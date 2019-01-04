import React from 'react'

const Editor = props => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default
    require('brace/mode/json')
    require('brace/theme/monokai')
    return <Ace {...props} />
  }

  return null
}

export default Editor
