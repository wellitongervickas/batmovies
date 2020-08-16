<template>
  <movies-container>
    <movies-item v-for="movie in movies" :key="movie.id" :movie="movie" />
  </movies-container>
</template>

<script>
import MoviesItem from './Item'
import * as styles from './styles'

export default {
  name: 'MoviesList',
  components: {
    MoviesContainer: styles.moviesContainer,
    MoviesItem,
  },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
