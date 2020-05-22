export class WorkspaceCommand {
    constructor(args: any);
    get id(): any;
    get requiresContext(): any;
    get title(): any;
    set(session: any): Promise<void>;
    get(session: any): Promise<void>;
    defaults(session: any): Promise<void>;
    exec(session: any): any;
}
