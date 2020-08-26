<template>
  <div class="form-button-container">
    <component :is="is" v-bind="options" @click="onClick">
      <slot />
      <font-awesome-icon v-if="icon" :icon="icon" />
    </component>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'FormButton',
  components: {
    FontAwesomeIcon,
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
      if (this.asLink) {
        return {
          to: this.to,
        }
      }

      return {
        type: this.type,
        disabled: this.disabled,
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

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.form-button-container {
  button,
  a {
    line-height: 1.4rem;
    font-size: $fontSize;
    color: $secondary;
    text-align: center;
    display: block;
    cursor: pointer;

    padding: 0.6rem 2rem;
    border-radius: 0.6rem;
    background-color: $primary;
    font-weight: $bold;
    box-shadow: 0 0 0.6rem $primary;
    transition: 0.5s;
  }

  button:hover,
  button:focus,
  a:hover,
  a:active {
    box-shadow: 0 0 1rem $primary;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;

    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>
