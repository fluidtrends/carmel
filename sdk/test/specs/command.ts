import savor, {
  Context,
  Completion
} from 'savor'

import { 
  Command, 
  Strings,
  Session,
  Commander
} from '../../src'

savor.

add('should make sure it expects required args', (context: Context, done: Completion) => {
  const cmd = new Command({ test: "test" })

  context.expect(cmd.requiredArgs.length).to.equal(0)
  context.expect(cmd.title).to.equal("command")
  context.expect(cmd.args.test).to.equal("test")

  done()
}).

add('should not run without a session', (context: Context, done: Completion) => {
  const cmd = new Command({ env: { homeDir: context.dir }})

  savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
    context.expect(cmd.cwd).to.equal(process.cwd())
    context.expect(cmd.id).to.equal("_")
    context.expect(error.message).to.equal(Strings.CommandCannotExecute(cmd.id, 'the session is missing'))
  })
}).

add('should not run without a workspace', (context: Context, done: Completion) => {
  const cmd = new Command({ env: { homeDir: context.dir }})
  const session = new Session({ dir: context.dir })

  savor.promiseShouldFail(Commander.run(cmd, session), done, (error) => {
    context.expect(error.message).to.equal(Strings.CommandCannotExecute(cmd.id, 'the workspace is invalid'))
  })
}).

run('[Carmel SDK] Command')
