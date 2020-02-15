/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Commander, Commands, Session } = require('../../..')
const fs = require('fs-extra')
const path = require('path')

savor.

add('should make sure it does not expect any args', (context, done) => {
  const cmd = new Commands.Start()

  context.expect(cmd.requiredArgs.length).to.equal(0)
  context.expect(cmd.title).to.equal(Commands.Start.TITLE)
  context.expect(cmd.id).to.equal(Commands.Start.ID)

  done()  
}).

add('should not start with a valid workspace context', (context, done) => {
  const cmd = new Commands.Start()
  const session = new Session({ test: "test1234", dir: context.dir })
  savor.addAsset('assets/.carmel-nocontext.json', '.carmel.json', context)

  savor.promiseShouldFail(
      session.initialize().then(() => Commander.run(cmd, session)), done, (error) => {
        context.expect(error.message).to.equal(Commands.Start.ERRORS.COULD_NOT_EXECUTE('the workspace context is missing'))
  })
}).

add('should not start with a missing starter script', (context, done) => {
  const cmd = new Commands.Start()
  const session = new Session({ test: "test1234", dir: context.dir })
  savor.addAsset('assets/.carmel.json', '.carmel.json', context)

  savor.promiseShouldFail(
      session.initialize().then(() => Commander.run(cmd, session)), done, (error) => {
        context.expect(error.message).to.equal(Commands.Start.ERRORS.COULD_NOT_EXECUTE('the starter script could not be loaded'))
  })
}).

add('should start with a valid workspace', (context, done) => {
    const cmd = new Commands.Start()
    const session = new Session({ test: "test1234", dir: context.dir })
    savor.addAsset('assets/.carmel.json', '.carmel.json', context)
    savor.addAsset('assets/starter.js', 'starter.js', context)

    savor.promiseShouldSucceed(
        session.initialize().then(() => Commander.run(cmd, session)), done, (data) => {
    })
}).

run('[Carmel SDK] Start Command')
