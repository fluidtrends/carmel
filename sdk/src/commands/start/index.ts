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

      console.log("START2222 :)")
      // console.log("STAR2222T!!!!!", session.index.dir)
      // console.log("START2!!!!!", session.workspace?.dir.path)
      // console.log("START!!!!!", stack)
  }
}