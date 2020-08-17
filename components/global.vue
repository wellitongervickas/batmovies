<template>
  <span />
</template>

<script>
import { injectGlobal } from 'vue-styled-components'

import { defaultTheme } from '@/helpers/themes'

injectGlobal`
  html {
    scroll-behavior: smooth;
  }

  html, body, #__nuxt, #__layout {
    width: 100%;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    border-box: box-sizing;
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

  a {
    text-decoration: none;
  }
`

export default {
  name: 'Global',
}
</script>
