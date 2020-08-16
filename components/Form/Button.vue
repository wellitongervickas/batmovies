<template>
  <button-container @click="onClick">
    <component :is="type" v-bind="options">
      <slot />
      <font-awesome-icon v-if="icon" :icon="icon" />
    </component>
  </button-container>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as styles from './styles'

export default {
  name: 'FormButton',
  components: {
    FontAwesomeIcon,
    ButtonContainer: styles.buttonContainer,
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: '/',
    },
    asLink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    options() {
      return {
        to: this.asLink ? this.to : null,
      }
    },
    type() {
      if (this.asLink) {
        return 'nuxt-link'
      }

      return 'button'
    },
  },
  methods: {
    onClick() {
      this.click()
    },

    click() {
      this.$emit('click')
    },
  },
}
</script>
