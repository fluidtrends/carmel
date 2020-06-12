import savor, {
  Context,
  Completion
} from 'savor'

import { 
  Commands, 
  Strings,
  Engine,
  EngineState
} from '../../../src' 

import {
  Section
} from 'dodi'

savor.

add('should make sure it expects no required args', (context: Context, done: Completion) => {
  const cmd = new Commands.Start();

  context.expect(cmd.requiresArgs).to.be.false
  context.expect(cmd.id).to.equal("start")
  
  done()  
}).

add('should not start without a valid product', (context: Context, done: Completion) => {
  const cmd = new Commands.Start()
  process.env.CARMEL_USER_HOME = context.dir

  savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
    Engine.instance.stop()
    context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.ProductIsMissingString()))
  })  
}).

// add('should not start a new product with a missing bundle', (context: Context, done: Completion) => {
//   const cmd = new Commands.Start()
//     const stub = context.stub(Section.prototype, 'installArchive').callsFake(() => { throw new TypeError('oh oh') })

//     savor.addAsset('assets/.carmel-badstack.json', '.carmel.json', context)
//     process.env.CARMEL_USER_HOME = context.dir

//     savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
//       stub.restore()
//       Engine.instance.stop()
//       context.expect(error.message).to.equal("oh oh")    
//     })
// }).

// add('should not start a new product with a missing stack in the bundle', (context: Context, done: Completion) => {
//   const cmd = new Commands.Start()
  
//   process.env.CARMEL_USER_HOME = context.dir

//   savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//   savor.addAsset("assets/dirs/one", ".carmel/bundles/testbundle/1/testbundle", context)

//   savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
//     Engine.instance.stop()
//     context.expect(error.message).to.equal(Strings.ProductCannotLoadString(Strings.StackIsMissingString("testbundle/1/teststack")))    
//   })
// }).

// add('should not start without any chunks', (context: Context, done: Completion) => {
//   const cmd = new Commands.Start()

//   process.env.CARMEL_USER_HOME = context.dir

//   savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//   savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
//   savor.addAsset("assets/target", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web", context)

//   savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
//     Engine.instance.stop()
//     context.expect(error.message).to.equal(Strings.CannotTakeSnapshotString(Strings.ChunksAreMissingString()))
//   })
// }).

// add('should not start if the stack does not support the target', (context: Context, done: Completion) => {
//   const cmd = new Commands.Start()

//   process.env.CARMEL_USER_HOME = context.dir

//   savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//   savor.addAsset('assets/chunks', 'chunks', context)
//   savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
 
//   savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
//     Engine.instance.stop()
//     context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.TargetNotSupportedString("web")))
//   })
// }).

// add('should not start a new product without a required stack script', (context: Context, done: Completion) => {
//   const cmd = new Commands.Start()

//   process.env.CARMEL_USER_HOME = context.dir

//   savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//   savor.addAsset('assets/chunks', 'chunks', context)
//   savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
//   savor.addAsset("assets/dirs/one", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web", context)

//   savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
//     Engine.instance.stop()
//     context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.StackTargetScriptIsMissingString("web", "start")))
//   })
// }).

// add('should not start with a missing script loader', (context: Context, done: Completion) => {
//   const cmd = new Commands.Start()

//   process.env.CARMEL_USER_HOME = context.dir

//   savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//   savor.addAsset('assets/chunks', 'chunks', context)
//   savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
//   savor.addAsset("assets/missingscriptloader", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web/start", context)

//   savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
//     Engine.instance.stop()
//     context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.StackTargetScriptIsMissingString("web", "start")))
//   })
// }).

// add('should not start with a bad script loader', (context: Context, done: Completion) => {
//   const cmd = new Commands.Start()

//   process.env.CARMEL_USER_HOME = context.dir

//   savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//   savor.addAsset('assets/chunks', 'chunks', context)
//   savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
//   savor.addAsset("assets/badscript", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web/start", context)

//   savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
//     Engine.instance.stop()
//     context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.StackTargetScriptIsMissingString("web", "start")))
//   })
// }).

// add('should not start with a buggy script loader', (context: Context, done: Completion) => {
//   const cmd = new Commands.Start()

//   process.env.CARMEL_USER_HOME = context.dir

//   savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//   savor.addAsset('assets/chunks', 'chunks', context)
//   savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
//   savor.addAsset("assets/buggyscript", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web/start", context)

//   savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
//     Engine.instance.stop()
//     context.expect(error.message).to.equal("oops")
//   })
// }).

// add('should start a new product with a resolved stack', (context: Context, done: Completion) => {
//     const cmd = new Commands.Start()

//     process.env.CARMEL_USER_HOME = context.dir

//     savor.addAsset('assets/.carmel.json', '.carmel.json', context)
//     savor.addAsset('assets/chunks', 'carmel/chunks', context)
//     savor.addAsset("assets/testpacker", ".carmel/packers/testpacker/1/testpacker", context)
//     savor.addAsset("assets/teststack", ".carmel/stacks/teststack/1/teststack", context)

//     savor.promiseShouldSucceed(Engine.run(cmd), done, (output) => {
//       context.expect(Engine.instance.isStarted).to.be.false
//     })
// }).

run('[Carmel SDK] Start Command')
