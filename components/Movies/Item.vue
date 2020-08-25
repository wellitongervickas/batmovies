<template>
  <nuxt-link :to="postUrl">
    <div class="container">
      <img :src="postThumbnail" :alt="movie.title" height="330" />
      <div class="details">
        <div>
          {{ movie.title }}
        </div>
        <div>
          <font-awesome-icon icon="star" />
          {{ movie.vote_average }}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'MoviesItem',
  components: {
    FontAwesomeIcon,
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
      if (this.movie.poster_path) {
        return `${process.env.appApiThumbPath}/${this.movie.poster_path}`
      }

      return this.movie.poster_path
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.container {
  position: relative;
  background-color: $black;
  overflow: hidden;
  border: 2px solid $black;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s;

  &:hover {
    transform: scale(1.1);
    border-color: $primary;
    box-shadow: 0 0 0.6rem $primary;
  }

  img {
    transform: scale(1.1);
    object-fit: cover;
    background-color: $dark;
  }
}
.details {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.6rem;
  border-radius: 0.6rem;
  font-size: $fontSmall;
  color: $secondary;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
</style>
