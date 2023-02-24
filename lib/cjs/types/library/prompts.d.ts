import { IRewrite } from "./ISummary";
export declare enum SummarizeType {
    FINANCIAL_REPORT = "financial_report",
    ACADEMIC_PAPER = "academic_paper",
    REVIEWS = "reviews",
    WIKIPEDIA_ARTICLE = "wikipedia_article"
}
export declare enum RewriteType {
    GENERAL = "general",
    CASUAL = "casual",
    FORMAL = "formal",
    SHORT = "short"
}
export declare const SUMMARIZE_TEXT = "";
export declare const useHeaders: (token: string) => {
    Authorization: string;
    "Content-Type": string;
};
export declare const useBody: (text: string) => {
    text: string;
};
export declare const usePrompt: (prompt: string) => {
    prompt: string;
};
export declare const useSummarizeBody: (data: any) => any;
export declare const useSummarize: (type: string) => {
    url: string;
};
/**
 *
 * @param data
 * @returns
 */
export declare const useRewriteBody: (data: IRewrite) => {
    text: string;
    intent: string;
};
export declare const useRewrite: () => {
    url: string;
};
export declare const getRestaurantReviewPrompt: (restaurant: string, review: string) => {
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
};
//# sourceMappingURL=prompts.d.ts.map