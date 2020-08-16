<template>
  <div>
    <heading icon="film">{{ movie.title }}</heading>
    <sub-heading>{{ movie.tagline }}</sub-heading>
    <movie-container>
      <movie-thumb-container>
        <img :src="postThumbnail" :alt="movie.title" />
      </movie-thumb-container>
      <movie-content>
        <p>{{ movie.overview }}</p>

        <div>
          <font-awesome-icon icon="star" />
          {{ movie.vote_average }}
        </div>

        <movie-badges>
          <badges-item v-for="gender in genders" :key="gender">
            {{ gender }}
          </badges-item>
        </movie-badges>
      </movie-content>
    </movie-container>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Heading from '../../components/Typography/Heading'
import SubHeading from '../../components/Typography/SubHeading'
import BadgesItem from '../../components/Badgets/Item'

import { singleMovie } from '../../helpers/mocks/movies'

import * as styles from './styles'

export default {
  layout: 'dashboard',
  name: 'MoviesDetails',
  components: {
    Heading,
    SubHeading,
    BadgesItem,

    FontAwesomeIcon,

    MovieContainer: styles.movieContainer,
    MovieThumbContainer: styles.movieThumbContainer,
    MovieContent: styles.movieContent,
    MovieBadges: styles.movieBadges,
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
    genders() {
      return this.movie.genres.map((gender) => gender.name)
    },
  },
}
</script>
