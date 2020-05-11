export class CloudCommand {
    constructor(args: any);
    get id(): string;
    get requiresContext(): boolean;
    get title(): string;
    status(session: any): any;
    init(session: any): any;
    push(session: any): any;
    exec(session: any): any;
}
