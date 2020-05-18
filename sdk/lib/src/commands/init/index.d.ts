import { Command, ISession } from '../..';
export default class InitCommand extends Command {
    protected _archive?: any;
    protected _template?: any;
    constructor(args?: any);
    get id(): string;
    get requiredArgs(): string[];
    get requiresContext(): boolean;
    get title(): string;
    get type(): string;
    get requiresFreshSession(): boolean;
    get archive(): any;
    get template(): any;
    parse(): void;
    exec(session: ISession): Promise<void>;
}
