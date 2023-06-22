<script setup lang="ts">
import HeroBanner from '@/components/common/TheHeroBanner.vue';
import Features from '@/components/common/TheFeatures.vue';
import Recommended from '@/components/common/TheRecommended.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageId = route.name?.toString()!;
</script>

<template>
  <HeroBanner :id="pageId" />
  <Features :id="pageId"></Features>
  <Recommended></Recommended>
</template>

