export class InitCommand {
    constructor(args: any);
    get id(): string;
    get requiredArgs(): string[];
    get requiresContext(): boolean;
    get title(): string;
    get type(): string;
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
