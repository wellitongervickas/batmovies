<template>
  <div class="container">
    <div class="main-icon">
      <icon height="42" />
    </div>
    <div>
      <strong>Bat</strong>
      <span>Movies</span>
    </div>
    <div class="description">A better way to watch your movies</div>
  </div>
</template>

<script>
import Icon from '@/components/Logo/Icon'

export default {
  name: 'LogoMain',
  components: {
    Icon,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.description {
  display: block;
  color: $secondary;
  font-family: $fontFamily;
  font-size: $fontSize;
  margin: 0;
}
.container {
  user-select: none;
  text-align: center;
  animation: 1s appear;
  margin: auto;
  position: relative;
  font-size: $fontSuperBigger;
  font-family: $fontFamilySecondary;
  color: $primary;

  @media screen and (max-width: $breakPointMobile) {
    font-size: $fontSuperBig;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
}
.main-icon {
  position: absolute;
  top: -35px;
  left: 25px;

  @media screen and (min-width: $breakPointMobile) {
    top: -45px;
    left: 15px;
  }
}
</style>
