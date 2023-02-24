import axios, { AxiosResponse } from 'axios';

import { 
    useBody, 
    useHeaders, 
    useSummarize, 
    useSummarizeBody, 
    ISummaryBody, 
    AIResponse, 
    SummarizeType,
    IRewrite,
    useRewrite,
    useRewriteBody
} from './library'

export class AI21
{
    token?: string;

    constructor(token?: string) {
        this.token = token;
    }


    validate() {
        if (!this.token) throw Error("Token Not Initialized")
        return {
            token: this.token
        }
    }

    /**
     * 
     * @param ISummaryBody
     * 
     * @returns ISummarizeResponse
     */

    async summarize(data?: ISummaryBody): Promise<AIResponse | undefined> {
        try {
            const token:string = this.validate().token as string;
            const body = useSummarizeBody(data);
            const summarizeData = useSummarize(body.type);

            const response:AxiosResponse = await axios.post(summarizeData.url, body,
                {headers: useHeaders(token)});
            
            if (response) return this.getResponse("success", "Summaries Retrieved Successfully", response['data'])
            return this.getResponse("failed", "unknown error", null)
        } catch (error:any) {
            return this.getResponse("failed", error.message, null)
        }
        
    }

    async rewrite(data: IRewrite): Promise<AIResponse | undefined> {
        try {

            const token:string = this.validate().token as string;
            const rewriteData = useRewrite();
            const body = useRewriteBody(data);

            const response:AxiosResponse = await axios.post(rewriteData.url, body,
                {headers: useHeaders(token)});
            
            if (response) return this.getResponse("success", "Rewrite Retrieved Successfully", response['data'])
            return this.getResponse("failed", "unknown error", null)
        } catch (error:any) {
            return this.getResponse("failed", error.message, null)
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




