export const actions = {
  async nuxtServerInit({ dispatch }, { app }) {
    const accessToken = app.$cookies.get('a_t')

    if (accessToken) {
      app.$api.setToken(accessToken, 'Bearer')
      await dispatch('user/getUser')
    }
  }
}

export default {
  actions
}
