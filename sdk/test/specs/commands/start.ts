import savor, {
  Context,
  Completion
} from 'savor'

import { 
  Globals,
  Commands, 
  Strings,
  Engine,
  EngineState
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

  context.expect(cmd.requiresArgs).to.be.false
  context.expect(cmd.id).to.equal("start")
  
  done()  
}).

add('should not start without a valid product', (context: Context, done: Completion) => {
  const cmd = new Commands.Start()
 
  savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
    Engine.instance.stop()
    context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.ProductIsMissingString()))
  })  
}).

add('should not start a new product with a missing bundle', (context: Context, done: Completion) => {
  const cmd = new Commands.Start()

    savor.addAsset('assets/.carmel-badstack.json', '.carmel.json', context)
  
    savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
      Engine.instance.stop()
      context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.ProductIsNotReadyString()))    
    })
}).

add('should not start a new product with a missing stack in the bundle', (context: Context, done: Completion) => {
  const cmd = new Commands.Start()
  
  savor.addAsset('assets/.carmel.json', '.carmel.json', context)
  savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/oops", context)

  savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
    Engine.instance.stop()
    context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.ProductIsNotReadyString()))
  })
}).

add('should not start is the stack does not support the target', (context: Context, done: Completion) => {
  const cmd = new Commands.Start()

  process.env.CARMEL_USER_HOME = context.dir

  savor.addAsset('assets/.carmel.json', '.carmel.json', context)
  savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
 
  savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
    Engine.instance.stop()
    context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.TargetNotSupportedString("web")))
  })
}).

add('should not start a new product without a required stack script', (context: Context, done: Completion) => {
  const cmd = new Commands.Start()

  process.env.CARMEL_USER_HOME = context.dir

  savor.addAsset('assets/.carmel.json', '.carmel.json', context)
  savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
  savor.addAsset("assets/dirs/one", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web", context)

  savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
    Engine.instance.stop()
    context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.StackTargetScriptIsMissingString("web", "start")))
  })
}).

add('should not start with a missing script loader', (context: Context, done: Completion) => {
  const cmd = new Commands.Start()

  process.env.CARMEL_USER_HOME = context.dir

  savor.addAsset('assets/.carmel.json', '.carmel.json', context)
  savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
  savor.addAsset("assets/missingscriptloader", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web/start", context)

  savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
    Engine.instance.stop()
    context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.StackTargetScriptIsMissingString("web", "start")))
  })
}).

add('should not start with a bad script loader', (context: Context, done: Completion) => {
  const cmd = new Commands.Start()

  process.env.CARMEL_USER_HOME = context.dir

  savor.addAsset('assets/.carmel.json', '.carmel.json', context)
  savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
  savor.addAsset("assets/badscript", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web/start", context)

  savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
    Engine.instance.stop()
    context.expect(error.message).to.equal(Strings.CommandCannotExecuteString("start", Strings.StackTargetScriptIsMissingString("web", "start")))
  })
}).

add('should not start with a buggy script loader', (context: Context, done: Completion) => {
  const cmd = new Commands.Start()

  process.env.CARMEL_USER_HOME = context.dir

  savor.addAsset('assets/.carmel.json', '.carmel.json', context)
  savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
  savor.addAsset("assets/buggyscript", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web/start", context)

  savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
    Engine.instance.stop()
    context.expect(error.message).to.equal("oops")
  })
}).

add('should start a new product with a resolved stack, supported target and script', (context: Context, done: Completion) => {
    const cmd = new Commands.Start()

    process.env.CARMEL_USER_HOME = context.dir

    savor.addAsset('assets/.carmel.json', '.carmel.json', context)
    savor.addAsset("assets/bundles/test", ".carmel/bundles/testbundle/1/testbundle", context)
    savor.addAsset("assets/target", ".carmel/bundles/testbundle/1/testbundle/stacks/teststack/web", context)

    savor.promiseShouldSucceed(Engine.run(cmd), done, (output) => {
      context.expect(Engine.instance.isStarted).to.be.false
      context.expect(output).to.equal('ok')
    })
}).

run('[Carmel SDK] Start Command')
