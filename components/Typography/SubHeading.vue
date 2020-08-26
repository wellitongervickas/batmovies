<template>
  <h2 class="typography-subheading">
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span>
      <slot />
    </span>
  </h2>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'TypographySubHeading',
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
h2.typography-subheading {
  margin-bottom: 1rem;
}
</style>
