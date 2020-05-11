export class InstallCommand {
    constructor(args: any);
    get id(): string;
    get title(): string;
    downloadDeps(installerType: any): any;
    exec(session: any): any;
}
