<template>
  <movies-container v-if="movies.length">
    <movies-item v-for="movie in movies" :key="movie.id" :movie="movie" />
  </movies-container>
  <div v-else-if="loading">
    <spinner />
  </div>
  <div v-else>
    No movies to show yet!
  </div>
</template>

<script>
import Spinner from '../Loadings/Spinner'

import MoviesItem from './Item'
import * as styles from './styles'

export default {
  name: 'MoviesList',
  components: {
    Spinner,
    MoviesContainer: styles.moviesContainer,
    MoviesItem,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    movies: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
