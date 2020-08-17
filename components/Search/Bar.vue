<template>
  <div>
    <search-bar-container>
      <search-bar-field>
        <form-input :field="field" @input="onChange" />
      </search-bar-field>
      <search-bar-button>
        <form-button icon="search" :disabled="!query" @click="onSubmit" />
      </search-bar-button>
    </search-bar-container>
  </div>
</template>

<script>
import FormInput from '@/components/Form/Input'
import FormButton from '@/components/Form/Button'

import * as styles from './styles'

export default {
  name: 'SearchBar',
  components: {
    FormInput,
    FormButton,

    SearchBarContainer: styles.searchBarContainer,
    SearchBarButton: styles.searchBarButton,
    SearchBarField: styles.searchBarField,
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
