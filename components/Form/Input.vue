<template>
  <field-container>
    <label :for="field.id">
      {{ field.label }}
      <span v-if="isRequired(field)">*</span>
    </label>
    <input
      :id="field.id"
      v-model="value"
      :name="field.id"
      :placeholder="field.placeholder"
      :type="field.type"
      @input="input"
      @change="change"
      @blur="change"
    />
    <field-error v-if="error">
      {{ error }}
    </field-error>
  </field-container>
</template>

<script>
import validators from '@/helpers/validators'
import * as styles from './styles'

export default {
  name: 'FormInput',
  components: {
    FieldContainer: styles.fieldContainer,
    FieldError: styles.errorContainer,
  },
  props: {
    field: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      value: '',
      error: '',
    }
  },
  methods: {
    isRequired(field) {
      return (
        field.validations &&
        field.validations.find((validation) => validation.type === 'blank')
      )
    },

    validate() {
      const { validations } = this.field
      this.error = null

      if (validations && validations.length) {
        this.error = validations.reduce((text, validation) => {
          text = validators[validation.type](this.value, validation)
          return text
        }, null)
      }

      return !!this.error
    },

    change() {
      this.error = null
      this.$emit('change', this.value)
    },

    input() {
      this.$emit('input', this.value)
    },
  },
}
</script>
