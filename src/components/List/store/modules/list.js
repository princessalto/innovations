export const state = () => ({
  list: {
    dense: false,
    listClass: 'mb-3 pt-2 transparent',
    subheader: true,
    header: true,
    headerTitle: 'List',
    avatar: false,
    subtitle: false,
    link: 'lists',
    dark: false,
  }
})

export const getters = {
  list: state => state.list
}

export const mutations = {
  PROMPT_DIALOG (state, payload) {
    payload = Object.assign(state.list, payload)
    state.list = payload
  },

  emptyState () {
    this.replaceState({ list: null })
  }
}

export const list = {
  namespaced: true,
  state,
  getters,
  mutations
}
