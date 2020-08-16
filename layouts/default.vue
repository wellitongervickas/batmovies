<template>
  <theme-provider :theme="{ ...theme }">
    <Nuxt />
  </theme-provider>
</template>
<script>
import { ThemeProvider, injectGlobal } from 'vue-styled-components'
import { darkTheme, defaultTheme } from '../helpers/themes'

injectGlobal`
  html, body, #__nuxt, #__layout {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    line-height: ${defaultTheme.lineHeight};
  }

  img {
    max-width: 100%;
  }

  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s;
  }

  .page-enter,
  .page-leave-to {
    opacity: 0;
  }
`
export default {
  components: {
    ThemeProvider,
  },
  data() {
    return {
      theme: darkTheme,
    }
  },
}
</script>
