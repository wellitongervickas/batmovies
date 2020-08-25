<template>
  <div v-if="movie">
    <heading icon="film">{{ movie.title }}</heading>
    <sub-heading>{{ movie.tagline }}</sub-heading>
    <div class="movie-container">
      <div class="movie-thumb-container">
        <img :src="postThumbnail" :alt="movie.title" />
      </div>
      <div class="movie-content">
        <div v-if="isAuthenticated" class="movie-favorite">
          <font-awesome-icon icon="thumbs-up" @click="setFavoriteMovie(true)" />
          <font-awesome-icon
            icon="thumbs-down"
            @click="setFavoriteMovie(false)"
          />
        </div>
        <p>{{ movie.overview }}</p>
        <div>
          <font-awesome-icon icon="star" />
          {{ movie.vote_average }}
        </div>
        <div class="movie-badgets">
          <badgets-item v-for="gender in genres" :key="gender">
            {{ gender }}
          </badgets-item>
        </div>
      </div>
    </div>
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
import BadgetsItem from '@/components/Badgets/Item'
import Spinner from '@/components/Loadings/Spinner'

import authenticated from '@/helpers/mixins/authenticated'

import imgTest from '../../assets/empty.png'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'MoviesDetails',
  components: {
    Heading,
    SubHeading,
    BadgetsItem,
    Spinner,

    FontAwesomeIcon,
  },
  mixins: [authenticated],
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

    setFavoriteMovie(favorite) {
      this.$store.dispatch('favoriteMovies/favorite', {
        account_id: this.$auth.user.id,
        media_type: 'movie',
        media_id: this.$route.params.id,
        favorite,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.movie-badgets {
  margin-top: 1rem;
}

.movie-container {
  display: flex;

  @media screen and (max-width: $breakPointMobile) {
    flex-direction: column;
  }
}

.movie-thumb-container {
  text-align: center;

  img {
    min-width: 300px;
    border-radius: 1rem;
    border: 2px solid $primary;
    box-shadow: 0 0 0.6rem $primary;
    background-color: $black;
    object-fit: cover;

    @media screen and (max-width: $breakPointMobile) {
      min-width: 100%;
    }
  }
}

.movie-content {
  p {
    margin-bottom: 2rem;
  }

  @media (min-width: $breakPointMobile) {
    margin-left: 2rem;
  }

  @media screen and (max-width: $breakPointMobile) {
    margin-top: 2rem;
  }
}

.movie-favorite {
  margin-bottom: 2rem;

  & > svg {
    cursor: pointer;

    &:hover {
      color: $purple;
    }
  }

  & > :nth-child(1) {
    margin-right: 1rem;
  }
}
</style>
