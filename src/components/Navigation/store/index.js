import Vue from 'vue'
import Vuex from 'vuex'
import { mainmenu } from './modules/mainmenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mainmenu,
  },

  strict: process.env.NODE_ENV !== 'production'
})
