export const useHeaders = (token:string) => {
    return {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
}

export const useBody = (text:string) => {
    return {
        "text": text,
    }
}

export const useSummarize = () => {
    return {
        url: 'https://api.ai21.com/studio/v1/experimental/summarize',
    }
}

