/* eslint-disable no-unused-expressions */

const savor = require('savor')
const { Plugin, Commander } = require('../..')
const { Archive } = require('rara')
const fs = require('fs-extra')
const path = require('path')
const { Index } = require('dodi')

savor.

// add('should not load a missing command', (context, done) => {
//   const plugin = new Plugin({ session: { name: "test" }, command: { id: "test" }})

//   savor.promiseShouldFail(plugin.run(), done, (error) => {
//     context.expect(error.message.toLowerCase().startsWith('cannot find module')).to.be.true
//   })
// }).

// add('should not run without a command', (context, done) => {  
//   const plugin = new Plugin({ session: { name: "test" }})

//   savor.promiseShouldFail(plugin.run(), done, (error) => {
//     context.expect(error.message).to.equal(Plugin.ERRORS.CANNOT_LOAD('the command is missing'))
//   })
// }).

// add('should catch a failed command execution', (context, done) => {
//   const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
//   const plugin = new Plugin({ session: { name: "test" }, command: { id: "init" }})
//   const stub2 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))

//   savor.promiseShouldFail(plugin.run(), done, (error) => {
//     context.expect(error.message).to.equal(Commander.ERRORS.MISSING_ARG('name'))
//     stub.restore()
//     stub2.restore()
//   })
// }).

// add('should run a command', (context, done) => {
//   const stub = context.stub(Archive.prototype, 'download').callsFake(() => Promise.resolve({ version: "1" }))
//   const stub2 = context.stub(Index.prototype, 'installArchive').callsFake(() => Promise.resolve({ installDependencies: () => ({}) }))

//   const plugin = new Plugin({ session: { id: "test" }, command: { id: "init", args: {
//     name: "test",
//     template: "test"
//   }}})

//   savor.promiseShouldSucceed(plugin.run(), done, (data) => {
//     stub.restore()
//     stub2.restore()
//   })
// }).

run('[Carmel SDK] Plugin')
