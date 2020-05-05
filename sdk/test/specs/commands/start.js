/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Commander, Commands, Session } = require('../../..')
const { Archive } = require('rara')
const fs = require('fs-extra')
const path = require('path')
const { Index } = require('dodi')

savor.

add('should make sure it does not expect any args', (context, done) => {
  const cmd = new Commands.Start()

  context.expect(cmd.requiredArgs.length).to.equal(0)
  context.expect(cmd.title).to.equal(Commands.Start.TITLE)
  context.expect(cmd.id).to.equal(Commands.Start.ID)

  done()  
}).

// add('should not start with a valid workspace context', (context, done) => {
//   const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
//   const cmd = new Commands.Start()
//   const session = new Session({ test: "test1234", dir: context.dir })
//   savor.addAsset('assets/.carmel-nocontext.json', '.carmel.json', context)
//   const stub2 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))

//   savor.promiseShouldFail(
//     session.initialize().then(() => Commander.run(cmd, session)), done, (error) => {
//         context.expect(error.message).to.equal(Commands.Start.ERRORS.COULD_NOT_EXECUTE('the workspace context is missing'))
//         stub.restore()
//         stub2.restore()
//     })
// }).

// add('should not start with a missing starter script', (context, done) => {
//   const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
//   const cmd = new Commands.Start()
//   const session = new Session({ test: "test1234", dir: context.dir })
//   savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//   const stub2 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))

//   savor.promiseShouldFail(
//       session.initialize().then(() => Commander.run(cmd, session)), done, (error) => {
//         context.expect(error.message).to.equal(Commands.Start.ERRORS.COULD_NOT_EXECUTE('the script could not be loaded'))
//         stub.restore()
//         stub2.restore()
//     })
// }).

// add('should start with a valid workspace', (context, done) => {
//   const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
//   const cmd = new Commands.Start()
//     const session = new Session({ test: "test1234", dir: context.dir })
//     savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//     savor.addAsset('assets/starter.js', 'starter.js', context)
//     const stub2 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))

//     savor.promiseShouldSucceed(
//         session.initialize().then(() => Commander.run(cmd, session)), done, (data) => {
//         stub.restore()
//         stub2.restore()
//     })
// }).

run('[Carmel SDK] Start Command')
