<script setup lang="ts">
import { ref, provide } from 'vue';
import type { Ref } from 'vue';
import Header from '@/components/common/TheHeader.vue';
import Footer from './components/common/TheFooter.vue';

const headerHeight = ref<Ref | Number>();
const getHeaderHeight = (newHeightValue: Number) => {
  return headerHeight.value = newHeightValue;
};

provide('headerHeightValue', headerHeight);

</script>

<template>
  <!-- <Header :header-height-value="getHeaderHeight"></Header> -->
  <Header @header-height-change="getHeaderHeight"></Header>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>

<style lang="scss">
@import 'material-icons/iconfont/material-icons.css';


html {
  /* sticky footer fix */
  position: relative;
  min-height: 100%;
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background-color: white;
  @apply text-gray-600;

  * {
    line-height: 1.6;
  }
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

img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
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
  @apply px-5 m-auto max-w-7xl w-full overflow-hidden;
}
</style>
