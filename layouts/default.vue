<template>
  <theme-provider :theme="{ ...theme }">
    <global-styles />
    <layout-container :breakpoint="breakpoint">
      <Nuxt />
    </layout-container>
  </theme-provider>
</template>
<script>
import { ThemeProvider } from 'vue-styled-components'
import LayoutContainer from '@/components/Layout/Container'

import GlobalStyles from '@/components/global'
import themeDefault from '@/helpers/themes/default'

import { darkTheme } from '@/helpers/themes'

export default {
  name: 'LayoutDefault',
  components: {
    ThemeProvider,
    GlobalStyles,
    LayoutContainer,
  },
  data() {
    return {
      theme: darkTheme,
      breakpoint: themeDefault.breakpointDesktop,
    }
  },
}
</script>
