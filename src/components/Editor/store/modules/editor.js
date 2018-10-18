export const state = () => ({
  editor: {
    instance: null,
    height: '300px',
  },
})

export const getters = {
  editor: state => state.editor,
}

export const mutations = {
  //
}

export const actions = {
  //
}

export const editor = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
