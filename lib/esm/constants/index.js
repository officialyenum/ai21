export const useHeaders = (token) => {
    return {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    };
};
export const useBody = (text) => {
    return {
        "text": text,
    };
};
export const useSummarize = () => {
    return {
        url: 'https://api.ai21.com/studio/v1/experimental/summarize',
    };
};
