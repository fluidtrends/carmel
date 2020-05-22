export declare const env: {
    nodeExec: string;
    nodeBin: string;
    nodeRoot: string;
    nodeGlobalModulesRoot: string;
    nodeLib: string;
    npmRoot: string;
    npmExec: string;
    npmExists: boolean;
};
export declare function existsGlobal(id: string): boolean;
export declare function run(cmd: string): Promise<string>;
