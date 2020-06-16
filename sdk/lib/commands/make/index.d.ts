import { Command, CommandProps } from '../..';
/**
 *
 * @category Commands
 */
export default class Make extends Command {
    /** @internal */
    constructor(p?: CommandProps);
    /** @internal */
    exec(): Promise<void>;
}
