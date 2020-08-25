<template>
  <div class="index-container">
    <div>
      <logo-main />
    </div>
    <div class="index-buttons-container">
      <form-button :as-link="true" to="/login" icon="arrow-right">
        Sign in
      </form-button>
      <form-button
        icon="user-ninja"
        :disabled="loading"
        @click="createGuestSession"
      >
        Guest
      </form-button>
    </div>
  </div>
</template>

<script>
import FormButton from '@/components/Form/Button'
import LogoMain from '@/components/Logo/Main'

export default {
  name: 'Index',
  components: {
    LogoMain,
    FormButton,
  },
  computed: {
    loading() {
      return this.$store.state.authServer.loading
    },
  },
  methods: {
    createGuestSession() {
      this.$store.dispatch('authServer/guest')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.index-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.index-buttons-container {
  margin-top: 2rem;
  display: flex;

  @media screen and (max-width: $breakPointMobile) {
    flex-direction: column;
  }

  & > div:first-child {
    margin-right: 1rem;

    @media screen and (max-width: $breakPointMobile) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
}
</style>
