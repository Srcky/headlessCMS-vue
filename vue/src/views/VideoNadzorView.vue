<script setup lang="ts">
import HeroBanner from '@/components/common/TheHeroBanner.vue';
import TheIntro from '@/components/common/TheIntro.vue';
import WaveSection from '@/components/common/TheWaveSection.vue';
import MidContnet from '@/components/common/TheMidContent.vue';
import { useRoute } from 'vue-router';
import ThePopularCctv from '@/components/common/ThePopularCctv.vue';

const route = useRoute();
const pageId = Number(route.meta.pageId);

</script>

<template>
    <HeroBanner :id="pageId" />
    <section class="relative padded-container py-10 flex flex-col items-center text-center">
        <TheIntro :id="pageId" />
    </section>
    <WaveSection>
        <MidContnet :id="pageId" />
    </WaveSection>
    <section class="relative padded-container py-10">
        <h2 class="text-4xl text-center font-light mt-6 mb-16">Najpopularniji proizvodi</h2>
        <ThePopularCctv />
    </section>
</template>

