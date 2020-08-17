<template>
  <div>
    <div>
      <sub-heading icon="fire">Popular Movies</sub-heading>
      <movies-list :movies="trendingMovies" :loading="loading" />
    </div>
  </div>
</template>

<script>
import MoviesList from '../components/Movies/List'
import SubHeading from '../components/Typography/SubHeading'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'Welcome',
  components: {
    MoviesList,
    SubHeading,
  },
  computed: {
    loading() {
      return this.$store.state.trendingMovies.loading
    },
    trendingMovies() {
      return this.$store.state.trendingMovies.list
    },
  },
  beforeMount() {
    this.$store.commit('trendingMovies/clear')
  },
  mounted() {
    this.getMovies()
  },
  methods: {
    getMovies() {
      this.$store.dispatch('trendingMovies/list')
    },
  },
}
</script>
