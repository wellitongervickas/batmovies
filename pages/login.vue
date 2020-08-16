<template>
  <container>
    <div>
      <logo-main />
    </div>
    <form-container>
      <Form :section="section" :button="button" />
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
}
</script>
