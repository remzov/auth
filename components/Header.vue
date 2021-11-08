<template>
  <header class="header">
    <div v-if="!isLogged" class="unauthorized">Незалогинен</div>
    <div v-if="user" class="user">{{ user.surname }} {{ user.name }}</div>
    <button v-if="isLogged" type="button" @click="logout">Выйти</button>
  </header>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    isLogged() {
      return this.$store.state.user.isLogged
    },
    user() {
      return this.$store.state.user.user
    }
  },
  methods: {
    logout() {
      this.$store.commit('user/USER', null)
      this.$store.commit('user/IS_LOGGED', false)
      this.$cookies.remove('a_t')
      this.$cookies.remove('r_t')
      this.$api.setToken(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
