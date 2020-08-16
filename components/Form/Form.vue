<template>
  <div>
    <form-fields v-for="field in section" :key="field.id">
      <component :is="type(field.type)" ref="field" :field="field" />
    </form-fields>
    <form-buttons>
      <form-button :icon="button.icon">
        {{ button.label }}
      </form-button>
    </form-buttons>
  </div>
</template>

<script>
import FormInput from './Input'
import FormButton from './Button'

import * as styles from './styles'

export default {
  name: 'Form',
  components: {
    FormInput,
    FormButton,

    FormFields: styles.fields,
    FormButtons: styles.buttons,
  },
  props: {
    section: {
      type: Array,
      default: () => [],
    },
    button: {
      type: Object,
      default: () => ({
        label: 'submit',
        icon: 'arrow-right',
      }),
    },
  },
  methods: {
    type(type) {
      if (['password', 'text', 'email'].includes(type)) {
        return 'form-input'
      }

      return 'span'
    },
  },
}
</script>
