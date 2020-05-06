/* eslint-disable no-unused-expressions */

import React from 'react'
import savor from 'react-savor'
import { Analytics, Errors } from '../..'
import ReactGA from 'react-ga'

savor

.add('should setup view analytics', (context, done) => {
  const stub = context.stub(ReactGA, 'initialize').callsFake(() => Promise.resolve())
    
  Analytics.initialize({ type: 'google', key: 'key' })
  stub.restore()

  // And, we're looking good
  done()
})

.add('should trigger view analytics', (context, done) => {
  const stub = context.stub(ReactGA, 'initialize').callsFake(() => Promise.resolve())
    
  Analytics.initialize({ type: 'google', key: 'key' })
  Analytics.view("/")
  stub.restore()

  // And, we're looking good
  done()
})

.add('should trigger event analytics', (context, done) => {
    const stub = context.stub(ReactGA, 'initialize').callsFake(() => Promise.resolve())
      
    Analytics.initialize({ type: 'google', key: 'key' })
    Analytics.event("/")
    stub.restore()
  
    // And, we're looking good
    done()
})

.add('should trigger error analytics', (context, done) => {
    const stub = context.stub(ReactGA, 'initialize').callsFake(() => Promise.resolve())
      
    Analytics.initialize({ type: 'google', key: 'key' })
    Analytics.error("/")
    stub.restore()
  
    // And, we're looking good
    done()
})
  
.run('Analytics')
