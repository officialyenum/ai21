export interface ISummaryBody {
    text: string | undefined,
    type?: string
    restaurant:  string | undefined,
    review:  string | undefined
}

export interface ISummarizeResponse {
    status: string,
    message: string,
    data?: {
        summaries: Array<ISummaryBody> |[]
    }
}