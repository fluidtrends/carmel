/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Commander, Commands, Session } = require('../../..')
const npm = require('npm')

savor.

add('should make sure it expects required args', (context, done) => {
  const cmd = new Commands.Install()

  context.expect(cmd.requiredArgs.length).to.equal(0)
  context.expect(cmd.id).to.equal(Commands.Install.ID)
  context.expect(cmd.title).to.equal(Commands.Install.TITLE)
  context.expect(cmd.requiresContext).to.be.equal(Commands.Install.REQUIRES_CONTEXT)

  done()  
}).

add('should not install dependencies without a specified installer type', (context, done) => {
  const cmd = new Commands.Install({ type: "npm" })
  const session = new Session({ dir: context.dir })

  savor.addAsset('assets/.carmel-npminvalid.json', '.carmel.json', context)

  savor.promiseShouldFail(
      session.initialize().then(() => Commander.run(cmd, session)), done, (error) => {
        context.expect(error.message).to.equal(Commands.Install.ERRORS.COULD_NOT_EXECUTE('the dependencies could not be installed'))
  })
}).

add('should install npm dependencies', (context, done) => {
    const cmd = new Commands.Install({ type: "npm" })
    const session = new Session({ dir: context.dir })

    savor.addAsset('assets/.carmel-npm.json', '.carmel.json', context)

    savor.promiseShouldSucceed(
        session.initialize().then(() => Commander.run(cmd, session)), done, (data) => {
    })
}).

run('[Carmel SDK] Install Command')
