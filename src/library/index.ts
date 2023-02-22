import { getReviewPrompt } from "./prompts"

export enum SummarizeType {
    FINANCIAL_REPORT = 'financial_report',
    ACADEMIC_PAPER = 'academic_paper',
    REVIEWS = 'reviews',
    WIKIPEDIA_ARTICLE = 'wikipedia_article'
}

export const SUMMARIZE_TEXT = ""

export const useHeaders = (token:string) => {
    return {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
}

export const useBody = (text:string) => {
    return {
        "text": text,
    }
}

export const usePrompt = (prompt:string) => {
    return {
        "prompt": prompt,
    }
}

export const useSummarizeBody = (data:any) => {
    if (data.type && data.type === SummarizeType.REVIEWS) {
        if (!data.restaurant || !data.review) {
            throw new Error("Restaurant and Review  must be specified if Summarize type is reviews");
        }
        return getReviewPrompt(data.restaurant, data.review);
    }
    return {
        text: data.text,
    }
}

export const useSummarize = (type:string) => {
    if (type && type === SummarizeType.REVIEWS) {
        return {
            url: 'https://api.ai21.com/studio/v1/j1-jumbo/complete',
        }
    }
    return {
        url: 'https://api.ai21.com/studio/v1/experimental/summarize',
    }
}

