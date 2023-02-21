"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goodBye = exports.helloWorld = exports.AI21 = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class AI21 {
    constructor(token) {
        this.token = token;
    }
    summarize(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.token)
                    throw Error("Token Not Specified");
                if (!text)
                    throw Error("Text not specified");
                const body = {
                    "text": text,
                };
                const response = yield axios_1.default.post('https://api.ai21.com/studio/v1/experimental/summarize', body, {
                    headers: {
                        "Authorization": `Bearer ${this.token}`,
                        "Content-Type": "application/json"
                    },
                });
                console.log("response");
                console.log(response.status);
                console.log(response.statusText);
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
        });
    }
}
exports.AI21 = AI21;
// Test Cases Here
// const ai = new AI21(process.env.TOKEN as string);
// const ai = new AI21('wrong_token');
// console.log(ai.token);
// const testIt = async () => {
//     const resp = await ai.summarize("Olives, wheat and grapes have been the staple foods of the Mediterranean world, with seafood, above meat, as the preferred protein source. Fish and shellfish were used often since ancient times by wealthy classes as a kind of social marker, not only as a gastronomic delight, but also as a way to stay healthier. This paper reviews thoroughly how seafood has been present in the dietary practices of the Mediterranean people since ancient Egyptians up to the gastronomic discourse of some celebrated contemporary chefs. Preferences for particular tastes and flavors, local traditions, myths and religious rites (such Lent, Shabbat and Ramadan that prohibited eating some foods and allowed others) as well as cultural exchanges between countries and civilizations (with the incorporation of new ingredients and culinary techniques), have shaped the Mediterranean culinary customs along the history. Such traditions are reflected in many ancient writings, culinary literature and cookbooks. We will analyze some of these sources with special attention to those excerpts, anecdotes, cookbooks, recipes, cooks and even characters related to seafood. Knowledge and learning from our rich Mediterranean culinary heritage are important aspects to bear in mind. Whereas some contemporary celebrity chefs (and probably many diners) are not fully aware of such culinary legacy, others like Ferran Adri`a have recently recognized the importance of studying the past as a driver for creation and gastronomic innovation.");
//     console.log(resp);
// }
// testIt();
function helloWorld() {
    const message = 'Hello World from my example modern npm package!';
    return message;
}
exports.helloWorld = helloWorld;
function goodBye() {
    const message = 'Goodbye from my example modern npm package!';
    return message;
}
exports.goodBye = goodBye;
exports.default = {
    helloWorld,
    goodBye,
    AI21
};
