<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';
import { MediaContent } from '@/types';
import { apiService } from '@/api/apiServices';

const props = defineProps<{
    id: number;
}>();

const headerHeightValue: Ref<Record<string, Number>> | undefined = inject('headerHeightValue');
const baseUrl = import.meta.env.VITE_BASE_URL;
const heroBanner: Ref<MediaContent | null> = ref(null);

onMounted(async () => {
    const heroBannerRes = await apiService.getHeroBanner(props.id);
    try {
        heroBanner.value = heroBannerRes.data.attributes.heroBanner;
    } catch (error) {
        console.log(error);
    }
});


</script>~
<template>
    <section :style="`--header-height: ${headerHeightValue}px`"
        class="relative grid content-center h-[100vh] w-full before:block before:absolute before:content-[''] before:bg-black before:opacity-70 before:-z-10">
        <video v-if="heroBanner?.media?.data?.attributes?.mime === 'video/webm'" loop muted autoplay>
            <source :src="baseUrl + heroBanner?.media?.data?.attributes?.url" type="video/webm">
            Sorry, your browser doesn't support HTML video.
        </video>
        <picture v-else>
            <source :srcset="baseUrl + heroBanner?.media?.data?.attributes?.url" media="(min-width: 80rem)">
            <source :srcset="baseUrl + heroBanner?.media?.data?.attributes?.formats?.large?.url" media="(min-width: 48rem)">
            <source :srcset="baseUrl + heroBanner?.media?.data?.attributes?.formats?.medium?.url"
                media="(min-width: 30rem)">
            <img :src="baseUrl + heroBanner?.media?.data?.attributes?.formats?.small?.url" :alt="heroBanner?.heading"
                :width="heroBanner?.media?.data?.attributes?.width" :height="heroBanner?.media?.data?.attributes?.height"
                loading="lazy" decoding="async">
        </picture>
        <div class="hero-text padded-container text-white relative">
            <div class="max-w-[90%] md:max-w-[70%] px-8 xl:px-0">
                <h1 v-if="heroBanner?.heading" class="leading-tight font-light break-words">{{ heroBanner?.heading }}</h1>
                <p v-if="heroBanner?.description" class="text-l md:text-xl py-10 font-light break-words"> {{
                    heroBanner?.description }}</p>
                <router-link v-if="heroBanner?.buttonLink" :to="heroBanner?.buttonLink">
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
    }

    video,
    picture {
        top: calc(0px - var(--header-height));
        @apply absolute -z-20 object-cover w-full h-[100vh];
    }

    .hero-text {
        top: calc(0px - var(--header-height)/2);

        h1 {
            font-size: clamp(34px, 3.75rem, 5vw);
        }
    }
}
</style>