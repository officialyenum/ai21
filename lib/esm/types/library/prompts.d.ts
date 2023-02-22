export declare const getReviewPrompt: (restaurant: string, review: string) => {
    prompt: string;
    numResults: number;
    maxTokens: number;
    temperature: number;
    topKReturn: number;
    topP: number;
    countPenalty: {
        scale: number;
        applyToNumbers: boolean;
        applyToPunctuations: boolean;
        applyToStopwords: boolean;
        applyToWhitespaces: boolean;
        applyToEmojis: boolean;
    };
    frequencyPenalty: {
        scale: number;
        applyToNumbers: boolean;
        applyToPunctuations: boolean;
        applyToStopwords: boolean;
        applyToWhitespaces: boolean;
        applyToEmojis: boolean;
    };
    presencePenalty: {
        scale: number;
        applyToNumbers: boolean;
        applyToPunctuations: boolean;
        applyToStopwords: boolean;
        applyToWhitespaces: boolean;
        applyToEmojis: boolean;
    };
    stopSequences: string[];
};
//# sourceMappingURL=prompts.d.ts.map