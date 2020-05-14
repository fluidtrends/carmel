export class InitCommand {
    constructor(args: any);
    get id(): any;
    get requiredArgs(): any;
    get requiresContext(): any;
    get title(): any;
    get type(): any;
    get requiresFreshSession(): boolean;
    get archive(): ({
        silent: boolean;
        source: any;
        id: any;
    } & {
        version: any;
    }) | undefined;
    get template(): {
        path: any;
    } | undefined;
    parse(): void;
    _archive: ({
        silent: boolean;
        source: any;
        id: any;
    } & {
        version: any;
    }) | undefined;
    _template: {
        path: any;
    } | undefined;
    exec(session: any): any;
}
