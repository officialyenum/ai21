import { IRewrite } from "./ISummary"

export enum SummarizeType {
  FINANCIAL_REPORT = 'financial_report',
  ACADEMIC_PAPER = 'academic_paper',
  REVIEWS = 'reviews',
  WIKIPEDIA_ARTICLE = 'wikipedia_article'
}

export enum RewriteType {
  GENERAL = 'general',
  CASUAL = 'casual',
  FORMAL = 'formal',
  SHORT = 'short'
}

export const SUMMARIZE_TEXT = ""

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

export const usePrompt = (prompt:string) => {
  return {
      "prompt": prompt,
  }
}

export const useSummarizeBody = (data:any) => {
  if (!data) throw Error("Data Not Specified")
  if (!data.type) throw Error("Type Not Specified")
  if (data.type && data.type === SummarizeType.REVIEWS) {
      if (!data.restaurant || !data.review) {
          throw new Error("Restaurant and Review must be specified if Summarize type is reviews");
      }
      return getRestaurantReviewPrompt(data.restaurant, data.review);
  }
  return data
}

export const useSummarize = (type:string) => {
  if (type && type === SummarizeType.REVIEWS) {
      return {
          url: 'https://api.ai21.com/studio/v1/j1-jumbo/complete',
      }
  }
  return {
      url: 'https://api.ai21.com/studio/v1/experimental/summarize',
  }
}

/**
 * 
 * @param data 
 * @returns 
 */
export const useRewriteBody = (data:IRewrite) => {
  if (!data) throw new Error("Data Not Specified");
  if (!data.text) throw new Error("Text Not Specified");
  if (data.text && data.text?.length > 500) throw new Error("Text cannot be more than 500 characters");
  return {
      text: data.text,
      intent: data.intent ?? 'general'
  }
}

export const useRewrite = () => {
  return {
      url: 'https://api.ai21.com/studio/v1/experimental/rewrite',
  }
}


export const getRestaurantReviewPrompt = (restaurant:string, review: string) => {
    return {
        "prompt": `Summarize the following restaurant review\nRestaurant: Luigi's\n\nReview: We were passing through SF on a Thursday afternoon and wanted some Italian food. We passed by a couple places which were packed until finally stopping at Luigi's, mainly because it was a little less crowded and the people seemed to be mostly locals. We ordered the tagliatelle and mozzarella caprese. The tagliatelle were a work of art - the pasta was just right and the tomato sauce with fresh basil was perfect. The caprese was OK but nothing out of the ordinary. Service was slow at first but overall it was fine. Other than that - Luigi's great experience!\n\nSummary: Local spot. Not crowded. Excellent tagliatelle with tomato sauce. Service slow at first.\n\n##\n\nSummarize the following restaurant review\nRestaurant: ${restaurant}\n\nReview: ${review}\n\nSummary:`,
        "numResults": 1,
        "maxTokens": 20,
        "temperature": 0.3,
        "topKReturn": 0,
        "topP":0.98,
        "countPenalty": {
          "scale": 0,
          "applyToNumbers": false,
          "applyToPunctuations": false,
          "applyToStopwords": false,
          "applyToWhitespaces": false,
          "applyToEmojis": false
        },
        "frequencyPenalty": {
          "scale": 0,
          "applyToNumbers": false,
          "applyToPunctuations": false,
          "applyToStopwords": false,
          "applyToWhitespaces": false,
          "applyToEmojis": false
        },
        "presencePenalty": {
          "scale": 0,
          "applyToNumbers": false,
          "applyToPunctuations": false,
          "applyToStopwords": false,
          "applyToWhitespaces": false,
          "applyToEmojis": false
        },
        "stopSequences":["##"]
    }
}