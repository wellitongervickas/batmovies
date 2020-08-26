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
  <div v-else>
    No movie to show
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Heading from '@/components/Typography/Heading'
import SubHeading from '@/components/Typography/SubHeading'
import BadgetsItem from '@/components/Badgets/Item'

import authenticated from '@/helpers/mixins/authenticated'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'MovieId',
  components: {
    Heading,
    SubHeading,
    BadgetsItem,

    FontAwesomeIcon,
  },
  mixins: [authenticated],
  async asyncData({ params, ...rest }) {
    const movie = await rest.$api.$get(`movie/${params.id}`)

    return {
      movie,
    }
  },
  computed: {
    postThumbnail() {
      if (this.movie.poster_path) {
        return `${process.env.appApiThumbPathBig}/${this.movie.poster_path}`
      }

      return this.movie.poster_path
    },
    genres() {
      return this.movie.genres.map((gender) => gender.name)
    },
  },
  methods: {
    setFavoriteMovie(favorite) {
      this.$api.$post(`account/${this.$auth.user.id}/favorite`, {
        media_type: 'movie',
        media_id: this.movie.id,
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
