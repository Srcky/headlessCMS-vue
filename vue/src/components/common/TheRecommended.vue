<script setup lang="ts">
import RecommendedItem from '@/components/RecommendedItem.vue';
import WaveSection from '@/components/common/TheWaveSection.vue';
import { MediaContent } from '@/types';
import { Splide, SplideSlide, Options } from '@splidejs/vue-splide';
import { apiService } from '@/api/apiServices';
import { onBeforeMount, ref, Ref } from 'vue';
import '@splidejs/vue-splide/css';

const recommendedItems: Ref<MediaContent[]> = ref([]);
const splideOptions: Options = { autoplay: true, rewind: true, arrows: false, type: 'slide' };

onBeforeMount(async () => {
    try {
        const slidesRes = await apiService.getSlides();
        if (slidesRes.data) {
            slidesRes.data.attributes.slide.forEach((element: MediaContent) => {
                recommendedItems.value.push(element);
            });
        }
    } catch (error) {
        console.log(error);
    }
});

</script>

<template>
    <WaveSection>
        <section class="bg-gray-200">
            <Splide v-if="recommendedItems.length > 0" :options="splideOptions" class="pb-6">
                <SplideSlide v-for="(slide, index) in recommendedItems" :key="index">
                    <RecommendedItem :heading="slide.heading" :text="slide.description" :buttonText="slide.button"
                        :buttonLink="slide.buttonLink" :image="slide.media?.data?.attributes?.url"
                        :imageAlt="slide.media?.data?.attributes?.alternativeText ? slide.media?.data?.attributes?.alternativeText : slide.heading" />
                </SplideSlide>
            </Splide>
        </section>
    </WaveSection>
</template>
<style lang="scss">
button.splide__pagination__page {
    @apply bg-blue-500 mx-2;
}
</style>