export interface ISummaryBody {
    text: string | undefined;
    type?: string;
    restaurant: string | undefined;
    review: string | undefined;
}
export interface ISummarizeResponse {
    summaries: Array<ISummaryBody>;
}
//# sourceMappingURL=ISummary.d.ts.map