export class Session {
    constructor(props: any, command: any);
    _props: any;
    _command: any;
    _logger: any;
    _workspace: any;
    _index: any;
    get props(): any;
    get logger(): any;
    get index(): any;
    get workspace(): any;
    get hasWorkspace(): boolean;
    get command(): any;
    set(key: any, val: any): any;
    get(key: any): any;
    updateIndex(): any;
    open(): any;
    initialize(): any;
    close(): any;
}
