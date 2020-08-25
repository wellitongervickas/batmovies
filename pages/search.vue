<template>
  <div>
    <div>
      <div class="search-container">
        <search-bar
          title="Search"
          placeholder="Search a movie, tv show or whatever"
          @submit="onSubmitQuery"
        />
      </div>
      <sub-heading icon="list-ul">Results</sub-heading>
      <movies-list :movies="results" :loading="loading" />
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
  data() {
    return {
      results: [],
      loading: false,
    }
  },
  methods: {
    onSubmitQuery(value) {
      this.loading = true
      this.searchMovies(value)
    },

    searchMovies(query) {
      this.$api
        .$get('search/movie', {
          params: {
            query,
          },
        })
        .then(({ results }) => {
          this.results = results
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.search-container {
  margin-bottom: 1rem;
}
</style>
