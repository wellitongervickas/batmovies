<template>
  <sidebar-container>
    <div>
      <div>
        <logo-icon width="42" />
      </div>
      <div>icons</div>
    </div>
    <sidebar-logout>
      <nuxt-link to="/login">
        <font-awesome-icon icon="sign-out-alt" />
      </nuxt-link>
    </sidebar-logout>
  </sidebar-container>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import LogoIcon from '../Logo/Icon'

import * as styles from './styles'

export default {
  name: 'NavSidebar',
  components: {
    LogoIcon,
    FontAwesomeIcon,

    SidebarContainer: styles.container,
    SidebarLogout: styles.logout,
    // SidebarContent: styles.content,
  },
}
</script>
