import { Command, CommandProps } from '../..';
/**
 *
 * @category Commands
 */
export default class Preview extends Command {
    /** @internal */
    constructor(p?: CommandProps);
    /** @internal */
    exec(): Promise<void>;
}
