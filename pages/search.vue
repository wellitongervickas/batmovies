<template>
  <div>
    <div>
      <search-container>
        <search-bar
          title="Search"
          placeholder="Search a movie, tv show or whatever"
        />
      </search-container>
      <sub-heading icon="list-ul">Results</sub-heading>
      <movies-list :movies="movies" />
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/Search/Bar'
import MoviesList from '../components/Movies/List'
import SubHeading from '../components/Typography/SubHeading'

import * as styles from './styles/search'

export default {
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
  },
  mounted() {
    this.$store.commit('searchMovies/clear')

    setTimeout(() => {
      this.searchMovies('marvel')
    }, 5000)
  },
  methods: {
    searchMovies(query) {
      this.$store.dispatch('searchMovies/search', query)
    },
  },
}
</script>
