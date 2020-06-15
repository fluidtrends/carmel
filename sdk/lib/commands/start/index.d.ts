import { Command, CommandProps } from '../..';
/**
 *
 * @category Commands
 */
export default class Start extends Command {
    /** @internal */
    constructor(p?: CommandProps);
    /** @internal */
    exec(): Promise<void>;
}
