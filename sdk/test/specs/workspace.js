/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Workspace } = require('../..')
const fs = require('fs-extra')
const path = require('path')

savor.

add('should create a default workspace', (context, done) => {
    const workspace = new Workspace({ cwd: context.dir })

    savor.promiseShouldSucceed(workspace.create(), done, () => {
        context.expect(workspace.data.type).to.equal('carmel')
    })
}).

add('should load an existing workspace', (context, done) => {
    const workspace = new Workspace({ test: "test1234", cwd: context.dir })

    context.expect(workspace.props.test).to.equal("test1234")
    context.expect(workspace.dir).to.equal(context.dir)

    savor.promiseShouldSucceed(workspace.create().then(()=> workspace.initialize()), done, () => {
        context.expect(workspace.data.type).to.equal('carmel')
        context.expect(Object.keys(workspace.data.context).length).to.equal(0)
    })
}).

add('should be able to save to the context', (context, done) => {
    const workspace = new Workspace({ cwd: context.dir })

    savor.promiseShouldSucceed(workspace.create().then(() => workspace.initialize()), done, () => {
        workspace.saveContext({ hello: "test" })
        context.expect(workspace.data.context.hello).to.equal('test')
    })
}).

// add('should not load a missing file', (context, done) => {
//     const workspace = new Workspace({ cwd: context.dir })

//     savor.promiseShouldFail(workspace.loadFile("test"), done, (error) => {
//         context.expect(error.message).to.equal(Workspace.ERRORS.FILE_NOT_FOUND("test"))
//     })
// }).

// add('should handle invalid files', (context, done) => {
//     const stub = context.stub(fs, 'readFileSync').callsFake(() => { throw new Error('oops') })
//     const workspace = new Workspace({ cwd: context.dir })
//     savor.addAsset('assets/file.txt', 'file.txt', context)

//     savor.promiseShouldFail(workspace.loadFile("file.txt"), done, (error) => {
//         stub.restore()
//         context.expect(error.message).to.equal('oops')
//     })
// }).

// add('should load a non-JSON file', (context, done) => {
//     const workspace = new Workspace({ cwd: context.dir })
//     savor.addAsset('assets/file.txt', 'file.txt', context)

//     savor.promiseShouldSucceed(workspace.loadFile("file.txt"), done, (data) => {
//         context.expect(data).to.equal('hello')
//     })
// }).

// add('should load a JSON file', (context, done) => {
//     savor.addAsset('assets/file.json', 'file.json', context)

//     const workspace = new Workspace({ cwd: context.dir })

//     savor.promiseShouldSucceed(workspace.loadFile("file.json"), done, (data) => {
//         context.expect(data.hello).to.equal('test1234')
//     })
// }).

// add('should not lookup directories in a missing directory', (context, done) => {
//     const workspace = new Workspace({ cwd: context.dir })

//     savor.promiseShouldFail(workspace.findDirs("test"), done, (error) => {
//         context.expect(error.message).to.equal(Workspace.ERRORS.DIR_NOT_FOUND("test"))
//     })
// }).

// add('should find some directories', (context, done) => {
//     const workspace = new Workspace({ cwd: context.dir })
//     savor.addAsset('assets/dirs', 'dirs', context)

//     savor.promiseShouldSucceed(workspace.findDirs("dirs"), done, (data) => {
//         context.expect(data[0]).to.equal('one')
//         context.expect(data[1]).to.equal('three')
//         context.expect(data[2]).to.equal('two')
//     })
// }).

run('[Carmel SDK] Workspace')
