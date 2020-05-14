export class MakeCommand {
    constructor(args: any);
    get id(): any;
    get title(): any;
    get requiresFreshSession(): boolean;
    exec(session: any): any;
}
