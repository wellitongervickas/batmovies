<template>
  <div class="login-container">
    <div>
      <logo-main />
    </div>
    <div class="login-form-container">
      <Form
        :section="section"
        :button="button"
        :loading="loading"
        :error="error"
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
      error: null,
      loading: false,
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
            {
              type: 'greaterThan',
              count: 4,
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
  beforeMount() {
    this.$auth.setUser(null)
  },
  methods: {
    account(payload) {
      this.$api
        .$get('/account', payload)
        .then((user) => {
          this.$auth.setUser({
            ...payload.params,
            ...user,
          })
        })
        .catch((err) => {
          this.error = err
        })
        .finally(() => {
          this.loading = false
        })
    },

    sessionNew(payload) {
      this.$api
        .$post('/authentication/session/new', payload)
        .then((response) => {
          this.account({
            params: {
              session_id: response.session_id,
            },
          })
        })
        .catch((err) => {
          this.loading = false
          this.error = err
        })
    },

    validateWithLogin(payload) {
      this.$api
        .$post('/authentication/token/validate_with_login', payload)
        .then((response) => {
          this.sessionNew({
            request_token: response.request_token,
          })
        })
        .catch((err) => {
          this.loading = false
          this.error = err
        })
    },

    tokenNew(credentials) {
      this.$api
        .$get('/authentication/token/new')
        .then((response) =>
          this.validateWithLogin({
            request_token: response.request_token,
            ...credentials,
          })
        )
        .catch((err) => {
          this.loading = false
          this.error = err
        })
    },

    onSubmit(credentials) {
      this.error = null
      this.loading = true

      this.tokenNew(credentials)
    },
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form-container {
  max-width: 16rem;
  margin-top: 2rem;
}
</style>
