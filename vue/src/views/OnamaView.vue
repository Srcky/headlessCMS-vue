<script setup lang="ts">
import HeroBanner from '@/components/common/TheHeroBanner.vue';
import TheIntro from '@/components/common/TheIntro.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageId = route.name as string;
const category = route.meta.category as string;
const imageGroup = route.meta.imageGroup as string;
</script>
<template>
  <HeroBanner :id="pageId" />
  <section class="relative padded-container py-10 flex flex-col items-center">
    <TheIntro :id="pageId" />
  </section>
</template>
