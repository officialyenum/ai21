import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

import { useBody, useHeaders, useSummarize, useSummarizeBody } from './library'

interface TextObject {
    text: string | undefined,
    type?: string
    restaurant:  string | undefined,
    review:  string | undefined
}
interface SummarizeResponse {
    summaries: Array<TextObject>
}

export class AI21
{
    token?: string;

    constructor(token?: string) {
        this.token = token;
    }

    validateSummarize(data?: TextObject){
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
     * @param data 
     * 
     * @returns
     */

    async summarize(data?: TextObject) {
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

export function helloWorld() {
    const message = 'Hello World from my example modern npm package!';
    return message;
}

export function goodBye() {
    const message = 'Goodbye from my example modern npm package!';
    return message;
}
  
export default {
    helloWorld,
    goodBye,
    AI21
};




