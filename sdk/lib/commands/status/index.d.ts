import { Command, ISession } from '../..';
export default class Status extends Command {
    constructor(args?: any);
    exec(session: ISession): Promise<undefined>;
}
