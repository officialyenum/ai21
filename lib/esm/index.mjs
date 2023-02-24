import axios from 'axios';
import { useBody, useHeaders, useSummarize, useSummarizeBody, useRewrite, useRewriteBody } from './library';
export class AI21 {
    token;
    constructor(token) {
        this.token = token;
    }
    validate() {
        if (!this.token)
            throw Error("Token Not Initialized");
        return {
            token: this.token
        };
    }
    /**
     *
     * @param ISummaryBody
     *
     * @returns ISummarizeResponse
     */
    async summarize(data) {
        try {
            const token = this.validate().token;
            const body = useSummarizeBody(data);
            const summarizeData = useSummarize(body.type);
            const response = await axios.post(summarizeData.url, body, { headers: useHeaders(token) });
            if (response)
                return this.getResponse("success", "Summaries Retrieved Successfully", response['data']);
            return this.getResponse("failed", "unknown error", null);
        }
        catch (error) {
            return this.getResponse("failed", error.message, null);
        }
    }
    async rewrite(data) {
        try {
            const token = this.validate().token;
            const rewriteData = useRewrite();
            const body = useRewriteBody(data);
            const response = await axios.post(rewriteData.url, body, { headers: useHeaders(token) });
            if (response)
                return this.getResponse("success", "Rewrite Retrieved Successfully", response['data']);
            return this.getResponse("failed", "unknown error", null);
        }
        catch (error) {
            return this.getResponse("failed", error.message, null);
        }
    }
    getResponse(status, message, data) {
        return {
            status,
            message,
            data
        };
    }
}
export default {
    useBody,
    useHeaders,
    useSummarize,
    useSummarizeBody,
    AI21
};
