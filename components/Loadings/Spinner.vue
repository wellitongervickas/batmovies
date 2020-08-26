<template>
  <div>
    <div class="spinner-container" />
    <div v-if="text" class="spinner-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'LoadingsSpinner',
  props: {
    text: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables';

.spinner-text {
  margin-top: 1rem;
  text-align: center;
}

.spinner-container {
  margin: 0 auto;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: $primary;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
