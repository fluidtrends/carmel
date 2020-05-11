export class Commander {
    static run(command: any, session: any): any;
    constructor(command: any, session: any);
    _command: any;
    _session: any;
    get command(): any;
    get session(): any;
    run(): any;
    verify(): Promise<any>;
}
