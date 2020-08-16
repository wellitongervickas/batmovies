<template>
  <div>
    <div>
      <search-container>
        <search-bar
          title="Search"
          placeholder="Search a movie, tv show or whatever"
        />
      </search-container>
      <sub-heading icon="list-ul">Results</sub-heading>
      <movies-list :movies="moviesWeek" />
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/Search/Bar'
import MoviesList from '../components/Movies/List'
import SubHeading from '../components/Typography/SubHeading'

import * as styles from './styles/search'

export default {
  layout: 'dashboard',
  name: 'Search',
  components: {
    MoviesList,
    SubHeading,
    SearchBar,

    SearchContainer: styles.searchContainer,
  },
  data() {
    return {
      moviesWeek: [],
    }
  },
}
</script>
