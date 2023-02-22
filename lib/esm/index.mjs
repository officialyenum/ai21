import axios from 'axios';
import { useBody, useHeaders, useSummarize, useSummarizeBody } from './library';
export class AI21 {
    token;
    constructor(token) {
        this.token = token;
    }
    validateSummarize(data) {
        if (!this.token)
            throw Error("Token Not Specified");
        if (!data)
            throw Error("Text and Type Not Specified");
        if (!data.type)
            throw Error("Type not specified");
        return {
            data,
            token: this.token
        };
    }
    /**
     *
     * @param data
     *
     * @returns
     */
    async summarize(data) {
        try {
            const resp = this.validateSummarize(data);
            const type = resp.data.type;
            const token = resp.token;
            const summarizeData = useSummarize(type);
            const body = useSummarizeBody(resp.data);
            const response = await axios.post(summarizeData.url, body, { headers: useHeaders(token) });
            if (response) {
                this.getResponse("success", "Summaries Retrieved Successfully", response['data']['summaries']);
            }
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
