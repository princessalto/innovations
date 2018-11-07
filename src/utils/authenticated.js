import { user } from './user'

export const AUTH_TOKEN = user().api_token || null

export const authenticated = function () {
  return user().api_token || null
}
