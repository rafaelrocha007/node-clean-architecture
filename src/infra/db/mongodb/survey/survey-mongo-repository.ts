import { MongoHelper } from '../helpers/mongo-helper'
import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyRepository, AddSurveyModel } from '@/data/usecases/add-survey/db-add-survey-protocols'
import { LoadSurveysRepository } from '@/data/protocols/db/survey/load-surveys-repository'

export class SurveyMongoRepository implements AddSurveyRepository, LoadSurveysRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }

  async loadAll (): Promise<SurveyModel[]> {
    const surveryCollection = await MongoHelper.getCollection('surveys')
    const surveys: SurveyModel[] = await surveryCollection.find().toArray()
    return surveys
  }
}
