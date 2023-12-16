<script setup lang="ts">
import HeroBanner from '@/components/common/TheHeroBanner.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageId = route.name as string;

</script>

<template>
    <HeroBanner :id="pageId" />
</template>