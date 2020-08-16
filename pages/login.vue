<template>
  <LayoutContainer :breakpoint="breakpoint">
    <container>
      <div>
        <logo-main />
      </div>
      <form-container>
        <Form :section="section" :button="button" />
      </form-container>
    </container>
  </LayoutContainer>
</template>

<script>
import Form from '../components/Form/Form'
import LayoutContainer from '../components/Layout/Container'
import LogoMain from '../components/Logo/Main'

import themeDefault from '../helpers/themes/default'

import * as styles from './styles/login'
import section from './sections/login'

export default {
  name: 'Login',
  components: {
    Form,
    FormContainer: styles.formContainer,

    LogoMain,
    LayoutContainer,

    Container: styles.container,
  },
  data() {
    return {
      breakpoint: themeDefault.breakpointDesktop,
      section: section(),
      button: {
        label: 'Sign in',
        icon: 'sign-in-alt',
      },
    }
  },
}
</script>
