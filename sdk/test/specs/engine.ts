import savor, { Context, Completion } from 'savor'

import { Strings, Engine } from '../../src'

savor
  // add('should not run without a session', (context: Context, done: Completion) => {
  //   context.expect(Engine.session).to.not.exist

  //   savor.promiseShouldFail(Engine.instance.exec(), done, (error) => {
  //     Engine.instance.stop()
  //     context.expect(error.message).to.equal(Strings.SessionIsMissingString())
  //   })
  // }).

  // add('should not run without a command', (context: Context, done: Completion) => {
  //   savor.promiseShouldFail(Engine.run(), done, (error) => {
  //     Engine.instance.stop()
  //     context.expect(error.message).to.equal(Strings.CommandIsMissingString())
  //   })
  // }).

  .run('[Carmel SDK] Engine')
