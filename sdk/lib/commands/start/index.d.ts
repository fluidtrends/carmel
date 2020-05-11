export class StartCommand {
    constructor(args: any);
    _script: any;
    get id(): string;
    get title(): string;
    get requiresFreshSession(): boolean;
    get script(): any;
    get target(): any;
    exec(session: any): any;
}
