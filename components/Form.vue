<template>
  <div class="form">
    <form>
      <input v-model="phone" class="input" type="tel" />
      <input v-model="password" class="input" type="password" />
      <button class="button" type="button" @click="login">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',

  data() {
    return {
      phone: '',
      password: ''
    }
  },

  methods: {
    async login() {
      const formData = new FormData()

      formData.append('phone', this.phone)
      formData.append('password', this.password)

      const response = await this.$auth.$post('auth', formData)

      this.$cookies.set('a_t', response.accessToken, {
        expires: new Date(response.accessTokenExp * 1000)
      })
      this.$cookies.set('r_t', response.refreshToken, {
        expires: new Date(response.refreshTokenExp * 1000)
      })

      this.$api.setToken(response.accessToken, 'Bearer')

      await this.$store.dispatch('user/getUser')
      this.$store.commit('user/IS_LOGGED', true)
    }
  }
}
</script>

<style lang="scss" style="scoped">
.form {
  .input {
    margin-top: 16px;
  }

  .button {
    margin-top: 16px;
  }
}
</style>
