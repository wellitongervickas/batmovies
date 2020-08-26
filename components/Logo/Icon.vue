<template>
  <div>
    <img src="~assets/mdi_bat.png" alt="bat" :width="width" :height="height" />
  </div>
</template>

<script>
export default {
  name: 'LogoIcon',
  props: {
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
  },
}
</script>
