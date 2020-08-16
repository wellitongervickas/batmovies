<template>
  <icon>
    <img src="~assets/mdi_bat.png" alt="bat" :width="width" :height="height" />
  </icon>
</template>

<script>
import * as styles from './styles'

export default {
  name: 'LogoIcon',
  components: {
    Icon: styles.icon,
  },
  props: {
    width: {
      type: [Number, String],
      default: 'auto',
    },
    height: {
      type: [Number, String],
      default: 'auto',
    },
  },
}
</script>
