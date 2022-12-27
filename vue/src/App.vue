<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/common/TheHeader.vue';
</script>

<template>
  <Header></Header>
  <RouterView />
</template>

<style lang="scss">
html {
  /* sticky footer fix */
  position: relative;
  min-height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

/**
 * Navigation lists
 */
nav {
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  /* override white-space for nested lists */
  ul li,
  ol li {
    margin-bottom: 0;
  }

  li ul,
  li ol {
    margin-top: 0;
  }
}

input[type='checkbox']:focus,
input[type='radio']:focus,
input[type='text']:focus,
input[type='textarea']:focus,
input[type='password']:focus {
  outline: 0;
  box-shadow: none;
}

.padded-container {
  @apply container px-4 m-auto;
}
</style>
