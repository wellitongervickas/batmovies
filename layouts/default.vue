<template>
  <theme-provider :theme="{ ...theme }">
    <global-styles />
    <Nuxt />
  </theme-provider>
</template>
<script>
import { ThemeProvider } from 'vue-styled-components'

import GlobalStyles from '../components/global'

import { darkTheme } from '../helpers/themes'

export default {
  components: {
    ThemeProvider,
    GlobalStyles,
  },
  data() {
    return {
      theme: darkTheme,
    }
  },
}
</script>
