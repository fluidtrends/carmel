import savor, {
    Context,
    Completion
} from 'savor'

import { 
    Session,
    Dir,
    SessionProps
} from '../../src'

import {
    Archive
} from 'rara'

import {
    Index
} from 'dodi'

savor.

add('should load a simple session', (context: Context, done: Completion) => {
    const session = new Session({ dir: context.dir })

    context.expect(session.props?.dir).to.equal(context.dir)
    context.expect(session.index).to.exist
    
    done()
}).

add('should initialize a session with a basic index', (context: Context, done: Completion) => {
    const session = new Session({ dir: context.dir, name: 'test' })
    const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
    const stub2 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))

    savor.promiseShouldSucceed(session.initialize(), done, () => {
        context.expect(session.index.exists).to.be.true
        context.expect(session.index.sections.bundles).to.exist
        stub.restore()
        stub2.restore()
    })
}).

add('should find a bundle', (context: Context, done: Completion) => {
    const session = new Session({ dir: context.dir, name: 'test' })

    savor.addAsset('assets/bundles/test', '.carmel/bundles/test/1/test', context)

    savor.promiseShouldSucceed(session.findBundle("test", "1"), done, (data) => {
        context.expect(data.id).to.equal("test")
        context.expect(data.version).to.equal("1")
    })
}).

add('should find a stack with the latest available version', (context: Context, done: Completion) => {
    const session = new Session({ dir: context.dir, name: 'test' })

    savor.addAsset('assets/bundles/teststack', '.carmel/bundles/test/1/stacks/teststack', context)

    savor.promiseShouldSucceed(session.findStack("test/test"), done, (data) => {
        context.expect(data.id).to.equal("test")
        context.expect(data.version).to.equal("1")
    })
}).

run('[Carmel SDK] Session')
