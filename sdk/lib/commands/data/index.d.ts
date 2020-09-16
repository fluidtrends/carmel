import { Command } from '../..';
/**
 *
 * @category Commands
 */
export default class Data extends Command {
    /** @internal */
    constructor();
    get secretsVault(): any;
    get settingsVault(): any;
    /** @internal */
    exec(): Promise<void>;
}
