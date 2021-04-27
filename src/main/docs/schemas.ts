import {
  accountSchema,
  addSurveyParamsSchema,
  errorSchema,
  loginParamsSchema,
  saveSurveyParamsSchema,
  signupParamsSchema,
  surveySchema,
  surveyAnswerSchema,
  surveysSchema,
  surveyResultSchema
} from './schemas/'

export default {
  account: accountSchema,
  addSurveyParams: addSurveyParamsSchema,
  loginParams: loginParamsSchema,
  signupParams: signupParamsSchema,
  error: errorSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  survey: surveySchema,
  surveyAnswer: surveyAnswerSchema,
  surveyResult: surveyResultSchema,
  surveys: surveysSchema
}
