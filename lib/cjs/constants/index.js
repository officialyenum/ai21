"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSummarize = exports.useBody = exports.useHeaders = void 0;
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
const useSummarize = () => {
    return {
        url: 'https://api.ai21.com/studio/v1/experimental/summarize',
    };
};
exports.useSummarize = useSummarize;
