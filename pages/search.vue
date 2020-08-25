<template>
  <div>
    <div>
      <div class="container">
        <search-bar
          title="Search"
          placeholder="Search a movie, tv show or whatever"
          @submit="onSubmitQuery"
        />
      </div>
      <sub-heading icon="list-ul">Results</sub-heading>
      <movies-list :movies="movies" :loading="loading" />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/Search/Bar'
import MoviesList from '@/components/Movies/List'
import SubHeading from '@/components/Typography/SubHeading'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'Search',
  components: {
    MoviesList,
    SubHeading,
    SearchBar,
  },
  computed: {
    movies() {
      return this.$store.state.searchMovies.items.results || []
    },
    loading() {
      return this.$store.state.searchMovies.items.loading
    },
  },
  beforeMount() {
    this.$store.commit('searchMovies/clear')
  },
  methods: {
    onSubmitQuery(value) {
      this.searchMovies(value)
    },

    searchMovies(query) {
      this.$store.dispatch('searchMovies/items', {
        params: {
          query,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 1rem;
}
</style>
