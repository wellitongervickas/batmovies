<template>
  <sidebar-container>
    <div>
      <sidebar-logo>
        <nuxt-link to="/welcome" title="Welcome">
          <logo-icon width="42" />
        </nuxt-link>
      </sidebar-logo>
      <sidebar-content>
        <nuxt-link to="/search" title="Search">
          <font-awesome-icon icon="search" />
        </nuxt-link>
        <nuxt-link to="/favorite" title="Favorite movies">
          <font-awesome-icon icon="star" />
        </nuxt-link>
      </sidebar-content>
    </div>
    <nuxt-link to="/login" title="Logout">
      <font-awesome-icon icon="sign-out-alt" />
    </nuxt-link>
  </sidebar-container>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import LogoIcon from '@/components/Logo/Icon'

import * as styles from './styles'

export default {
  name: 'NavSidebar',
  components: {
    LogoIcon,
    FontAwesomeIcon,

    SidebarLogo: styles.sidebarLogo,
    SidebarContainer: styles.container,
    SidebarContent: styles.content,
  },
}
</script>
