<template>
  <div>
    <heading icon="film">{{ movie.title }}</heading>
    <movie-container>
      <movie-thumb-container>
        <img :src="postThumbnail" :alt="movie.title" />
      </movie-thumb-container>
      <movie-content>
        {{ movie.overview }}
      </movie-content>
    </movie-container>
  </div>
</template>

<script>
import Heading from '../../components/Typography/Heading'
import { singleMovie } from '../../helpers/mocks/movies'

import * as styles from './styles'

export default {
  layout: 'dashboard',
  name: 'MoviesDetails',
  components: {
    Heading,

    MovieContainer: styles.movieContainer,
    MovieThumbContainer: styles.movieThumbContainer,
    MovieContent: styles.movieContent,
  },
  data() {
    return {
      movie: singleMovie,
    }
  },
  computed: {
    postThumbnail() {
      return `${process.env.appApiThumbPathBig}/${this.movie.poster_path}`
    },
  },
}
</script>
