<template>
  <div>
    <sub-heading icon="fire">Popular Movies</sub-heading>
    <movies-list :movies="results" />
  </div>
</template>

<script>
import MoviesList from '@/components/Movies/List'
import SubHeading from '@/components/Typography/SubHeading'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'Welcome',
  components: {
    MoviesList,
    SubHeading,
  },
  async asyncData({ params, ...rest }) {
    const { results } = await rest.$api.$get('trending/movies/week')

    return {
      results,
    }
  },
}
</script>
