import { Command, ISession } from '../..';
export default class Start extends Command {
    protected _script?: any;
    constructor(args?: any);
    get script(): any;
    get target(): any;
    exec(session: ISession): Promise<void>;
}
