import { session } from './session'

export const user = function () {
  return session('user:user')
}

export const logout = function () {
  window.sessionStorage.removeItem('user:user')
  window.sessionStorage.removeItem('user:token')
}
