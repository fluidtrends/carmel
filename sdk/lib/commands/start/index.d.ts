import { Command, ISession, CommandArg } from '../..';
/**
 *
 * @category Commands
 */
export default class Start extends Command {
    /** @internal */
    constructor();
    /** @internal */
    exec(session: ISession, args?: CommandArg[]): Promise<any>;
}
