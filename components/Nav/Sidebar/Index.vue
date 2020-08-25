<template>
  <div class="nav-sidebar-container">
    <div>
      <div class="nav-sidebar-logo-container">
        <nuxt-link to="/welcome" title="Welcome">
          <logo-icon width="42" />
        </nuxt-link>
      </div>
      <div class="nav-sidebar-content-container">
        <nuxt-link to="/search" title="Search">
          <font-awesome-icon icon="search" />
        </nuxt-link>
        <nuxt-link
          v-if="isAuthenticated"
          to="/favorite"
          title="Favorite movies"
        >
          <font-awesome-icon icon="star" />
        </nuxt-link>
      </div>
    </div>
    <nuxt-link to="/login" title="Logout">
      <font-awesome-icon icon="sign-out-alt" />
    </nuxt-link>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import LogoIcon from '@/components/Logo/Icon'

import authenticated from '@/helpers/mixins/authenticated'

export default {
  name: 'NavSidebar',
  components: {
    LogoIcon,
    FontAwesomeIcon,
  },
  mixins: [authenticated],
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.nav-sidebar-container {
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  min-width: 6rem;
  justify-content: space-between;

  a {
    transition: 0.6s;
    display: flex;
    justify-content: center;
    align-items: center;

    color: $primary;
    font-size: $fontBigger;
    padding: 0.6rem;
    min-height: 2rem;

    @media screen and (min-width: $breakPointMobile) {
      min-height: 3rem;
      font-size: $fontBiggest;
    }
  }

  .nuxt-link-active {
    border-right: 6px solid $primary;
  }

  @media screen and (max-width: $breakPointMobile) {
    min-width: 4rem;
  }
}

.nav-sidebar-content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-sidebar-logo-container {
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0.6rem;
  border-radius: 0.6rem;
}
</style>
