<template>
  <div class="layout-container">
    <div class="layout-container-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutContainer',
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.layout-container {
  background-color: $dark;
  background-image: url('~assets/home-bg.jpg');
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.layout-container-content {
  margin: 0 auto;
  width: 100%;
}
</style>
