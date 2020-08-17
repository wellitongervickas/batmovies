<template>
  <div>
    <form-fields v-for="field in section" :key="field.id">
      <component :is="type(field.type)" ref="field" :field="field" />
    </form-fields>
    <form-buttons>
      <form-button :icon="button.icon" :disabled="loading" @click="onSubmit">
        {{ button.label }}
      </form-button>
    </form-buttons>
  </div>
</template>

<script>
import FormInput from '@/components/Form/Input'
import FormButton from '@/components/Form/Button'

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
    loading: {
      type: Boolean,
      default: false,
    },
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

    onSubmit() {
      let map = {}
      let error = true

      this.$refs.field.forEach((item) => {
        error = item.validate()

        map = {
          ...map,
          [item.field.id]: item.value,
        }
      })

      if (!error) {
        this.submit(map)
      }
    },

    submit(map) {
      this.$emit('submit', map)
    },
  },
}
</script>
