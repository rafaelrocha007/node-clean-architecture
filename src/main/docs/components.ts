import { apiKeyAuthSchema } from './schemas/'
import {
  badRequest,
  notFound,
  serverError,
  unauthorized,
  forbidden
} from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  notFound,
  serverError,
  forbidden
}
