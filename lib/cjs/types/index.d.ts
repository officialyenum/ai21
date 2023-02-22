interface TextObject {
    text: string | undefined;
    type?: string;
    restaurant: string | undefined;
    review: string | undefined;
}
export declare class AI21 {
    token?: string;
    constructor(token?: string);
    validateSummarize(data?: TextObject): {
        data: TextObject;
        token: string;
    };
    /**
     *
     * @param data
     *
     * @returns
     */
    summarize(data?: TextObject): Promise<{
        status: string;
        message: string;
        data: any;
    } | undefined>;
    getResponse(status: string, message: string, data: any): {
        status: string;
        message: string;
        data: any;
    };
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