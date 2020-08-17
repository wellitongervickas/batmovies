<template>
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
</template>

<script>
import FormButton from '@/components/Form/Button'
import LogoMain from '@/components/Logo/Main'

import * as styles from './styles/index'

export default {
  name: 'Index',
  components: {
    LogoMain,
    FormButton,
    Container: styles.container,
    ContainerButton: styles.containerButton,
  },
}
</script>
