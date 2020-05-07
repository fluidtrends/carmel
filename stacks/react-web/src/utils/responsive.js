import React from 'react'

import MediaQuery from 'react-responsive'

export const breakpoints = {
  main: 1224
}

export function renderResponsiveLarge (component) {
  return (<MediaQuery minWidth={breakpoints.main}>
    { component }
  </MediaQuery>)
}

export function renderResponsiveSmall (component) {
  return (<MediaQuery maxWidth={breakpoints.main}>
    { component }
  </MediaQuery>)
}

export function renderResponsive (key, small, large) {
  return (<div key={key}>
    { renderResponsiveSmall(small) }
    { renderResponsiveLarge(large) }
  </div>)
}