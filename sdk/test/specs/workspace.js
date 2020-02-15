/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Workspace } = require('../..')

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
    context.expect(workspace.context('test')).to.not.exist

    savor.promiseShouldSucceed(workspace.create().then(()=> workspace.initialize()), done, () => {
        context.expect(workspace.data.type).to.equal('carmel')
        context.expect(Object.keys(workspace.context()).length).to.equal(0)
    })
}).

add('should be able to save to the context', (context, done) => {
    const workspace = new Workspace({ cwd: context.dir })

    savor.promiseShouldSucceed(workspace.create().then(() => workspace.initialize()), done, () => {
        workspace.saveContext({ hello: "test" })
        context.expect(workspace.context('hello')).to.equal('test')
    })
}).

run('[Carmel SDK] Workspace')
