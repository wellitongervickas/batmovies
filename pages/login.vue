<template>
  <div class="container">
    <div>
      <logo-main />
    </div>
    <div class="form">
      <Form
        :section="section"
        :button="button"
        :loading="loading"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form/Form'
import LogoMain from '@/components/Logo/Main'

export default {
  name: 'Login',
  components: {
    Form,
    LogoMain,
  },
  data() {
    return {
      section: [
        {
          id: 'username',
          type: 'text',
          label: 'Username',
          placeholder: 'Type your username',
          validations: [
            {
              type: 'blank',
            },
          ],
        },
        {
          id: 'password',
          type: 'password',
          label: 'Password',
          placeholder: 'Type your password',
          validations: [
            {
              type: 'blank',
            },
          ],
        },
      ],
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
    this.$auth.setUser(null)
  },
  methods: {
    onSubmit(credentials) {
      this.$store.dispatch('authServer/authenticate', credentials)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form {
  margin: 2rem 0;
}
</style>
