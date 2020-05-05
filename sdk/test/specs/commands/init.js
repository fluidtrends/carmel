/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Commander, Commands, Session } = require('../../..')
const fs = require('fs-extra')
const { Archive } = require('rara')
const { Index } = require('dodi')

savor.

add('should make sure it expects required args', (context, done) => {
  const cmd = new Commands.Init()

  context.expect(cmd.requiredArgs[0]).to.equal('name')
  context.expect(cmd.requiredArgs[1]).to.equal('template')
  context.expect(cmd.id).to.equal(Commands.Init.ID)
  context.expect(cmd.requiresContext).to.be.equal(Commands.Init.REQUIRES_CONTEXT)

  done()  
}).

add('should make sure it does not run without a name', (context, done) => {
    const cmd = new Commands.Init({ env: { homeDir: context.dir }})
    
    savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
        context.expect(error.message).to.equal(Commander.ERRORS.MISSING_ARG("name"))
    })
  }).
  
add('should make sure it does not run without a template', (context, done) => {
  const cmd = new Commands.Init({ name: "test", env: { homeDir: context.dir }})

  savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
      context.expect(error.message).to.equal(Commander.ERRORS.MISSING_ARG("template"))
  })
}).
  
// add('should not create a workspace without a session', (context, done) => {
//   const cmd = new Commands.Init({ 
//     name: "test", 
//     template: "test", 
//     env: { test: "test", homeDir: context.dir }})

//     const stub = context.stub(fs, "existsSync").callsFake(() => false)

//     savor.promiseShouldFail(Commander.run(cmd), done, (error) => {
//       stub.restore()
//       context.expect(error.message).to.equal(Commands.Init.ERRORS.COULD_NOT_EXECUTE('the session is missing'))
//     })
// }).

// add('should create a new workspace', (context, done) => {
//   const cmd = new Commands.Init({ 
//     name: "test", 
//     template: "test", 
//     env: { test: "test", homeDir: context.dir }})

//     const stub = context.stub(Archive.prototype, 'save').callsFake(() => Promise.resolve({ }))
//     const stub2 = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
//     const session = new Session({ test: "test1234", dir: context.dir, sections: [{ id: "archives" }] })

//     const stub3 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))
  
//     savor.promiseShouldSucceed(session.initialize().then(() => Commander.run(cmd, session)), done, () => {
//       context.expect(cmd.title).to.equal('Creating a new workspace')
//       stub.restore()
//       stub2.restore()
//       stub3.restore()
//   })
// }).

add('should skip creating if a workspace exists', (context, done) => {
  const cmd = new Commands.Init({ 
    name: "test", 
    template: "test", 
    env: { test: "test", homeDir: context.dir }})

    savor.addAsset('assets/.carmel.json', '.carmel.json', context)
    const session = new Session({ test: "test1234", dir: context.dir })

    savor.promiseShouldFail(Commander.run(cmd, session), done, (error) => {
      context.expect(error.message).to.equal(Commands.Init.ERRORS.ALREADY_EXISTS('workspace'))
    })
}).

add('should skip creating if the template is invalid', (context, done) => {
  const cmd = new Commands.Init({ 
    name: "test", 
    template: "oops:test", 
    env: { test: "test", homeDir: context.dir }})

    const session = new Session({ test: "test1234", dir: context.dir })

    savor.promiseShouldFail(Commander.run(cmd, session), done, (error) => {
      context.expect(error.message).to.equal(Commands.Init.ERRORS.COULD_NOT_EXECUTE('the template is invalid'))
    })
}).

add('should parse the archive from a basic uri', (context, done) => {
    const cmd = new Commands.Init({ template: "test" })
    cmd.parse()

    context.expect(cmd.archive.source).to.equal('npm')
    context.expect(cmd.archive.id).to.equal(Commands.Init.DEFAULT_ARCHIVE_ID)
    context.expect(cmd.archive.version).to.not.exist

    done()
}).

add('should parse the archive from a full uri', (context, done) => {
  const cmd = new Commands.Init({ template: "npm://fluidtrends:bananas/templates/personal#1.0.2" })
  cmd.parse()

  context.expect(cmd.archive.source).to.equal('npm')
  context.expect(cmd.archive.id).to.equal('@fluidtrends/bananas')
  context.expect(cmd.archive.version).to.equal('1.0.2')

  done()
}).

add('should parse the archive from an unscoped uri', (context, done) => {
  const cmd = new Commands.Init({ template: "npm://bananas/templates/personal" })
  cmd.parse()

  context.expect(cmd.archive.source).to.equal('npm')
  context.expect(cmd.archive.id).to.equal('bananas')
  context.expect(cmd.archive.version).to.not.exist

  done()
}).

add('should install an archive in an index section', (context, done) => {
  const cmd = new Commands.Init({ 
    name: "test", 
    template: "test", 
    env: { test: "test", homeDir: context.dir }})
    const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
    const stub2 = context.stub(Archive.prototype, 'save').callsFake(() => Promise.resolve({}))

    savor.addAsset("assets/test-archive", "archives/test-archive/1", context)
    const session = new Session({ test: "test1234", dir: context.dir })
    const stub3 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))
    
    savor.promiseShouldSucceed(session.initialize().then(() => Commander.run(cmd, session)), done, (result) => {
      stub.restore()
      stub2.restore()
      stub3.restore()
    })
}).

run('[Carmel SDK] Init Command')
