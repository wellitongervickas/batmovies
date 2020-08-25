<template>
  <layout-container>
    <Nuxt />
  </layout-container>
</template>
<script>
import LayoutContainer from '@/components/Layout/Container'

import '~/assets/scss/app.scss'

export default {
  name: 'LayoutDefault',
  components: {
    LayoutContainer,
  },
}
</script>
