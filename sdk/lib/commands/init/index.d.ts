import { Command, ISession } from '../..';
export default class Init extends Command {
    protected _archive?: any;
    protected _template?: any;
    constructor(args?: any);
    get archive(): any;
    get template(): any;
    parse(): void;
    exec(session: ISession): Promise<void>;
}
