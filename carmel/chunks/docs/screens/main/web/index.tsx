import React, { Fragment } from 'react'
import { Web } from 'jayesse'

export default () => {
  return <Web.Components.Document 
          repo="fluidtrends/carmel"
          branch="master"
          root="docs"
          mount="/docs"/>
}
