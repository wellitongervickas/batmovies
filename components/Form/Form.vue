<template>
  <div>
    <div v-for="field in section" :key="field.id" class="form-fields">
      <component :is="type(field.type)" ref="field" :field="field" />
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
