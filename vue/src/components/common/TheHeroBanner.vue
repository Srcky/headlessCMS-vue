<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import { MediaContent } from '@/types';


const headerHeightValue: Ref<Record<string, Number>> | undefined = inject('headerHeightValue');

const apiUrl = import.meta.env.VITE_API_URL;
const baseUrl = import.meta.env.VITE_BASE_URL;
const heroBanner: Ref<MediaContent | null> = ref(null);

onMounted(() => {
    fetch(`${apiUrl}/home-page-hero?populate=heroBanner.media`).then(result => result.json()).then(res => {
        heroBanner.value = res.data.attributes.heroBanner;
    });
});
</script>
<template>
    <section :style="`--header-height: ${headerHeightValue}px`"
        class="relative grid content-center h-[100vh] w-full before:block before:absolute before:content-[''] before:bg-black before:opacity-70 before:-z-10">
        <video v-if="heroBanner" loop muted autoplay class="absolute -z-20 object-cover w-full h-[100vh]">
            <source :src="baseUrl + heroBanner?.media.data.attributes.url" type="video/webm">
            Sorry, your browser doesn't support HTML video.
        </video>
        <div class="hero-text padded-container text-white relative">
            <div class="max-w-[90%] md:max-w-[70%] px-8 xl:px-0">
                <h1 class="leading-tight font-light">{{ heroBanner?.heading }}</h1>
                <p class="text-l md:text-xl py-10 font-light"> {{ heroBanner?.description }}</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded w-[10rem]">{{ heroBanner?.button
                }}</button>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    &::before {
        inset: 0px 0px var(--header-height) 0px;
        top: calc(0px - var(--header-height));
    }

    video {
        top: calc(0px - var(--header-height));
    }

    .hero-text {
        top: calc(0px - var(--header-height)/2);

        h1 {
            font-size: clamp(34px, 3.75rem, 5vw);
        }
    }
}
</style>