import { ISummaryBody, AIResponse, IRewrite } from './library';
export declare class AI21 {
    token?: string;
    constructor(token?: string);
    validate(): {
        token: string;
    };
    /**
     *
     * @param ISummaryBody
     *
     * @returns ISummarizeResponse
     */
    summarize(data?: ISummaryBody): Promise<AIResponse | undefined>;
    rewrite(data: IRewrite): Promise<AIResponse | undefined>;
    getResponse(status: string, message: string, data: any): {
        status: string;
        message: string;
        data: any;
    };
}
declare const _default: {
    useBody: (text: string) => {
        text: string;
    };
    useHeaders: (token: string) => {
        Authorization: string;
        "Content-Type": string;
    };
    useSummarize: (type: string) => {
        url: string;
    };
    useSummarizeBody: (data: any) => any;
    AI21: typeof AI21;
};
export default _default;
//# sourceMappingURL=index.d.ts.map