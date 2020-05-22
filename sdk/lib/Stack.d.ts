import { IStack, IBundle, IDir, IWorkspace } from '.';
export declare class Stack implements IStack {
    protected _props: any;
    protected _workspace?: IWorkspace;
    protected _bundle?: IBundle;
    protected _dir?: IDir;
    constructor(props: any);
    get name(): any;
    get dir(): IDir | undefined;
    get workspace(): IWorkspace | undefined;
    get props(): any;
    get bundle(): IBundle | undefined;
    get exists(): any;
    load(workspace: IWorkspace): Promise<this>;
    makeConfig(): void;
}
