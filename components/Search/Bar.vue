<template>
  <div>
    <search-bar-container>
      <search-bar-field>
        <form-input :field="field" />
      </search-bar-field>
      <search-bar-button>
        <form-button icon="search" />
      </search-bar-button>
    </search-bar-container>
  </div>
</template>

<script>
import FormInput from '../Form/Input'
import FormButton from '../Form/Button'

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
}
</script>
