import { Command, ISession } from '../..';
/**
 *
 *
 * @category Commands::Workspace
 */
export default class Status extends Command {
    constructor(args?: any);
    exec(session: ISession): Promise<undefined>;
}
