<template>
  <div class="badgets-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BadgetsItem',
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.badgets-container {
  background-color: $purple;
  padding: 0 0.6rem;
  border-radius: 0.6rem;
  line-height: $lineHeight;

  margin-right: 0.6rem;

  display: inline-block;

  &:last-of-type {
    margin-top: 0.6rem;
    margin-right: 0;
  }
}
</style>
