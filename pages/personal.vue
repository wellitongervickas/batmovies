<template>
  <div>
    <div>
      <sub-heading icon="laugh">My Movies</sub-heading>
      <movies-list :movies="moviesWeek" />
    </div>
  </div>
</template>

<script>
import MoviesList from '../components/Movies/List'
import SubHeading from '../components/Typography/SubHeading'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'Personal',
  components: {
    MoviesList,
    SubHeading,
  },
  data() {
    return {
      moviesWeek: [],
    }
  },
}
</script>
