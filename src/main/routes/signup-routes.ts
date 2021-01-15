import { Router } from 'express'
import { adaptRoute } from '../adapters/ExpressRouteAdapter'
import { makeSignUpController } from '../factories/signup'

export default (router: Router): any => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
