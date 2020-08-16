<template>
  <movies-container>
    <movies-list>
      <movies-item />
    </movies-list>
  </movies-container>
</template>

<script>
import * as styles from './styles'
export default {
  name: 'MoviesList',
  components: {
    MoviesContainer: styles.moviesContainer,
    MoviesList: styles.moviesList,
    MoviesItem: styles.moviesItem,
  },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
