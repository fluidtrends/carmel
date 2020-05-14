export class StartCommand {
    constructor(args: any);
    _script: any;
    get id(): any;
    get title(): any;
    get requiresFreshSession(): boolean;
    get script(): any;
    get target(): any;
    exec(session: any): any;
}
