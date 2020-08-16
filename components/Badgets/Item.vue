<template>
  <badge-container>
    <slot />
  </badge-container>
</template>

<script>
import * as styles from './styles'

export default {
  name: 'BadgesItem',
  components: {
    BadgeContainer: styles.badgeContainer,
  },
}
</script>
