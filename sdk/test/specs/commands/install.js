/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Commander, Commands, Session } = require('../../..')
const { Archive } = require('rara')
const npm = require('npm')
const { Index } = require('dodi')

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
  const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
  const cmd = new Commands.Install({ type: "npm" })
  const session = new Session({ dir: context.dir })
  const stub2 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))

  savor.addAsset('assets/.carmel-npminvalid.json', '.carmel.json', context)

  savor.promiseShouldFail(
      session.initialize().then(() => Commander.run(cmd, session)), done, (error) => {
        context.expect(error.message).to.equal(Commands.Install.ERRORS.COULD_NOT_EXECUTE('the dependencies could not be installed'))
        stub.restore()
        stub2.restore()
  })
}).

add('should install npm dependencies', (context, done) => {
    const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
    const cmd = new Commands.Install({ type: "npm" })
    const session = new Session({ dir: context.dir })
    const stub2 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))

    savor.addAsset('assets/.carmel-npm.json', '.carmel.json', context)

    savor.promiseShouldSucceed(
        session.initialize().then(() => Commander.run(cmd, session)), done, (data) => {
          stub.restore()
          stub2.restore()
    })
}).

run('[Carmel SDK] Install Command')
