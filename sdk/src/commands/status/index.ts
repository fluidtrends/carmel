import {
  Command,
  Errors,
  ISession
} from '../..'

export default class Status extends Command {
  constructor(args?: any) {
    super(args)
  }

  async exec(session: ISession) {
    if (!session) {
      return Promise.reject(Errors.CommandCannotExecute(this.id, 'the session is missing'))
    }
 }
}
