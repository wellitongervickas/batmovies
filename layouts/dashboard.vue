<template>
  <layout-container>
    <div class="dashboard-container">
      <nav-sidebar />
      <div class="dashboard-content-container">
        <div class="dashboard-greeting-container">Welcome, {{ userName }}</div>
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

.dashboard-container {
  display: flex;
  height: 100vh;
}

.dashboard-content-container {
  color: $secondary;
  padding: 2rem;
  overflow-y: auto;
  width: 100%;
}

.dashboard-greeting-container {
  margin-bottom: 2rem;
  color: $gray;
  font-size: $fontBig;
  font-weight: $bold;
}
</style>
