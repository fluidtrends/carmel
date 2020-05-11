export class WorkspaceCommand {
    constructor(args: any);
    get id(): string;
    get requiresContext(): boolean;
    get title(): string;
    set(session: any): Promise<void>;
    get(session: any): Promise<void>;
    defaults(session: any): Promise<void>;
    exec(session: any): any;
}
