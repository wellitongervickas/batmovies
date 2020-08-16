<template>
  <sub-heading>
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span>
      <slot />
    </span>
  </sub-heading>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as styles from './styles'

export default {
  name: 'TypographySubHeading',
  components: {
    FontAwesomeIcon,
    SubHeading: styles.subHeadingContainer,
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
  },
}
</script>
