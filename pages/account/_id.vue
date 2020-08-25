<template>
  <div>
    <sub-heading icon="laugh">My Movies</sub-heading>
    <movies-list :movies="results" />
  </div>
</template>

<script>
import MoviesList from '@/components/Movies/List'
import SubHeading from '@/components/Typography/SubHeading'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  name: 'AccountId',
  components: {
    MoviesList,
    SubHeading,
  },
  async asyncData({ params, ...rest }) {
    const { results } = await rest.$api.$get(
      `/account/${params.id}/favorite/movies`
    )

    return {
      results,
    }
  },
}
</script>
