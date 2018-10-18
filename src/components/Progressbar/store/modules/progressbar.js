export const state = () => ({
  progressbar: {
    value: 0,
    height: 1,
    visible: false,
  },
})

export const getters = {
  progressbar: state => state.progressbar,
}

export const mutations = {
  'INCREMENT' (state, payload) {
    state.progressbar.value = payload
  },

  'DONE' (state, payload) {
    state.progressbar.value = payload
  },

  'TOGGLE' (state, payload) {
    state.progressbar.visible = payload
  },
}

export const actions = {
  start: ({commit}, payload) => {
    commit('TOGGLE', true)

    let percentage = 0
    let timeout = payload * 3
    let increase = setInterval(function () {
      if (percentage > 99) {
        // Clear the interval
        setTimeout(function () {
          percentage = 0
          commit('TOGGLE', false)
          commit('DONE', 0)
          clearInterval(increase)
        }, 300)
      }

      // Increment++
      percentage += payload
      commit('INCREMENT', percentage)
    }, timeout)
  },

  done: ({commit}) => {
    commit('DONE', 0)
  },
}

export const progressbar = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
