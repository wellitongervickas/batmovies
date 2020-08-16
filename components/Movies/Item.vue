<template>
  <nuxt-link :to="postUrl">
    <movie-container>
      <img :src="postThumbnail" :alt="movie.title" />
      <movie-details>
        <div>
          {{ movie.title }}
        </div>
        <div>
          <font-awesome-icon icon="star" />
          {{ movie.vote_average }}
        </div>
      </movie-details>
    </movie-container>
  </nuxt-link>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import * as styles from './styles'

export default {
  name: 'MoviesItem',
  components: {
    FontAwesomeIcon,
    MovieContainer: styles.movieContainer,
    MovieDetails: styles.movieDetails,
  },
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    postUrl() {
      return `/movies/${this.movie.id}`
    },
    postThumbnail() {
      return `${process.env.appApiThumbPath}/${this.movie.poster_path}`
    },
  },
}
</script>
