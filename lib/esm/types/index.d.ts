import { ISummaryBody, ISummarizeResponse } from './library';
export declare class AI21 {
    token?: string;
    constructor(token?: string);
    validateSummarize(data?: ISummaryBody): {
        data: ISummaryBody;
        token: string;
    };
    /**
     *
     * @param ISummaryBody
     *
     * @returns ISummarizeResponse
     */
    summarize(data?: ISummaryBody): Promise<ISummarizeResponse | undefined>;
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
    useSummarizeBody: (data: any) => {
        prompt: string;
        numResults: number;
        maxTokens: number;
        temperature: number;
        topKReturn: number;
        topP: number;
        countPenalty: {
            scale: number;
            applyToNumbers: boolean;
            applyToPunctuations: boolean;
            applyToStopwords: boolean;
            applyToWhitespaces: boolean;
            applyToEmojis: boolean;
        };
        frequencyPenalty: {
            scale: number;
            applyToNumbers: boolean;
            applyToPunctuations: boolean;
            applyToStopwords: boolean;
            applyToWhitespaces: boolean;
            applyToEmojis: boolean;
        };
        presencePenalty: {
            scale: number;
            applyToNumbers: boolean;
            applyToPunctuations: boolean;
            applyToStopwords: boolean;
            applyToWhitespaces: boolean;
            applyToEmojis: boolean;
        };
        stopSequences: string[];
    } | {
        text: any;
    };
    AI21: typeof AI21;
};
export default _default;
//# sourceMappingURL=index.d.ts.map