/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Workspace } = require('../..')

savor.

add('should load a simple workspace', (context, done) => {
    const workspace = new Workspace({ test: "test1234", cwd: context.dir })

    context.expect(workspace.props.test).to.equal("test1234")
    context.expect(workspace.dir).to.equal(context.dir)
    
    done()
}).

add('should initialize a simple workspace', (context, done) => {
    const workspace = new Workspace({ cwd: context.dir })

    savor.promiseShouldSucceed(workspace.initialize(), done, () => {
    })
}).


run('[Carmel SDK] Workspace')
