<template>
  <div>
    <div>
      <sub-heading icon="laugh">My Movies</sub-heading>
      <movies-list :movies="favoriteMovies" :loading="loading" />
    </div>
  </div>
</template>

<script>
import MoviesList from '@/components/Movies/List'
import SubHeading from '@/components/Typography/SubHeading'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'Favorite',
  components: {
    MoviesList,
    SubHeading,
  },
  computed: {
    loading() {
      return this.$store.state.favoriteMovies.items.loading
    },
    favoriteMovies() {
      return this.$store.state.favoriteMovies.items.results || []
    },
  },
  beforeMount() {
    this.$store.commit('favoriteMovies/clear')
  },
  mounted() {
    this.getMovies()
  },
  methods: {
    getMovies() {
      this.$store.dispatch('favoriteMovies/items', {
        account_id: this.$auth.user.id,
      })
    },
  },
}
</script>
