/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Plugin, Commander } = require('../..')
const fs = require('fs-extra')
const path = require('path')

savor.

add('should not run without a session', (context, done) => {  
  const plugin = new Plugin()

  savor.promiseShouldFail(plugin.run(), done, (error) => {
    context.expect(error.message).to.equal(Plugin.ERRORS.CANNOT_LOAD('the session is missing'))
  })
}).

add('should not load a missing command', (context, done) => {
  const plugin = new Plugin({ session: { id: "test" }, command: { id: "test" }})

  savor.promiseShouldFail(plugin.run(), done, (error) => {
    context.expect(error.message.toLowerCase().startsWith('cannot find module')).to.be.true
  })
}).

add('should not run without a command', (context, done) => {  
  const plugin = new Plugin({ session: { id: "test" }})

  savor.promiseShouldFail(plugin.run(), done, (error) => {
    context.expect(error.message).to.equal(Plugin.ERRORS.CANNOT_LOAD('the command is missing'))
  })
}).

add('should catch a failed command execution', (context, done) => {
  const plugin = new Plugin({ session: { id: "test" }, command: { id: "init" }})

  savor.promiseShouldFail(plugin.run(), done, (error) => {
    context.expect(error.message).to.equal(Commander.ERRORS.MISSING_ARG('name'))
  })
}).

add('should run a command', (context, done) => {
  const plugin = new Plugin({ session: { id: "test" }, command: { id: "init", args: {
    name: "test",
    template: "test"
  }}})

  savor.promiseShouldSucceed(plugin.run(), done, (data) => {
  })
}).

run('[Carmel SDK] Plugin')
