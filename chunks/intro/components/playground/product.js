import React from 'react'
import { Components } from 'react-dom-chunky'

const ChunkyProduct = props => (
  <Components.Cover
    source={props.source || props.defaults.source}
    image={props.image || props.defaults.image}
    opacity={props.opacity || props.defaults.opacity}
    title={
      props.title || props.title === ''
        ? props.title
        : props.props.defaults.title
    }
    type={props.type && props.type !== 'ico' ? props.type : props.defaults.type}
    subtitle={
      props.subtitle || props.subtitle === ''
        ? props.subtitle
        : props.defaults.subtitle
    }
    titleStyle={props.titleStyle}
    subtitleStyle={props.subtitleStyle}
  />
)

export default ChunkyProduct
