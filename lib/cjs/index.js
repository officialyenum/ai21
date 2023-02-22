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
exports.AI21 = void 0;
const axios_1 = __importDefault(require("axios"));
const library_1 = require("./library");
class AI21 {
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
    summarize(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = this.validateSummarize(data);
                const type = resp.data.type;
                const token = resp.token;
                const summarizeData = (0, library_1.useSummarize)(type);
                const body = (0, library_1.useSummarizeBody)(resp.data);
                const response = yield axios_1.default.post(summarizeData.url, body, { headers: (0, library_1.useHeaders)(token) });
                if (response) {
                    this.getResponse("success", "Summaries Retrieved Successfully", response['data']['summaries']);
                }
            }
            catch (error) {
                return this.getResponse("failed", error.message, null);
            }
        });
    }
    getResponse(status, message, data) {
        return {
            status,
            message,
            data
        };
    }
}
exports.AI21 = AI21;
exports.default = {
    useBody: library_1.useBody,
    useHeaders: library_1.useHeaders,
    useSummarize: library_1.useSummarize,
    useSummarizeBody: library_1.useSummarizeBody,
    AI21
};
