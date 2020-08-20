<template>
  <div v-if="movie">
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
          <badges-item v-for="gender in genres" :key="gender">
            {{ gender }}
          </badges-item>
        </movie-badges>
      </movie-content>
    </movie-container>
  </div>
  <div v-else-if="loading">
    <spinner />
  </div>
  <div v-else>
    No movie to show
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Heading from '@/components/Typography/Heading'
import SubHeading from '@/components/Typography/SubHeading'
import BadgesItem from '@/components/Badgets/Item'
import Spinner from '@/components/Loadings/Spinner'

import imgTest from '../../assets/empty.png'
import * as styles from './styles'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'MoviesDetails',
  components: {
    Heading,
    SubHeading,
    BadgesItem,
    Spinner,

    FontAwesomeIcon,

    MovieContainer: styles.movieContainer,
    MovieThumbContainer: styles.movieThumbContainer,
    MovieContent: styles.movieContent,
    MovieBadges: styles.movieBadges,
  },
  computed: {
    postThumbnail() {
      if (this.movie.poster_path) {
        return `${process.env.appApiThumbPathBig}/${this.movie.poster_path}`
      }

      return imgTest
    },
    genres() {
      return this.movie.genres.map((gender) => gender.name)
    },

    loading() {
      return this.$store.state.movieDetails.item.loading
    },

    movie() {
      return this.$store.state.movieDetails.item.result
    },
  },
  beforeMount() {
    this.$store.commit('movieDetails/clear')
  },
  mounted() {
    this.getMovie(this.$route.params.id)
  },
  methods: {
    getMovie(id) {
      this.$store.dispatch('movieDetails/item', {
        id,
      })
    },
  },
}
</script>
