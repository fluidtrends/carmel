export class DataCommand {
    constructor(args: any);
    get id(): string;
    get requiresContext(): boolean;
    get title(): string;
    vault(session: any): any;
    lock(session: any): any;
    unlock(session: any): any;
    save(session: any): Promise<void>;
    read(session: any): Promise<void>;
    defaults(session: any): Promise<void>;
    exec(session: any): any;
}
