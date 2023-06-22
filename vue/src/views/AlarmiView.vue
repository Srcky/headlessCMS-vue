<script setup lang="ts">
import HeroBanner from '@/components/common/TheHeroBanner.vue';
import TheIntro from '@/components/common/TheIntro.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageId = route.name?.toString()!;

</script>

<template>
    <HeroBanner :id="pageId" />
    <section class="relative padded-container py-10 flex flex-col items-center text-center">
        <TheIntro :id="pageId" />
    </section>
</template>
