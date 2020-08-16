<template>
  <heading>
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span>
      <slot />
    </span>
  </heading>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as styles from './styles'

export default {
  name: 'TypographyHeading',
  components: {
    FontAwesomeIcon,
    Heading: styles.headingContainer,
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
  },
}
</script>
