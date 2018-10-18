import { storage } from './storage'

export const user = function () {
  return storage('user:user')
}

export const logout = function () {
  storage(['user:user', 'user:token'])
}
