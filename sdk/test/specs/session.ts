import savor, {
    Context,
    Completion
} from 'savor'

import { 
    Session
} from '../../src'

import {
    Archive
} from 'rara'

import {
    Index
} from 'dodi'

savor.

add('should load a simple session', (context: Context, done: Completion) => {
    const session = new Session({ test: "test1234", dir: context.dir })

    context.expect(session.props.test).to.equal("test1234")
    context.expect(session.index).to.exist
    
    done()
}).

add('should initialize a session with a basic index', (context: Context, done: Completion) => {
    const session = new Session({ dir: context.dir, name: 'test' })
    const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
    const stub2 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))

    savor.promiseShouldSucceed(session.initialize(), done, () => {
        // Let's make sure it got created
        context.expect(session.index.exists).to.be.true
        stub.restore()
        stub2.restore()
    })
}).


run('[Carmel SDK] Session')
