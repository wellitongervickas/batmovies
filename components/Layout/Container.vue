<template>
  <div class="container">
    <div class="content-container">
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

.container {
  background-color: $dark;
  background-image: url('~assets/home-bg.jpg');
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.content-container {
  margin: 0 auto;
  width: 100%;
}
</style>
