export const state = () => ({
  mainmenu: {
    model: false,
  },
})

export const getters = {
  mainmenu: state => state.mainmenu,
}

export const mutations = {
  'TOGGLE' (state, payload) {
    state.mainmenu.model = payload.model
  },
}

export const actions = {
  toggle: ({commit}, payload) => {
    commit('TOGGLE', payload)
  },
}

export const mainmenu = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
