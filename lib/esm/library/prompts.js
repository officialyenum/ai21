export var SummarizeType;
(function (SummarizeType) {
    SummarizeType["FINANCIAL_REPORT"] = "financial_report";
    SummarizeType["ACADEMIC_PAPER"] = "academic_paper";
    SummarizeType["REVIEWS"] = "reviews";
    SummarizeType["WIKIPEDIA_ARTICLE"] = "wikipedia_article";
})(SummarizeType || (SummarizeType = {}));
export var RewriteType;
(function (RewriteType) {
    RewriteType["GENERAL"] = "general";
    RewriteType["CASUAL"] = "casual";
    RewriteType["FORMAL"] = "formal";
    RewriteType["SHORT"] = "short";
})(RewriteType || (RewriteType = {}));
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
    if (!data)
        throw Error("Data Not Specified");
    if (!data.type)
        throw Error("Type Not Specified");
    if (data.type && data.type === SummarizeType.REVIEWS) {
        if (!data.restaurant || !data.review) {
            throw new Error("Restaurant and Review must be specified if Summarize type is reviews");
        }
        return getRestaurantReviewPrompt(data.restaurant, data.review);
    }
    else {
        if (data.text && data.text?.length > 10000)
            throw new Error("Text cannot be more than 10000 characters");
    }
    return data;
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
/**
 *
 * @param data
 * @returns
 */
export const useRewriteBody = (data) => {
    if (!data)
        throw new Error("Data Not Specified");
    if (!data.text)
        throw new Error("Text Not Specified");
    if (data.text && data.text?.length > 500)
        throw new Error("Text cannot be more than 500 characters");
    data.intent = data.intent !== null ? data.intent : "general";
    return data;
};
export const useRewrite = () => {
    return {
        url: 'https://api.ai21.com/studio/v1/experimental/rewrite',
    };
};
/**
 *
 * @param data
 * @returns
 */
export const useParaphraseBody = (data) => {
    if (!data)
        throw new Error("Data Not Specified");
    if (!data.text)
        throw new Error("Text Not Specified");
    if (data.text && data.text?.length > 500)
        throw new Error("Text cannot be more than 500 characters");
    data.style = data.style !== null ? data.style : "general";
    return data;
};
export const useParaphrase = () => {
    return {
        url: 'https://api.ai21.com/studio/v1/paraphrase',
    };
};
export const getRestaurantReviewPrompt = (restaurant, review) => {
    return {
        "prompt": `Summarize the following restaurant review\nRestaurant: Luigi's\n\nReview: We were passing through SF on a Thursday afternoon and wanted some Italian food. We passed by a couple places which were packed until finally stopping at Luigi's, mainly because it was a little less crowded and the people seemed to be mostly locals. We ordered the tagliatelle and mozzarella caprese. The tagliatelle were a work of art - the pasta was just right and the tomato sauce with fresh basil was perfect. The caprese was OK but nothing out of the ordinary. Service was slow at first but overall it was fine. Other than that - Luigi's great experience!\n\nSummary: Local spot. Not crowded. Excellent tagliatelle with tomato sauce. Service slow at first.\n\n##\n\nSummarize the following restaurant review\nRestaurant: ${restaurant}\n\nReview: ${review}\n\nSummary:`,
        "numResults": 1,
        "maxTokens": 20,
        "temperature": 0.3,
        "topKReturn": 0,
        "topP": 0.98,
        "countPenalty": {
            "scale": 0,
            "applyToNumbers": false,
            "applyToPunctuations": false,
            "applyToStopwords": false,
            "applyToWhitespaces": false,
            "applyToEmojis": false
        },
        "frequencyPenalty": {
            "scale": 0,
            "applyToNumbers": false,
            "applyToPunctuations": false,
            "applyToStopwords": false,
            "applyToWhitespaces": false,
            "applyToEmojis": false
        },
        "presencePenalty": {
            "scale": 0,
            "applyToNumbers": false,
            "applyToPunctuations": false,
            "applyToStopwords": false,
            "applyToWhitespaces": false,
            "applyToEmojis": false
        },
        "stopSequences": ["##"]
    };
};
