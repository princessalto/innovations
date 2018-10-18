export const state = () => ({
  footer: {
  }
})

export const getters = {
  footer: state => state.footer
}

export const mutations = {
  PROMPT_DIALOG (state, payload) {
    payload = Object.assign(state.footer, payload)
    state.footer = payload
  },

  emptyState () {
    this.replaceState({ footer: null })
  }
}

export const footer = {
  namespaced: true,
  state,
  getters,
  mutations
}
