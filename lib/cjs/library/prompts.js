"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRestaurantReviewPrompt = exports.useParaphrase = exports.useParaphraseBody = exports.useRewrite = exports.useRewriteBody = exports.useSummarize = exports.useSummarizeBody = exports.usePrompt = exports.useBody = exports.useHeaders = exports.SUMMARIZE_TEXT = exports.RewriteType = exports.SummarizeType = void 0;
var SummarizeType;
(function (SummarizeType) {
    SummarizeType["FINANCIAL_REPORT"] = "financial_report";
    SummarizeType["ACADEMIC_PAPER"] = "academic_paper";
    SummarizeType["REVIEWS"] = "reviews";
    SummarizeType["WIKIPEDIA_ARTICLE"] = "wikipedia_article";
})(SummarizeType = exports.SummarizeType || (exports.SummarizeType = {}));
var RewriteType;
(function (RewriteType) {
    RewriteType["GENERAL"] = "general";
    RewriteType["CASUAL"] = "casual";
    RewriteType["FORMAL"] = "formal";
    RewriteType["SHORT"] = "short";
})(RewriteType = exports.RewriteType || (exports.RewriteType = {}));
exports.SUMMARIZE_TEXT = "";
const useHeaders = (token) => {
    return {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    };
};
exports.useHeaders = useHeaders;
const useBody = (text) => {
    return {
        "text": text,
    };
};
exports.useBody = useBody;
const usePrompt = (prompt) => {
    return {
        "prompt": prompt,
    };
};
exports.usePrompt = usePrompt;
const useSummarizeBody = (data) => {
    var _a;
    if (!data)
        throw Error("Data Not Specified");
    if (!data.type)
        throw Error("Type Not Specified");
    if (data.type && data.type === SummarizeType.REVIEWS) {
        if (!data.restaurant || !data.review) {
            throw new Error("Restaurant and Review must be specified if Summarize type is reviews");
        }
        return (0, exports.getRestaurantReviewPrompt)(data.restaurant, data.review);
    }
    else {
        if (data.text && ((_a = data.text) === null || _a === void 0 ? void 0 : _a.length) > 10000)
            throw new Error("Text cannot be more than 10000 characters");
    }
    return data;
};
exports.useSummarizeBody = useSummarizeBody;
const useSummarize = (type) => {
    if (type && type === SummarizeType.REVIEWS) {
        return {
            url: 'https://api.ai21.com/studio/v1/j1-jumbo/complete',
        };
    }
    return {
        url: 'https://api.ai21.com/studio/v1/experimental/summarize',
    };
};
exports.useSummarize = useSummarize;
/**
 *
 * @param data
 * @returns
 */
const useRewriteBody = (data) => {
    var _a;
    if (!data)
        throw new Error("Data Not Specified");
    if (!data.text)
        throw new Error("Text Not Specified");
    if (data.text && ((_a = data.text) === null || _a === void 0 ? void 0 : _a.length) > 500)
        throw new Error("Text cannot be more than 500 characters");
    data.intent = data.intent !== null ? data.intent : "general";
    return data;
};
exports.useRewriteBody = useRewriteBody;
const useRewrite = () => {
    return {
        url: 'https://api.ai21.com/studio/v1/experimental/rewrite',
    };
};
exports.useRewrite = useRewrite;
/**
 *
 * @param data
 * @returns
 */
const useParaphraseBody = (data) => {
    var _a;
    if (!data)
        throw new Error("Data Not Specified");
    if (!data.text)
        throw new Error("Text Not Specified");
    if (data.text && ((_a = data.text) === null || _a === void 0 ? void 0 : _a.length) > 500)
        throw new Error("Text cannot be more than 500 characters");
    data.style = data.style !== null ? data.style : "general";
    return data;
};
exports.useParaphraseBody = useParaphraseBody;
const useParaphrase = () => {
    return {
        url: 'https://api.ai21.com/studio/v1/paraphrase',
    };
};
exports.useParaphrase = useParaphrase;
const getRestaurantReviewPrompt = (restaurant, review) => {
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
exports.getRestaurantReviewPrompt = getRestaurantReviewPrompt;
