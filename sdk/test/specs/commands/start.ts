import savor, {
  Context,
  Completion
} from 'savor'

import { 
  Globals,
  Commands, 
  Strings,
  Config,
  Session,
  Commander
} from '../../../src' 

import fs from 'fs-extra'
import path from 'path'

import {
  Archive,
  Registry
} from 'rara'

import {
  Index
} from 'dodi'

savor.

add('should make sure it expects no required args', (context: Context, done: Completion) => {
  const cmd = new Commands.Start();

  context.expect(cmd.requiredArgs.length).to.equal(0)
  context.expect(cmd.id).to.equal("start")
  context.expect(cmd.requiresContext).to.be.true

  done()  
}).

add('should not run without a session', (context: Context, done: Completion) => {
  const cmd = new Commands.Start({ env: { homeDir: context.dir }})
  const stub = context.stub(fs, "existsSync").callsFake(() => false)

  savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
    stub.restore()
    context.expect(error.message).to.equal(Strings.CommandCannotExecute(cmd.id, 'the session is missing'))
  })
}).

// add('should not start with an invalid stack', (context: Context, done: Completion) => {
//     const cmd = new Commands.Start({ env: { homeDir: context.dir }})
//     const session = new Session({ test: "test1234", dir: context.dir, sections: [{ id: "bundles" }] })

//     savor.addAsset('assets/.carmel-badstack.json', '.carmel.json', context)
//     savor.addAsset("assets/test-archive", "archives/test-archive/1", context)

//     const stub = context.stub(Registry, 'extract').callsFake(() => Promise.resolve({ version: '1' }))
//     const stub2 = context.stub(Registry, 'manifest').callsFake(() => Promise.resolve({ version: '1' }))
  
//     savor.promiseShouldFail(session.initialize().then(() => Commander.run(cmd, session)), done, (error) => {
//       context.expect(error.message).to.equal(Strings.StackCannotLoad("unknown", 'it is invalid'))
//       stub.restore()
//       stub2.restore()
//   })
// }).

// add('should not start a new product without a stack', (context: Context, done: Completion) => {
//   const cmd = new Commands.Start({ env: { homeDir: context.dir }})
//   const session = new Session({ test: "test1234", dir: context.dir, sections: [{ id: "bundles" }] })

//   savor.addAsset('assets/.carmel-missingstack.json', '.carmel.json', context)
//   savor.addAsset("assets/bundles/test", ".carmel/bundles/test/1/test", context)

//   const stub = context.stub(Registry, 'extract').callsFake(() => Promise.resolve({ version: '1' }))
//   const stub2 = context.stub(Registry, 'manifest').callsFake(() => Promise.resolve({ version: '1' }))

//   savor.promiseShouldFail(session.initialize().then(() => Commander.run(cmd, session)), done, (error) => {
//     context.expect(error.message).to.equal(Strings.StackCannotLoad("testoops", 'it is missing'))
//     stub.restore()
//     stub2.restore()
//   })
// }).

// add('should start a new product', (context: Context, done: Completion) => {
//     const cmd = new Commands.Start({ env: { homeDir: context.dir }})
//     const session = new Session({ test: "test1234", dir: context.dir, sections: [{ id: "bundles" }] })

//     savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//     savor.addAsset("assets/bundles/test", ".carmel/bundles/test/1/test", context)

//     const stub = context.stub(Registry, 'extract').callsFake(() => Promise.resolve({ version: '1' }))
//     const stub2 = context.stub(Registry, 'manifest').callsFake(() => Promise.resolve({ version: '1' }))
  
//     savor.promiseShouldSucceed(session.initialize().then(() => Commander.run(cmd, session)), done, () => {
//       context.expect(cmd.title).to.equal(Config.commands.start.title)
//       context.expect(session.workspace!.stack!.name).to.equal('test')
//       stub.restore()
//       stub2.restore()
//   })
// }).

run('[Carmel SDK] Start Command')
