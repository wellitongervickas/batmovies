<template>
  <container>
    <div>
      <logo-main />
    </div>
    <form-container>
      <Form
        :section="section"
        :button="button"
        :loading="loading"
        @submit="onSubmit"
      />
    </form-container>
  </container>
</template>

<script>
import Form from '../components/Form/Form'
import LogoMain from '../components/Logo/Main'

import * as styles from './styles/login'
import section from './sections/login'

export default {
  name: 'Login',
  components: {
    Form,
    FormContainer: styles.formContainer,

    LogoMain,

    Container: styles.container,
  },
  data() {
    return {
      section: section(),
      button: {
        label: 'Sign in',
        icon: 'sign-in-alt',
      },
    }
  },
  computed: {
    loading() {
      return this.$store.state.auth.loading
    },
  },
  beforeMount() {
    this.$store.commit('auth/clear')
  },
  methods: {
    onSubmit(map) {
      this.$store.dispatch('auth/authenticate', map).then(() => {
        this.$router.push('/welcome')
      })
    },
  },
}
</script>
