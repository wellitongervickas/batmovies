<template>
  <div class="form-input-container">
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
    <div v-if="error" class="form-input-error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import validators from '@/helpers/validators'

export default {
  name: 'FormInput',
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

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.form-input-container {
  display: flex;
  flex-direction: column;

  label {
    color: $secondary;
    display: block;
    margin-bottom: 0.3rem;

    span {
      color: $red;
    }
  }

  input {
    appearance: none;
    min-width: 0;
    max-width: 100%;
    color: $secondary;
    outline: none;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.6rem;
    border: 2px solid $primary;
    line-height: $lineHeight * 2;
    padding: 0 0.6rem;

    transition: 0.5s;
  }

  input:focus {
    box-shadow: 0 0 0.6rem $primary;
  }
}
.form-input-error {
  background-color: $primary;
  color: $secondary;
  opacity: 0.7;
  padding: 0.4rem 0.6rem;
  border-radius: 0.6rem;
  margin-top: 1rem;
}
</style>
