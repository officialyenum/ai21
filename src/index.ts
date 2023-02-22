import axios, { AxiosResponse } from 'axios';

import { 
    useBody, 
    useHeaders, 
    useSummarize, 
    useSummarizeBody, 
    ISummaryBody, 
    ISummarizeResponse 
} from './library'

export class AI21
{
    token?: string;

    constructor(token?: string) {
        this.token = token;
    }

    validateSummarize(data?: ISummaryBody){
        if (!this.token) throw Error("Token Not Specified")
        if (!data) throw Error("Text and Type Not Specified")
        if (!data.type) throw Error("Type not specified")
        return {
            data,
            token: this.token
        }
    }

    /**
     * 
     * @param ISummaryBody
     * 
     * @returns ISummarizeResponse
     */

    async summarize(data?: ISummaryBody): Promise<ISummarizeResponse | undefined> {
        try {
            const resp = this.validateSummarize(data)
            const type:string = resp.data.type as string;
            const token:string = resp.token as string;
            const summarizeData = useSummarize(type);
            const body = useSummarizeBody(resp.data);

            const response:AxiosResponse = await axios.post(summarizeData.url, body,
                {headers: useHeaders(token)});
        
            if (response) {
                this.getResponse("success", "Summaries Retrieved Successfully", response['data']['summaries'])
            }
            
        } catch (error:any) {
            return this.getResponse("failed", error.message, undefined)
        }
        
    }

    getResponse(status: string, message: string, data: any){
        return {
            status,
            message,
            data
        }
    }
}
export default {
    useBody,
    useHeaders,
    useSummarize,
    useSummarizeBody,
    AI21
};




