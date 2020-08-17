<template>
  <div>
    <div>
      <search-container>
        <search-bar
          title="Search"
          placeholder="Search a movie, tv show or whatever"
          @submit="onSubmitQuery"
        />
      </search-container>
      <sub-heading icon="list-ul">Results</sub-heading>
      <movies-list :movies="movies" :loading="loading" />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/Search/Bar'
import MoviesList from '@/components/Movies/List'
import SubHeading from '@/components/Typography/SubHeading'

import * as styles from './styles/search'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'Search',
  components: {
    MoviesList,
    SubHeading,
    SearchBar,

    SearchContainer: styles.searchContainer,
  },
  computed: {
    movies() {
      return this.$store.state.searchMovies.results
    },
    loading() {
      return this.$store.state.searchMovies.loading
    },
  },
  beforeMount() {
    this.$store.commit('searchMovies/clear')
  },
  mounted() {
    this.$store.commit('searchMovies/clear')
  },
  methods: {
    onSubmitQuery(value) {
      this.searchMovies(value)
    },

    searchMovies(query) {
      this.$store.dispatch('searchMovies/search', query)
    },
  },
}
</script>
