export interface ISummaryBody {
    text?: string | null,
    type?: string
    restaurant?:  string | null,
    review?:  string | null
}

export interface IRewrite {
    text: string | null,
    intent?: string | null,
}

export interface IParaphrase {
    text: string | null,
    style?: string | null,
    spanStart?: number | null,
    spanEnd?: number | null,
}

export interface AIResponse {
    status: string,
    message: string,
    data?: any | null
}