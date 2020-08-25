<template>
  <layout-container>
    <div class="container">
      <nav-sidebar />
      <div class="content">
        <div class="greeting">Welcome, {{ userName }}</div>
        <Nuxt />
      </div>
    </div>
  </layout-container>
</template>
<script>
import NavSidebar from '@/components/Nav/Sidebar/Index'
import LayoutContainer from '@/components/Layout/Container'

import '~/assets/scss/app.scss'

export default {
  name: 'LayoutDashboard',
  components: {
    NavSidebar,
    LayoutContainer,
  },
  computed: {
    userName() {
      return this.$auth.user.name || this.$auth.user.username || 'Guest'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.container {
  display: flex;
  height: 100vh;

  .content {
    color: $secondary;
    padding: 2rem;
    overflow-y: auto;
    width: 100%;
  }

  .greeting {
    margin-bottom: 2rem;
    color: $gray;
  }
}
</style>
