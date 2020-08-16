<template>
  <container>
    <MainIcon>
      <icon height="42" />
    </MainIcon>
    <first-name>Bat</first-name>
    <last-name>Movies</last-name>
    <description>A better way to watch your movies</description>
  </container>
</template>

<script>
import Icon from './Icon.vue'
import * as styles from './styles'

export default {
  name: 'LogoMain',
  components: {
    Icon,
    MainIcon: styles.mainIcon,
    Container: styles.container,
    FirstName: styles.firstName,
    LastName: styles.lastName,
    Description: styles.description,
  },
}
</script>
