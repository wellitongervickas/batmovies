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
  methods: {
    isRequired(field) {
      return (
        field.validations &&
        field.validations.find((validation) => validation.type === 'blank')
      )
    },
  },
}
</script>
