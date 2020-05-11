export class Plugin {
    constructor(props: any);
    _props: any;
    get props(): any;
    get session(): any;
    get command(): any;
    findCommand(id: any): any;
    loadCommand(): Promise<any>;
    _command: any;
    createSession(): any;
    _session: any;
    run(): Promise<any>;
}
