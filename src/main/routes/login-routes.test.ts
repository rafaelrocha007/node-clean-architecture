import { Collection } from 'mongodb'
import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'
import Bcrypt from 'bcryptjs'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Usuario',
          email: 'teste@email.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Usuario',
          email: 'teste@email.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(403)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await Bcrypt.hash('123', 12)
      await accountCollection.insertOne({
        name: 'Usuario',
        email: 'teste@email.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'teste@email.com',
          password: '123'
        })
        .expect(200)
    })

    test('Should return 401 on login user not found', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'teste@email.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
