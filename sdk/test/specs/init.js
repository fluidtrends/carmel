/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Commander, Commands } = require('../..')
const fs = require('fs-extra')

savor.

add('should make sure it expects required args', (context, done) => {
  const cmd = new Commands.Init()

  context.expect(cmd.requiredArgs[0]).to.equal('name')
  context.expect(cmd.requiredArgs[1]).to.equal('template')
  context.expect(cmd.requiredArgs[2]).to.equal('bundle')
  
  done()  
}).

add('should make sure it does not run without a name', (context, done) => {
    const cmd = new Commands.Init({ env: { homeDir: context.dir }})
    
    savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
        context.expect(error.message).to.equal(Commander.ERRORS.MISSING_ARG("name"))
    })
  }).
  
  add('should make sure it does not run without a template', (context, done) => {
    const cmd = new Commands.Init({ name: "test", env: { homeDir: context.dir }})
  
    savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
        context.expect(error.message).to.equal(Commander.ERRORS.MISSING_ARG("template"))
    })
  }).
  
  add('should make sure it does not run without a bundle', (context, done) => {
    const cmd = new Commands.Init({ name: "test", template: "test", env: { homeDir: context.dir }})
  
    savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
      context.expect(error.message).to.equal(Commander.ERRORS.MISSING_ARG("bundle"))
    })
  }).
  
  add('should not create if it already exists', (context, done) => {
    const cmd = new Commands.Init({ 
      name: "test", 
      template: "test", 
      bundle: "test",
      env: { homeDir: context.dir }})
    const stub = context.stub(cmd, "hasFile").callsFake(() => true)
  
    savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
      stub.restore()
        context.expect(error.message).to.equal(Commands.Init.ERRORS.ALREADY_EXISTS('product'))
    })
  }).
  
  add('should create a new workspace', (context, done) => {
    const cmd = new Commands.Init({ 
      name: "test", 
      template: "test", 
      bundle: "test",
      env: { test: "test", homeDir: context.dir }})

      const stub = context.stub(fs, "existsSync").callsFake(() => false)

      savor.promiseShouldSucceed(Commander.run(cmd), done, () => {
        context.expect(cmd.title).to.equal('Creating a new workspace')

    })
  }).

run('[Carmel SDK] init command')
