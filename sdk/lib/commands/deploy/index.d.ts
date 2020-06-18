import { Command, CommandProps } from '../..';
/**
 *
 * @category Commands
 */
export default class Deploy extends Command {
    /** @internal */
    constructor(p?: CommandProps);
    /** @internal */
    exec(): Promise<void>;
}
