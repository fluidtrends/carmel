/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Command, Session, Commander } = require('../..')

savor.

add('should make sure it expects required args', (context, done) => {
  const cmd = new Command({ test: "test" })

  context.expect(cmd.requiredArgs.length).to.equal(0)
  context.expect(cmd.title).to.equal("command")
  context.expect(cmd.args.test).to.equal("test")

  done()
}).

// add('should not run without a session', (context, done) => {
//   const cmd = new Command({ env: { homeDir: context.dir }})

//   savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
//     context.expect(cmd.cwd).to.equal(process.cwd())
//     context.expect(cmd.id).to.equal(Command.ID)
//     context.expect(error.message).to.equal(Command.ERRORS.COULD_NOT_EXECUTE('the session is missing'))
//   })
// }).

add('should not run without a workspace', (context, done) => {
  const cmd = new Command({ env: { homeDir: context.dir }})
  const session = new Session({ dir: context.dir })

  savor.promiseShouldFail(Commander.run(cmd, session), done, (error) => {
    context.expect(error.message).to.equal(Command.ERRORS.DOES_NOT_EXIST('workspace'))
  })
}).

run('[Carmel SDK] Command')
