<template>
  <container-styled :value="{ useBackground }">
    <slot />
  </container-styled>
</template>

<script>
import { container } from './styles'

export default {
  name: 'LayoutContainer',
  components: {
    ContainerStyled: container,
  },
  props: {
    useBackground: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
