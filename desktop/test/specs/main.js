/* eslint-disable no-unused-expressions */

const savor = require('savor')
const Main = require('../../src/Main')

savor.

add('initial', (context, done) => {
    const main = new Main({ test: "test1234" })
    context.expect(main.props.test).to.equal("test1234")
    
    done()
}).


run('[Carmel Desktop] main')
