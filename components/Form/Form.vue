<template>
  <div>
    <div v-for="field in section" :key="field.id" class="form-fields">
      <form-input ref="field" :field="field" />
    </div>
    <div v-if="error" class="form-error">
      {{ error }}
    </div>
    <div class="form-buttons">
      <form-button :icon="button.icon" :disabled="loading" @click="onSubmit">
        {{ button.label }}
      </form-button>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/Form/Input'
import FormButton from '@/components/Form/Button'

export default {
  name: 'Form',
  components: {
    FormInput,
    FormButton,
  },
  props: {
    error: {
      type: String,
      default: null,
    },
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
    onSubmit() {
      let map = {}
      const fields = this.$refs.field || []

      // const map = fields.keys(key => ())
      fields.forEach((item) => {
        map = {
          ...map,
          [item.field.id]: item.value,
        }
      })

      if (!fields.filter((field) => field.onValidate(field.value)).length) {
        this.submit(map)
      }
    },

    submit(map) {
      this.$emit('submit', map)
    },
  },
}
</script>

<style lang="scss" scoped>
.form-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.form-fields {
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
