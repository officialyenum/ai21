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
const constants_1 = require("./constants");
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
                const summarizeData = (0, constants_1.useSummarize)();
                const body = (0, constants_1.useBody)(text);
                const response = yield axios_1.default.post(summarizeData.url, body, { headers: (0, constants_1.useHeaders)(this.token) });
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
