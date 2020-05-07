import React from 'react'
import Text from './Text'

const NotFoundPage = props => (
  <div style={{ width: '100%', marginTop: '30px' }}>
    {props && props.notFoundPageText ? (
      <Text source={props.notFoundPageText} />
    ) : (
      <div />
    )}
  </div>
)

export default NotFoundPage
