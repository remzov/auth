<template>
  <div class="container">
    <Header />
    <Form v-if="!user" />
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user.user
    },

    isLogged() {
      return this.$store.state.user.isLogged
    }
  }
}
</script>
