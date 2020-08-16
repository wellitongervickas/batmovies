<template>
  <field-container>
    <label :for="field.id">
      {{ field.label }}
      <span v-if="isRequired(field)">*</span>
    </label>
    <input
      :id="field.id"
      :name="field.id"
      :placeholder="field.placeholder"
      :type="field.type"
      @input="onInput"
      @change="onChange"
    />
  </field-container>
</template>

<script>
import * as styles from './styles'
export default {
  name: 'FormInput',
  components: {
    FieldContainer: styles.fieldContainer,
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
    }
  },
  methods: {
    isRequired(field) {
      return (
        field.validations &&
        field.validations.find((validation) => validation.type === 'blank')
      )
    },

    onInput(e) {
      this.input(e.target.value)
    },

    onChange(e) {
      this.change(e.target.value)
    },

    change(value) {
      this.$emit('change', value)
    },

    input(value) {
      this.$emit('input', value)
    },
  },
}
</script>
