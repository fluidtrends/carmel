import savor, { Context, Completion } from 'savor'
import { Session } from '../../src'

savor.
  add('should create a new session', (context: Context, done: Completion) => {
    const session = new Session({})
    done ()
    // savor.promiseShouldSucceed(session.start(), done, (result) => {
    //   context.expect(session.isReady).to.be.true
    // })
  }).

  run('[Carmel Mesh]')