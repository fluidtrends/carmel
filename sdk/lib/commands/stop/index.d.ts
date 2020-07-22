import { Command, CommandProps } from '../..';
/**
 *
 * @category Commands
 */
export default class Stop extends Command {
    /** @internal */
    constructor(p?: CommandProps);
    stopServer(id: string): Promise<unknown>;
    /** @internal */
    exec(): Promise<void>;
}
