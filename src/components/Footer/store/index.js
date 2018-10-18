import Vue from 'vue'
import Vuex from 'vuex'
import { footer } from './modules/footer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    footer
  },
  strict: process.env.NODE_ENV !== 'production'
})
