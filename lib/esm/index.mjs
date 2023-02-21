import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
export class AI21 {
    token;
    constructor(token) {
        this.token = token;
    }
    async summarize(text) {
        try {
            if (!this.token)
                throw Error("Token Not Specified");
            if (!text)
                throw Error("Text not specified");
            const body = {
                "text": text,
            };
            const response = await axios.post('https://api.ai21.com/studio/v1/experimental/summarize', body, {
                headers: {
                    "Authorization": `Bearer ${this.token}`,
                    "Content-Type": "application/json"
                },
            });
            if (response) {
                return {
                    status: "success",
                    data: response['data']['summaries']
                };
            }
        }
        catch (error) {
            return {
                status: "failed",
                message: error.message
            };
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
