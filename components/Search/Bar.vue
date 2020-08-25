<template>
  <div>
    <div class="container">
      <div class="field">
        <form-input :field="field" @input="onChange" />
      </div>
      <div class="button">
        <form-button icon="search" :disabled="!query" @click="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/Form/Input'
import FormButton from '@/components/Form/Button'

export default {
  name: 'SearchBar',
  components: {
    FormButton,
    FormInput,
  },
  props: {
    title: {
      type: String,
      default: 'Search',
    },
    placeholder: {
      type: String,
      default: 'Type a search',
    },
  },
  data() {
    return {
      query: '',
    }
  },
  computed: {
    field() {
      return {
        id: 'search',
        label: this.title,
        type: 'text',
        placeholder: this.placeholder,
      }
    },
  },
  methods: {
    onChange(value) {
      this.query = value
    },

    onSubmit() {
      this.submit(this.query)
    },

    submit(value) {
      this.$emit('submit', value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  @media screen and (max-width: $breakPointMobile) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.button {
  margin-left: 1rem;

  @media screen and (max-width: $breakPointMobile) {
    margin-left: 0;
    margin-top: 1rem;

    flex: 1;

    &,
    button {
      width: 100%;
    }
  }
}

.field {
  flex: 1;

  @media screen and (max-width: $breakPointMobile) {
    flex: 1;
    width: 100%;
  }
}
</style>
