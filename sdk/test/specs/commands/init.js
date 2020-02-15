/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Commander, Commands, Session } = require('../../..')
const fs = require('fs-extra')
const path = require('path')

savor.

add('should make sure it expects required args', (context, done) => {
  const cmd = new Commands.Init()

  context.expect(cmd.requiredArgs[0]).to.equal('name')
  context.expect(cmd.requiredArgs[1]).to.equal('template')
  context.expect(cmd.id).to.equal(Commands.Init.ID)
  context.expect(cmd.requiresContext).to.be.equal(Commands.Init.REQUIRES_CONTEXT)

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
    
  add('should not create a workspace without a session', (context, done) => {
    const cmd = new Commands.Init({ 
      name: "test", 
      template: "test", 
      env: { test: "test", homeDir: context.dir }})

      const stub = context.stub(fs, "existsSync").callsFake(() => false)

      savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
        stub.restore()
        context.expect(error.message).to.equal(Commands.Init.ERRORS.COULD_NOT_EXECUTE('the session is missing'))
      })
  }).

  add('should create a new workspace', (context, done) => {
    const cmd = new Commands.Init({ 
      name: "test", 
      template: "test", 
      env: { test: "test", homeDir: context.dir }})

      const stub = context.stub(fs, "existsSync").callsFake(() => false)
      const session = new Session({ test: "test1234", dir: context.dir })

      savor.promiseShouldSucceed(Commander.run(cmd, session), done, () => {
        context.expect(cmd.title).to.equal('Creating a new workspace')
        stub.restore()
    })
  }).

  add('should skip creating if a workspace exists', (context, done) => {
    const cmd = new Commands.Init({ 
      name: "test", 
      template: "test", 
      env: { test: "test", homeDir: context.dir }})

      savor.addAsset('assets/.carmel.json', '.carmel.json', context)

      const session = new Session({ test: "test1234", dir: context.dir })

      savor.promiseShouldFail(Commander.run(cmd, session), done, (error) => {
        context.expect(error.message).to.equal(Commands.Init.ERRORS.ALREADY_EXISTS('workspace'))
      })
  }).

run('[Carmel SDK] Init Command')
