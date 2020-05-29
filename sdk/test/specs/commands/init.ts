import savor, {
  Context,
  Completion
} from 'savor'

import { 
  Commands, 
  Strings,
  Engine
} from '../../../src' 

import {
  Section
} from 'dodi'

savor.

add('should make sure it expects required args', (context: Context, done: Completion) => {
  const cmd = new Commands.Init();

  context.expect(cmd.requiresArgs).to.be.true
  context.expect(cmd.id).to.equal("init")

  done()  
}).

add('should make sure it does not run without a name', (context: Context, done: Completion) => {
    const cmd = new Commands.Init()

    savor.promiseShouldFail(Engine.run(cmd), done, (error) => {
        context.expect(error.message).to.equal(Strings.ArgumentIsMissingString("name"))
    })
  }).
  
add('should make sure it does not run without a template', (context: Context, done: Completion) => {
  const cmd = new Commands.Init()

  savor.promiseShouldFail(Engine.run(cmd, [{ 
    name: "name", value: "hello" }
  ]), done, (error) => {
      context.expect(error.message).to.equal(Strings.ArgumentIsMissingString("template"))
  })
}).

add('should skip creating if a product exists already', (context: Context, done: Completion) => {
  const cmd = new Commands.Init()

    savor.addAsset('assets/.carmel.json', '.carmel.json', context)

    savor.promiseShouldFail(Engine.run(cmd, [{ 
      name: "name", value: "hello" 
    }, { name: "template", value: "default" }
    ]), done, (error) => {
        context.expect(error.message).to.equal(Strings.ProductAlreadyExistsString())
    })  
}).

add('should skip creating if the template bundle does not exist remotely', (context: Context, done: Completion) => {
  const cmd = new Commands.Init() 

  const stub = context.stub(Section.prototype, 'installArchive').callsFake(() => { throw new TypeError('oh oh') })

  savor.promiseShouldFail(Engine.run(cmd, [{ 
    name: "name", value: "hello" 
  }, { name: "template", value: "default" }
  ]), done, (error) => {
      context.expect(error.message).to.equal("oh oh")
      stub.restore()
  })
}).

// add('should skip creating if the template bundle does not exist remotely', (context: Context, done: Completion) => {
//   const cmd = new Commands.Init() 

//   // const stub = context.stub(Registry, 'extract').callsFake(() => Promise.resolve({ version: '1' }))
//   const stub = context.stub(Registry, 'manifest').callsFake(() => Promise.reject(new TypeError('oh oh')))
//   // const stub3 = context.stub(Registry, 'npm').callsFake(() => Promise.resolve('ok'))


//   savor.promiseShouldFail(Engine.run(cmd, [{ 
//     name: "name", value: "hello" 
//   }, { name: "template", value: "default" }
//   ]), done, (error) => {
//       context.expect(error.message).to.equal(Strings.ArgumentIsMissingString("template"))
//       stub.restore()
//   })
// }).

// add('should create a new product', (context: Context, done: Completion) => {
//     const cmd = new Commands.Init()

//     const stub = context.stub(Archive.prototype, 'save').callsFake(() => Promise.resolve({ }))
//     const stub2 = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
//     const stub3 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))
  
//     savor.promiseShouldSucceed(Promise.all([Engine.run(cmd, [{
//       name: "name", value: "hello"
//     }, {
//       name: "template", value: "default"
//     }]), Engine.session?.resolveProduct()]), done, ([,product]) => {
//       context.expect(Engine.session).to.exist
//       // context.expect(product).to.exist
//       // context.expect(product?.exists).to.be.true
//       stub.restore()
//       stub2.restore()
//       stub3.restore()
//   })
// }).

// add('should parse the archive from a basic uri', (context: Context, done: Completion) => {
//     const cmd = new Commands.Init({ template: "test" })
//     cmd.parse()

//     context.expect(cmd.archive.source).to.equal('npm')
//     context.expect(cmd.archive.id).to.equal(Globals.DEFAULT_ARCHIVE_ID)
//     context.expect(cmd.archive.version).to.not.exist

//     done()
// }).

// add('should parse the archive from a full uri', (context: Context, done: Completion) => {
//   const cmd = new Commands.Init({ template: "npm://fluidtrends:bananas/templates/personal#1.0.2" })
//   cmd.parse()

//   context.expect(cmd.archive.source).to.equal('npm')
//   context.expect(cmd.archive.id).to.equal('@fluidtrends/bananas')
//   context.expect(cmd.archive.version).to.equal('1.0.2')

//   done()
// }).

// add('should parse the archive from an unscoped uri', (context: Context, done: Completion) => {
//   const cmd = new Commands.Init({ template: "npm://bananas/templates/personal" })
//   cmd.parse()

//   context.expect(cmd.archive.source).to.equal('npm')
//   context.expect(cmd.archive.id).to.equal('bananas')
//   context.expect(cmd.archive.version).to.not.exist

//   done()
// }).

// add('should install an archive in an index section', (context: Context, done: Completion) => {
//   const cmd = new Commands.Init({ 
//     name: "test", 
//     template: "test", 
//     env: { test: "test", homeDir: context.dir }})
//     const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
//     const stub2 = context.stub(Archive.prototype, 'save').callsFake(() => Promise.resolve({}))

//     savor.addAsset("assets/test-archive", "archives/test-archive/1", context)
//     const stub3 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))
    
//     savor.promiseShouldSucceed(session.initialize().then(() => Engine.run(cmd)), done, (result) => {
//       stub.restore()
//       stub2.restore()
//       stub3.restore()
//     })
// }).

run('[Carmel SDK] Init Command')
