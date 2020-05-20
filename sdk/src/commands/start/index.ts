import {
  Command,
  Errors,
  ISession,
  Globals
} from '../..'

export default class Start extends Command {
  protected _script?: any;

  constructor(args?: any) {
    super(args)
    // this._script = new Script(Object.assign({}, args, { dev: true }))
  }

  get script() {
    return this._script
  }

  get target() {
    return this.script.target
  }

  async exec(session: ISession) {
      await super.initialize(session)
      const stack = await session.workspace!.loadStack()
  }
}