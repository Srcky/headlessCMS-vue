<script setup lang="ts">
import RecommendedItem from '@/components/RecommendedItem.vue';
import { MediaContent } from '@/types';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import '@splidejs/vue-splide/css';

const apiUrl = import.meta.env.VITE_API_URL;
const recommendedItems: Ref<MediaContent[]> = ref([]);

onMounted(() => {
    fetch(`${apiUrl}/api/home-page-slide?populate=slide.media`).then(result => result.json()).then(res => {
        if (res.data) {
            res.data.attributes.slide.forEach((element: any) => {
                recommendedItems.value.push(element);
            });
        }
    });
});

</script>

<template>
    <svg viewBox="0 0 1440 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.519587"
            d="M746 55.5624C1113 -11.3813 1246 -3.29825 1440 6.5658V105.823L0 123V29C196 55.5624 440.57 111.275 746 55.5624Z"
            fill="#ABABAB" />
        <path opacity="0.347991"
            d="M753.131 54.5636C1024 -1.32375 1269.27 15.9784 1440 30.0421V124.853L0 142V42.1457C187.89 57.7027 405.621 126.264 753.131 54.5636Z"
            fill="#ABABAB" />
        <path
            d="M754.4 62.8323C1021.3 12.9508 1269.8 33.943 1440 54.0356V150H0V54.0356C187.3 76.2274 430 123.41 754.4 62.8323Z"
            fill="#E5E7EB" />
    </svg>
    <section class="bg-gray-200">
        <Splide :options="{ rewind: true, type: 'loop', autoplay: true, arrows: false }" class="pb-6">
            <SplideSlide v-for="(slide, index) in recommendedItems" :key="index">
                <RecommendedItem :heading="slide.heading" :text="slide.description" :buttonText="slide.button"
                    :image="slide.media.data.attributes.url" :imageAlt="slide.media.data.attributes.alternativeText" />
            </SplideSlide>
        </Splide>
    </section>
    <svg viewBox="0 0 1440 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.519587"
            d="M694 37.4376C327 104.381 194 96.2982 0 86.4342V-12.823L1440 -30V64C1244 37.4376 999.43 -18.275 694 37.4376Z"
            fill="#ABABAB" />
        <path opacity="0.347991"
            d="M686.869 38.4364C416 94.3237 170.73 77.0216 0 62.9579V-31.853L1440 -49V50.8543C1252.11 35.2973 1034.38 -33.264 686.869 38.4364Z"
            fill="#ABABAB" />
        <path
            d="M685.6 30.1677C418.7 80.0492 170.2 59.057 0 38.9644V-57L1440 -57V38.9644C1252.7 16.7726 1010 -30.41 685.6 30.1677Z"
            fill="#E5E7EB" />
    </svg>
</template>
<style lang="scss">
button.splide__pagination__page {
    @apply bg-blue-500 mx-2;
}
</style>