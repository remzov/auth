export const state = () => ({
  isLogged: false,
  user: null
})

export const mutations = {
  IS_LOGGED(state, payload) {
    state.isLogged = payload
  },

  USER(state, payload) {
    state.user = payload
  }
}

export const actions = {
  async getUser({ commit }) {
    const user = await this.$api.$get('user')

    commit('USER', user)
    commit('IS_LOGGED', true)
  }
}

export default {
  state,
  mutations,
  actions
}
