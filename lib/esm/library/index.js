import { getReviewPrompt } from "./prompts";
export var SummarizeType;
(function (SummarizeType) {
    SummarizeType["FINANCIAL_REPORT"] = "financial_report";
    SummarizeType["ACADEMIC_PAPER"] = "academic_paper";
    SummarizeType["REVIEWS"] = "reviews";
    SummarizeType["WIKIPEDIA_ARTICLE"] = "wikipedia_article";
})(SummarizeType || (SummarizeType = {}));
export const SUMMARIZE_TEXT = "";
export const useHeaders = (token) => {
    return {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    };
};
export const useBody = (text) => {
    return {
        "text": text,
    };
};
export const usePrompt = (prompt) => {
    return {
        "prompt": prompt,
    };
};
export const useSummarizeBody = (data) => {
    if (data.type && data.type === SummarizeType.REVIEWS) {
        if (!data.restaurant || !data.review) {
            throw new Error("Restaurant and Review  must be specified if Summarize type is reviews");
        }
        return getReviewPrompt(data.restaurant, data.review);
    }
    return {
        text: data.text,
    };
};
export const useSummarize = (type) => {
    if (type && type === SummarizeType.REVIEWS) {
        return {
            url: 'https://api.ai21.com/studio/v1/j1-jumbo/complete',
        };
    }
    return {
        url: 'https://api.ai21.com/studio/v1/experimental/summarize',
    };
};
