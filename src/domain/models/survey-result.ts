export type SurveyResultModel = {
  surveyId: string
  question: string
  answers: SurveyResultAnswerModel[]
  date: Date
}

type SurveyResultAnswerModel = {
  image?: string
  answer: string
  percent: number
  count: number
}
