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
      return this.$store.state.authServer.loading
    },
  },
  beforeMount() {
    this.$store.commit('authServer/clear')
    this.$auth.setUser(null)
  },
  methods: {
    onSubmit(map) {
      this.$store.dispatch('authServer/authenticate', map).then(() => {
        this.$router.push('/welcome')
      })
    },
  },
}
</script>
