<template>
  <button-container>
    <component
      :is="is"
      v-bind="options"
      :type="type"
      :disabled="disabled"
      @click="onClick"
    >
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
    type: {
      type: String,
      default: 'submit',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
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
    is() {
      if (this.asLink) {
        return 'nuxt-link'
      }

      return 'button'
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
