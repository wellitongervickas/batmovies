<template>
  <LayoutContainer :breakpoint="breakpoint">
    <container>
      <div>
        <logo-main />
      </div>
      <container-button>
        <form-button :as-link="true" to="/login" icon="arrow-right">
          Go to movies
        </form-button>
      </container-button>
    </container>
  </LayoutContainer>
</template>

<script>
import FormButton from '../components/Form/Button'
import LayoutContainer from '../components/Layout/Container'
import LogoMain from '../components/Logo/Main'

import themeDefault from '../helpers/themes/default'

import * as styles from './styles/index'

export default {
  name: 'Index',
  components: {
    LogoMain,
    LayoutContainer,
    FormButton,
    Container: styles.container,
    ContainerButton: styles.containerButton,
  },
  data() {
    return {
      breakpoint: themeDefault.breakpointDesktop,
    }
  },
}
</script>
