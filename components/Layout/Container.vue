<template>
  <container :usebackground="useBackground">
    <container-content :breakpoint="breakpoint">
      <slot />
    </container-content>
  </container>
</template>

<script>
import { container, content } from './styles'

export default {
  name: 'LayoutContainer',
  components: {
    Container: container,
    ContainerContent: content,
  },
  props: {
    useBackground: {
      type: Boolean,
      default: true,
    },
    breakpoint: {
      type: [Number, String],
      default: 'auto',
    },
  },
}
</script>
