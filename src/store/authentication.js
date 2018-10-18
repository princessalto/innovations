import VM from '@/mixins/localstorage'
import axios from 'axios'
import { storage } from '@/utils/storage'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = (process.env.NODE_ENV === 'production') ? 'http://127.0.0.1' : 'http://127.0.0.1:8000'

export const state = () => ({
  tokens: {
    remember: VM.methods.localstorage('auth.remember_token', null),
    api: VM.methods.localstorage('auth.api_token', null),
  },
  auth: {
    status: '',
    meta: {},
    register: {},
    password: {},
    login: {},
    isLoggedIn: VM.methods.localstorage('auth.logged_in', false) === 'true',
    user: {},
    attempts: 0,
  },
})

export const getters = {
  auth: state => state.auth,
  tokens: state => state.tokens,
}

export const mutations = {
  'LOGIN' (state, payload) {
    // state.auth.login = payload
  },

  'ATTEMPT' (state, payload) {
    state.auth.attempts++
  },

  'SUCCESS' (state, payload) {
    state.tokens = {
      remember: payload.rememberToken,
      api: payload.apiToken,
    }

    state.auth.user = payload.user
    state.auth.isLoggedIn = true
    state.auth.status = 'LOGGED_IN'
  },

  'FAILED' (state, payload) {
    state.tokens = {
      remember: null,
      api: null,
    }

    state.auth.user = {}
  },

  'LOGOUT' (state) {
    state.tokens.remember = null
    state.tokens.api = null
    // logout
  },
}

export const actions = {
  login: ({commit, dispatch}, payload) => {
    return new Promise((resolve, reject) => {
      commit('ATTEMPT', payload)
      axios({url: 'http://localhost:8000/api/v1/login', data: payload, method: 'POST'})
        .then(response => {
          const apiToken = response.data.api_token
          const rememberToken = response.data.remember_token
          const user = response.data.user
          const payload = {apiToken, rememberToken, user}

          axios.defaults.headers.common['Authorization'] = apiToken

          VM.methods.localstorage('auth.api_token', apiToken)
          VM.methods.localstorage('auth.logged_in', true)
          storage({
            'user:token': JSON.stringify(apiToken),
            'user:user': JSON.stringify(user)
          })

          commit('SUCCESS', payload)
          resolve(response)
        })
        .catch(error => {
          localStorage.removeItem('auth.api_token')
          commit('FAILED', payload)
          reject(error)
        })
    })
  },

  logout: ({commit}) => {
    commit('LOGOUT')
  },
}

export const authentication = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
