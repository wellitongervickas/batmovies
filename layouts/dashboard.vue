<template>
  <theme-provider :theme="{ ...theme }">
    <global-styles />
    <layout-container>
      <dashboard-container>
        <nav-sidebar />
        <dashboard-content>
          <Nuxt />
        </dashboard-content>
      </dashboard-container>
    </layout-container>
  </theme-provider>
</template>
<script>
import { ThemeProvider } from 'vue-styled-components'
import NavSidebar from '../components/Nav/Sidebar/Index'
import LayoutContainer from '../components/Layout/Container'

import GlobalStyles from '../components/global'
import { darkTheme } from '../helpers/themes'

import * as styles from './styles/dashboard'

export default {
  name: 'LayoutDashboard',
  components: {
    GlobalStyles,
    ThemeProvider,

    NavSidebar,
    LayoutContainer,

    DashboardContainer: styles.container,
    DashboardContent: styles.content,
  },
  data() {
    return {
      theme: darkTheme,
    }
  },
}
</script>
