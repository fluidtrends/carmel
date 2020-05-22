export interface Command {
    id: string;
    cls: string;
    args: string[];
    options?: any;
}