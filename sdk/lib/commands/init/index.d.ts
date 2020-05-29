import { Command, CommandArg, ISession } from '../..';
/**
 *
 *
 * @category Commands
 */
export default class Init extends Command {
    /** @internal */
    constructor();
    /** @internal */
    exec(session: ISession, args?: CommandArg[]): Promise<void>;
}
