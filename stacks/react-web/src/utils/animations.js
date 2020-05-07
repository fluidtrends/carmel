import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export function fadeIn (Component, name) {
  return (<ReactCSSTransitionGroup
    transitionName='animation-fadeIn'
    transitionAppear
    transitionAppearTimeout={700}
    transitionEnter={false}
    transitionLeave={false}>
    { Component }
  </ReactCSSTransitionGroup>)
}
