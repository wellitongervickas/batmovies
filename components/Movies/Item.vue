<template>
  <movie-container>
    <img :src="postThumbnail" :alt="movie.title" />
  </movie-container>
</template>

<script>
import * as styles from './styles'

export default {
  name: 'MoviesItem',
  components: {
    MovieContainer: styles.movieContainer,
  },
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    postThumbnail() {
      return `${process.env.appApiThumbPath}/${this.movie.poster_path}`
    },
  },
}
</script>
