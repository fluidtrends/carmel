export class MakeCommand {
    constructor(args: any);
    get id(): string;
    get title(): string;
    get requiresFreshSession(): boolean;
    exec(session: any): any;
}
