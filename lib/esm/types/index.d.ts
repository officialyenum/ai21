export declare class AI21 {
    token: string;
    constructor(token: string);
    summarize(text: string): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        message: any;
        data?: undefined;
    } | undefined>;
}
export declare function helloWorld(): string;
export declare function goodBye(): string;
declare const _default: {
    helloWorld: typeof helloWorld;
    goodBye: typeof goodBye;
    AI21: typeof AI21;
};
export default _default;
//# sourceMappingURL=index.d.ts.map