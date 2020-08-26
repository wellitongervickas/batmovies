<template>
  <div v-if="movies.length" class="movies-list-container">
    <movies-item v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
  <div v-else-if="loading">
    <spinner text="loading..." />
  </div>
  <div v-else>
    No movies to show yet!
  </div>
</template>

<script>
import Spinner from '@/components/Loadings/Spinner'

import MoviesItem from './Item'

export default {
  name: 'MoviesList',
  components: {
    Spinner,
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

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.movies-list-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.6rem;
  margin-bottom: 2rem;
  cursor: pointer;
  margin: 0 auto;

  @media screen and (max-width: $breakPointMobile) {
    grid-template-columns: 1fr;
    max-width: 225px;
    text-align: center;
  }

  @media (min-width: $breakPointMobile) and (max-width: $breakpointTablet) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 620px;
  }
}
</style>
