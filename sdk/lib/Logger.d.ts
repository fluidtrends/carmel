export class Logger {
    constructor(props: any);
    _props: any;
    _events: any[];
    get console(): any;
    get props(): any;
    get events(): any[];
    get name(): any;
    start(message: any): Promise<any>;
    _console: any;
    stop(): Promise<any>;
    done(message: any): void;
    logEvent(event: any): void;
    system(message: any): void;
    error(error: any): void;
    info(message: any): void;
}
