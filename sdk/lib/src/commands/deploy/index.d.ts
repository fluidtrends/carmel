export class DeployCommand {
    constructor(args: any);
    get id(): any;
    get title(): any;
    ensureDomainIsHosted(session: any, domain: any): Promise<any>;
    ensureBucketExists(session: any, bucket: any): Promise<any>;
    ensureBucketIsLinked(session: any, domain: any): Promise<any>;
    setupDomainBucket(session: any, domain: any, bucket: any): Promise<any>;
    prepareBucket(session: any): Promise<any>;
    upload(session: any, bucket: any): void;
    exec(session: any): any;
}
