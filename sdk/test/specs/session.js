/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Session } = require('../..')

savor.

add('should load a simple session', (context, done) => {
    const session = new Session({ test: "test1234", dir: context.dir })

    context.expect(session.props.test).to.equal("test1234")
    context.expect(session.index).to.exist
    context.expect(session.index.env).to.exist
    
    done()
}).

add('should initialize a session with a basic index', (context, done) => {
    const session = new Session({ dir: context.dir })

    // This should be a fresh index
    context.expect(session.index.exists).to.be.false

    savor.promiseShouldSucceed(session.initialize(), done, () => {
        // Let's make sure it got created
        context.expect(session.index.exists).to.be.true
    })
}).


run('[Carmel SDK] Session')
