export class Script {
    constructor(args: any);
    _args: any;
    _platform: any;
    get platform(): any;
    get target(): any;
    get args(): any;
    get isDev(): any;
    makeConfig(session: any): {
        dir: string;
        root: string;
        templateDir: string;
        port: number;
        templateAssets: {
            path: string;
            glob: string;
        }[];
        script: string;
        page: string;
    };
    load(session: any): any;
}
