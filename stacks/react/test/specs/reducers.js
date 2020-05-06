/* eslint-disable no-unused-expressions */

import savor from 'react-savor'
import { Reducers } from '../..'

savor.add('should ignore undefined actions', (context, done) => {
  const oldState = {}
  const newState = Reducers.common.asyncReducer('test')(oldState)
  context.expect(newState).to.equal(oldState)
  done()
})

.add('should ignore empty actions', (context, done) => {
  const oldState = {}
  const newState = Reducers.common.asyncReducer('test')(oldState, {})
  context.expect(newState).to.equal(oldState)
  done()
})

.add('should ignore typeless actions', (context, done) => {
  const oldState = {}
  const newState = Reducers.common.asyncReducer('test')(oldState, 'dummy')
  context.expect(newState).to.equal(oldState)
  done()
})

.add('should ignore non-Chunky actions', (context, done) => {
  const oldState = {}
  const newState = Reducers.common.asyncReducer('test')(oldState, { type: 'dummy' })
  context.expect(newState).to.equal(oldState)
  done()
})

.add('should ignore chunkless actions', (context, done) => {
  const oldState = {}
  const newState = Reducers.common.asyncReducer('test')(oldState, { type: '@@Carmel/dummy' })
  context.expect(newState).to.equal(oldState)
  done()
})

.add('should ignore foreign actions', (context, done) => {
  const oldState = {}
  const newState = Reducers.common.asyncReducer('test')(oldState, { type: '@@Carmel/start/dummy' })
  context.expect(newState).to.equal(oldState)
  done()
})

.add('should ignore unknown stage actions', (context, done) => {
  const oldState = {}
  const newState = Reducers.common.asyncReducer('test')(oldState, { type: '@@Carmel/oops/test' })
  context.expect(newState).to.equal(oldState)
  done()
})

.add('should process start actions', (context, done) => {
  const oldState = {}
  const newState = Reducers.common.asyncReducer('test')(oldState, { type: '@@Carmel/start/test' })
  context.expect(newState.inProgress).to.equal(true)
  context.expect(newState.done).to.equal(false)
  done()
})

.add('should process error actions', (context, done) => {
  const oldState = {}
  const error = new Error('oopsie')
  const newState = Reducers.common.asyncReducer('test')(oldState, { type: '@@Carmel/error/test', error })
  context.expect(newState.inProgress).to.equal(false)
  context.expect(newState.done).to.equal(true)
  context.expect(newState.error.main).to.equal(error)
  done()
})

.add('should process ok actions', (context, done) => {
  const oldState = {}
  const data = { hello: 'world' }
  const newState = Reducers.common.asyncReducer('test')(oldState, { type: '@@Carmel/ok/test', data })
  context.expect(newState.inProgress).to.equal(false)
  context.expect(newState.done).to.equal(true)
  context.expect(newState.data.main).to.equal(data)
  done()
})

.add('should process flavored ok actions', (context, done) => {
  const oldState = {}
  const data = { hello: 'world' }
  const newState = Reducers.common.asyncReducer('test')(oldState, { type: '@@Carmel/ok/test', flavor: 'sweet', data })
  context.expect(newState.inProgress).to.equal(false)
  context.expect(newState.done).to.equal(true)
  context.expect(newState.data.sweet).to.equal(data)
  done()
})

.run('Data Reducers')
