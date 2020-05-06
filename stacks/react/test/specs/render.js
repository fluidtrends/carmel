/* eslint-disable no-unused-expressions */

import React from 'react'
import savor from 'react-savor'
import { AppContainer, Screen, Errors } from '../..'

import SimpleApp from '../assets/SimpleApp'
import FlowScreen from '../assets/chunks/auth/src/screens/flow'
import App from '../assets/App'
import FlowApp from '../assets/FlowApp'
import appConfig from '../assets/config'

savor

.add('should not render an empty app container', (context, done) => {
  const props = { info: { analytics: {} } }
  context.expect(() => {
    context.shallow(<AppContainer {...props} />)
  }).to.throw(Errors.UNABLE_TO_LOAD_APP().message)

  done()
})

.add('should render a simple app without any properties', (context, done) => {
    const props = { info: { analytics: {} } }
    context.expect(() => {
    context.shallow(<AppContainer {...props}>
      <SimpleApp />
    </AppContainer>)
  }).to.throw(Errors.UNABLE_TO_LOAD_CHUNKS().message)
  done()
})

.add('should create an app and have a valid lifecyle', (context, done) => {
    const props = { env: "production", info: { analytics: {} } }

    // Let's mount the app
  context.spy(SimpleApp.prototype, 'componentDidMount')
  context.spy(SimpleApp.prototype, 'render')

  const container = context.mount(<AppContainer {...appConfig}  {...props}>
    <SimpleApp {...appConfig} />
  </AppContainer>)

  // Let's make sure the component hierarchy is as expected
  context.expect(container.length).to.equal(1)
  context.expect(container.childAt(0).name()).to.equal('Provider')

  // Make sure the app is actually mounted and the lifecycle is initiated
  context.expect(SimpleApp.prototype.componentDidMount.calledOnce).to.be.true
  context.expect(SimpleApp.prototype.render.calledOnce).to.be.true

  // Let's clean up the observers
  SimpleApp.prototype.componentDidMount.restore()
  SimpleApp.prototype.render.restore()

  // And, we're looking good
  done()
})

.add('should create a valid screen instance', (context, done) => {
  const props = { env: "production", info: { analytics: {} } }

  const stub = context.stub(Screen.prototype, 'setState').callsFake(() => ({}))

  // Let's mount the app
  const container = context.mount(<AppContainer {...appConfig} {...props}>
    <App {...appConfig} />
  </AppContainer>)

  const wrapper = container.childAt(0).childAt(0).childAt(0).childAt(1).childAt(0)
  const screen = wrapper.instance()

  context.expect(screen.entities).to.exist
  stub.restore()

  // And, we're looking good
  done()
})

.add('should initiate a valid screen flow', (context, done) => {
  const props = { env: "production", info: { analytics: {} } }

  context.spy(FlowScreen.prototype, 'componentDidMount')
  context.spy(Screen.prototype, 'componentDidMount')

  const stub = context.stub(Screen.prototype, 'setState').callsFake(() => ({}))
  const clock = context.clock()

  // Let's mount the app
  const container = context.mount(<AppContainer {...appConfig} {...props}>
    <FlowApp {...appConfig} />
  </AppContainer>)
    
  context.expect(FlowScreen.prototype.componentDidMount).to.have.property('callCount', 1)
  context.expect(Screen.prototype.componentDidMount).to.have.property('callCount', 1)

  const wrapper = container.childAt(0).childAt(0).childAt(0).childAt(1).childAt(0)
  const screen = wrapper.instance()

  context.expect(wrapper.props().subscriptions).to.exist
  context.expect(wrapper.props().operations).to.exist
  
  screen.injectTransition({ name: "go", type: "go" })
  screen._stopSubscriptions()
  screen.transition({ type: "go" }, {})
  
  screen.onEvent({ id: "go", data: { handler: () => ({}) }})
  screen.onEvent({ id: "go2" })
  screen.onEvent({ id: "go3" })
  screen.onEvent({ id: "go4" })
  screen.onEvent({ id: "go5" })

  screen.operationDidFinish("name", {}, { test: "test" }, { flavor: "test", onError: () => ({}) })
  screen.operationDidFinish("name", {}, false, { flavor: "test", onSuccess: () => ({}) })

  stub.restore()
  clock.restore()

  // And, we're looking good
  done()
})

.run('App Rendering')
