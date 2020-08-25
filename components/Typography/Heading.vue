<template>
  <h1 class="typepography-heading">
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span>
      <slot />
    </span>
  </h1>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'TypographyHeading',
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
h1.typepography-heading {
  margin-bottom: 1rem;
}
</style>
