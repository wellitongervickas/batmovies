export default {
  computed: {
    isAuthenticated() {
      return this.$auth.user && this.$auth.user.id
    },
  },
}
