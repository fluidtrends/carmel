export class SetupCommand {
    constructor(args: any);
    get id(): string;
    get requiresContext(): boolean;
    get title(): string;
    exec(session: any): any;
}
