<script setup lang="ts">
import { inject, onBeforeMount, ref, Ref } from 'vue';
import { MediaContent } from '@/types';
import { apiService } from '@/api/apiServices';

const props = defineProps<{
    id: string;
}>();

const headerHeightValue: Ref<Record<string, Number>> | undefined = inject('headerHeightValue');
const baseUrl = import.meta.env.VITE_BASE_URL;
const heroBanner: Ref<MediaContent | null> = ref(null);

onBeforeMount(async () => {
    try {
        const heroBannerRes: any = await apiService.getHeroBanner(props.id);
        heroBanner.value = heroBannerRes?.attributes?.heroBanner;
    } catch (error) {
        console.log(error);
    }
});

</script>
<template>
    <section
        :style="`--header-height: ${headerHeightValue}px; --text-color:${heroBanner?.textColor ? heroBanner?.textColor : '#ffffff'}; --opacity:${heroBanner?.transparentOverlay ? heroBanner.transparentOverlay : 0.7}`"
        class="relative grid content-center h-[100vh] w-full before:block before:absolute before:content-[''] before:bg-black before:-z-10">
        <video v-if="heroBanner?.media?.data?.attributes?.mime === 'video/webm'" loop muted autoplay>
            <source :src="baseUrl + heroBanner?.media?.data?.attributes?.url" type="video/webm">
            Sorry, your browser doesn't support HTML video.
        </video>
        <picture v-else>
            <source :srcset="baseUrl + heroBanner?.media?.data?.attributes?.url" media="(min-width: 80rem)">
            <source :srcset="baseUrl + heroBanner?.media?.data?.attributes?.formats?.large?.url" media="(min-width: 48rem)">
            <source :srcset="baseUrl + heroBanner?.media?.data?.attributes?.formats?.medium?.url"
                media="(min-width: 30rem)">
            <img class="h-[100dvh] object-cover" :src="baseUrl + heroBanner?.media?.data?.attributes?.formats?.small?.url"
                :alt="heroBanner?.heading" :width="heroBanner?.media?.data?.attributes?.formats?.small?.width"
                :height="heroBanner?.media?.data?.attributes?.formats?.small?.height" loading="lazy" decoding="async">
        </picture>
        <div class="hero-text padded-container text-white relative">
            <div class="max-w-[90%] md:max-w-[70%] px-8 xl:px-0">
                <h1 v-if="heroBanner?.heading" class="leading-tight font-light break-words">{{ heroBanner?.heading }}</h1>
                <p v-if="heroBanner?.description" class="text-l md:text-xl py-10 font-light break-words"> {{
                    heroBanner?.description }}</p>
                <router-link v-if="heroBanner?.buttonLink && heroBanner?.button" :to="heroBanner?.buttonLink">
                    <button role="link" class="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded w-[10rem]">{{
                        heroBanner?.button
                    }}</button>
                </router-link>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    &::before {
        inset: 0px 0px var(--header-height) 0px;
        top: calc(0px - var(--header-height));
        opacity: var(--opacity);
    }

    video,
    picture {
        top: calc(0px - var(--header-height));
        @apply absolute -z-20 object-cover w-full h-[100vh];
    }

    .hero-text {
        color: var(--text-color);
        top: calc(0px - var(--header-height)/2);

        h1 {
            font-size: clamp(34px, 3.75rem, 5vw);
        }
    }
}
</style>