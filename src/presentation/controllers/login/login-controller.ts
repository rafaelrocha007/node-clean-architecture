import { Controller, HttpRequest, HttpResponse, Authentication, Validation } from './login-controller-protocols'
import { badRequest, ok, serverError, unauthorized } from '../../helpers/http/http-helper'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      console.log('passou aqui')
      const { email, password } = httpRequest.body
      const accessToken = await this.authentication.auth({
        email,
        password
      })
      console.log('accessToken', accessToken)
      console.log('passou auth')
      if (!accessToken) {
        console.log('não tem token')
        return unauthorized()
      }
      console.log('tem token')
      return ok({ accessToken })
    } catch (error) {
      console.error(error)
      console.log(error)
      return serverError(error)
    }
  }
}
