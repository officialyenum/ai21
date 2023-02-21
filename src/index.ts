import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

import { useBody, useHeaders, useSummarize } from './constants'

interface TextObject {
    text: string
}
interface SummarizeResponse {
    summaries: Array<TextObject>
}

export class AI21
{
    token: string;

    constructor(token: string) {
        this.token = token;
    }

    async summarize(text: string) {
        try {
            if (!this.token) throw Error("Token Not Specified");
            if (!text) throw Error("Text not specified")
            const summarizeData = useSummarize();
            const body = useBody(text);

            const response:AxiosResponse = await axios.post(summarizeData.url, body,
                {headers: useHeaders(this.token)});
        
            if (response) {
                return {
                    status: "success",
                    data: response['data']['summaries']
                }
            }
            
        } catch (error:any) {
            return {
                status: "failed",
                message: error.message as any
            }
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




