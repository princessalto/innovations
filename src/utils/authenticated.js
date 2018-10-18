import store from '@/store'
import { user } from '@/utils/user'
import { storage } from '@/utils/storage'
import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? 'http://127.0.0.1' : 'http://127.0.0.1:8000'

export const authenticated = function (cb, cbError, credentials) {
  credentials = credentials || null

  if (credentials) {
    return store.getters['authentication/tokens'].api === credentials
  }

  return new Promise((resolve, reject) => {
    if (user()) {
      axios({url: '/api/v1/authenticate', data: user(), method: 'POST'})
        .then(response => {
          let serverToken = response.data.token
          let storedToken = storage('user:token')

          if (serverToken === storedToken) {
            resolve(response)
          } else {
            resolve(false)
          }
        })
        .catch((err) => {
          storage(['user:token', 'user:user'])
          reject(err.response)
        })
    } else {
      resolve(false)
    }
  })
}

export const AUTH_TOKEN = user().token || user()
